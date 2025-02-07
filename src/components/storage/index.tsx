import createWebStorage from "redux-persist/lib/storage"; // ✅ Correct import

const createNoopStorage = (): Storage => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
    clear() {
      return Promise.resolve();
    },
    key(_index: number) {
      return Promise.resolve(null);
    },
    length: 0, // Required for Storage interface
  } as unknown as Storage; // ✅ Ensures correct type
};

const storage = typeof window !== "undefined" ? createWebStorage : createNoopStorage();

export default storage;
