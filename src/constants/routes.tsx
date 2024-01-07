import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { HomePage, NotFoundPage } from "~pages/index";

interface IRoutes {
    id: number;
    path: string;
    component: ReactNode;
}

export const routesData: IRoutes[] = [
    {
        id: 0,
        path: "/login",
        component: <Navigate to="/" replace />,
    },
    {
        id: 2,
        path: "*",
        component: <NotFoundPage />,
    },
    {
        id: 1,
        path: "/",
        component: <HomePage />,
    },
];
