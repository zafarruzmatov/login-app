import ReactDOM from "react-dom/client";
import App from "./app";

import "~assets/style/main.scss";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "~context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>
);
