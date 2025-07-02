import { createBrowserRouter } from "react-router-dom";
import {HomePage} from "../pages/home";
import { HistoryPage } from "../pages/history";

export const routes = createBrowserRouter([
    {
        path: '/', // caminho da página,
        elemente: <HomePage /> // componente que será renderizado.
    },
    {
        path: '/historico',
        elmente: <HistoryPage /> // caminho da página de histórico.
    }
])