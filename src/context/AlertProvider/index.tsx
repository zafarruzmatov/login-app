import {
    FC,
    useState,
    useContext,
    createContext,
} from "react";

import type { IAlertContextData, AlertProviderProps } from "./types";

const AlertContext = createContext({} as IAlertContextData);

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
    const [open, setOpen] = useState(false);

    const openAlert = () => {
        setOpen(true);
    };

    const closeAlert = () => {
        setOpen(false);
    };

    return (
        <AlertContext.Provider
            value={{
                open,
                openAlert,
                closeAlert,
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};

export const useAlertContext = () => useContext(AlertContext);
