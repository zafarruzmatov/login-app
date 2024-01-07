import {
    FC,
    useState,
    useMemo,
    useContext,
    useCallback,
    createContext,
} from "react";
import {
    clearLocalStorage,
    getLocalstorage,
    setLocalstorage,
} from "~utils/helpers";

import type { IAuthContextData, IAuthProviderProps } from "./types";

const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
    const token = getLocalstorage("accessToken");
    const [accessToken, setAccessToken] = useState<string | null>(token);

    const logout = useCallback(() => {
        clearLocalStorage();
        setAccessToken(null);
    }, []);

    const isAuthenticated = useMemo(() => {
        const correct =
            !!accessToken?.trim() &&
            accessToken !== "undefined" &&
            accessToken !== null;

        if (!correct) {
            logout();
        }

        return correct;
    }, [accessToken]);

    const setUser = (token: string) => {
        setAccessToken(token);
        setLocalstorage("accessToken", token);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                logout,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
