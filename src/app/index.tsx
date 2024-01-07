import { useState } from "react";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";

function App() {
    const [isAuth] = useState(false);
    return isAuth ? <AppRoutes /> : <AuthRoutes />;
}

export default App;
