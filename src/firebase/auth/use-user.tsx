'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { useAuth, useFirestore } from '../provider';

export function useUser() {
  const { auth } = useAuth();
  const db = useFirestore();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        if (!db) {
          setUser(firebaseUser);
          setLoading(false);
          return;
        }

        // Listen to User Profile in Firestore
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        const unsubscribeDoc = onSnapshot(userDocRef, (docSnap) => {
          if (docSnap.exists()) {
            setUser({ ...firebaseUser, ...docSnap.data() });
          } else {
            setUser(firebaseUser);
          }
          setLoading(false);
        }, (err) => {
          console.error("Firestore access error:", err);
          setUser(firebaseUser); // Fallback to auth user if doc inaccessible
          setLoading(false);
        });

        return () => unsubscribeDoc();
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, [auth, db]);

  return { user, loading };
}