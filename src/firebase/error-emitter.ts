'use client';

import { FirestorePermissionError } from './errors';

type ErrorCallback = (error: FirestorePermissionError) => void;

class FirebaseErrorEmitter {
  private listeners: { [key: string]: ErrorCallback[] } = {};

  emit(event: 'permission-error', error: FirestorePermissionError): void {
    if (this.listeners[event]) {
      this.listeners[event].forEach((cb) => cb(error));
    }
  }

  on(event: 'permission-error', listener: ErrorCallback): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  off(event: 'permission-error', listener: ErrorCallback): void {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter((cb) => cb !== listener);
  }
}

export const errorEmitter = new FirebaseErrorEmitter();
