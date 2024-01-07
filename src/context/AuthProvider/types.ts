import { ReactNode } from "react";

interface IAuthContextData {
    isAuthenticated: boolean;
    logout: () => void;
    setUser: (key: string) => void;
}

interface IAuthProviderProps {
    children: ReactNode;
}

export type { IAuthContextData, IAuthProviderProps };
