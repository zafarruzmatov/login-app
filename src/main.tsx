import ReactDOM from "react-dom/client";
import App from "./app";

import "~assets/style/main.scss";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "~context/AuthProvider";
import { AlertProvider } from "~context/AlertProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <AuthProvider>
        <AlertProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AlertProvider>
    </AuthProvider>
);
