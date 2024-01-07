export const getLocalstorage = (key: string): string | null => {
    return localStorage.getItem(key);
};

export const setLocalstorage = (key: string, value: string): void => {
    localStorage.setItem(key, value);
};

export const clearLocalStorage = (): void => {
    localStorage.clear();
};

export const fakeApi = (password: string, delay: number = 1000) => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            if (password === "Oybek") {
                resolve("token");
            } else {
                reject("400");
            }
        }, delay);
    });
};
