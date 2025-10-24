/**
 * MMKV Storage Utility
 * High-performance key-value storage using MMKV
 *
 * Benefits over AsyncStorage:
 * - 30x faster read/write operations
 * - Synchronous API (no async/await needed)
 * - Encrypted storage support
 * - Smaller bundle size
 */

import { createMMKV } from 'react-native-mmkv';

// Create default storage instance
export const storage = createMMKV({
  id: 'benchmark-storage',
  // encryptionKey: 'your-encryption-key', // Add encryption key for sensitive data
});

/**
 * Type-safe storage wrapper
 */
export const kv = {
  /**
   * Get a string value
   */
  getString: (key: string): string | null => {
    return storage.getString(key) ?? null;
  },

  /**
   * Set a string value
   */
  setString: (key: string, value: string): void => {
    storage.set(key, value);
  },

  /**
   * Get a number value
   */
  getNumber: (key: string): number | null => {
    return storage.getNumber(key) ?? null;
  },

  /**
   * Set a number value
   */
  setNumber: (key: string, value: number): void => {
    storage.set(key, value);
  },

  /**
   * Get a boolean value
   */
  getBoolean: (key: string): boolean | null => {
    return storage.getBoolean(key) ?? null;
  },

  /**
   * Set a boolean value
   */
  setBoolean: (key: string, value: boolean): void => {
    storage.set(key, value);
  },

  /**
   * Get a JSON value
   */
  getJSON: <T>(key: string): T | null => {
    const value = storage.getString(key);
    if (!value) {
      return null;
    }
    try {
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  },

  /**
   * Set a JSON value
   */
  setJSON: (key: string, value: unknown): void => {
    storage.set(key, JSON.stringify(value));
  },

  /**
   * Delete a key
   */
  delete: (key: string): void => {
    storage.remove(key);
  },

  /**
   * Check if a key exists
   */
  contains: (key: string): boolean => {
    return storage.contains(key);
  },

  /**
   * Get all keys
   */
  getAllKeys: (): string[] => {
    return storage.getAllKeys();
  },

  /**
   * Clear all data
   */
  clearAll: (): void => {
    storage.clearAll();
  },
};

/**
 * Storage keys enum for type safety
 */
export const StorageKeys = {
  THEME_PREFERENCE: 'theme_preference',
  LAST_VISITED_ROUTE: 'last_visited_route',
  USER_PREFERENCES: 'user_preferences',
  ONBOARDING_COMPLETED: 'onboarding_completed',
} as const;

export type StorageKey = (typeof StorageKeys)[keyof typeof StorageKeys];
