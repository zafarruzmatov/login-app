import { ReactNode } from "react";

interface IAlertContextData {
    open: boolean;
    openAlert: () => void;
    closeAlert: () => void;
}

interface AlertProviderProps {
    children: ReactNode;
}

export type { IAlertContextData, AlertProviderProps };
