export const getLocalstorage = (key: string): string | null => {
    return localStorage.getItem(key);
};

export const setLocalstorage = (key: string, value: string): void => {
    localStorage.setItem(key, value);
};

export const clearLocalStorage = (): void => {
    localStorage.clear();
};
