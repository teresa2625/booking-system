import { useCallback, useEffect } from "react";

const useLocalStorageWithExpiry = () => {
  const saveData = useCallback(
    (key: string, data: any, expiryInMillis: number) => {
      const dataWithTimestamp = {
        data,
        expiry: Date.now() + expiryInMillis,
      };
      localStorage.setItem(key, JSON.stringify(dataWithTimestamp));
    },
    [],
  );

  const getData = useCallback((key: string): any | null => {
    const storedItem = localStorage.getItem(key);

    if (!storedItem) return null;

    try {
      const { data, expiry } = JSON.parse(storedItem);

      if (Date.now() > expiry) {
        localStorage.removeItem(key);
        return null;
      }

      return data;
    } catch {
      return null;
    }
  }, []);

  const removeExpiredData = useCallback(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const storedItem = localStorage.getItem(key);

        if (storedItem) {
          try {
            const { expiry } = JSON.parse(storedItem);
            if (expiry && Date.now() > expiry) {
              localStorage.removeItem(key);
              console.log("removed");
            }
          } catch (error) {
            console.error(`Error parsing localStorage item with key "${key}":`, error);
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    removeExpiredData();

    const interval = setInterval(removeExpiredData, 60 * 1000);
    return () => clearInterval(interval);
  }, [removeExpiredData]);

  return { saveData, getData };
};

export default useLocalStorageWithExpiry;
