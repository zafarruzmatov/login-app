import ReactDOM from "react-dom/client";
import App from "./app";

import "~assets/style/main.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
