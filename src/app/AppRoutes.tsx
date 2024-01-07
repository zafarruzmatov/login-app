import { Route, Routes } from "react-router-dom";
import { routesData } from "~constants/routes";

const AppRoutes = () => {
    return (
        <Routes>
            {routesData.map(({ id, path, component }) => (
                <Route key={id} path={path} element={component} />
            ))}
        </Routes>
    );
};

export default AppRoutes;
