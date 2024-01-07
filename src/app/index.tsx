import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { useAuthContext } from "~context/AuthProvider";

function App() {
    const { isAuthenticated } = useAuthContext();
    return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}

export default App;
