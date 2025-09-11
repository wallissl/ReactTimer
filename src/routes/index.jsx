import { createBrowserRouter } from "react-router-dom";
import {HomePage} from "../pages/home";
import { HistoryPage } from "../pages/history";
import { Layout } from "../template";

export const routes = createBrowserRouter([
    {
        path: '/', // caminho
        element: <Layout />, // componente que vai renderizar em tela
        children: [
            {
            path: '/', // caminho da página,
            element: <HomePage /> // componente que será renderizado.
            },
            {
            path: '/historico',
            element: <HistoryPage /> // caminho da página de histórico.
            }
        ]
    }
])