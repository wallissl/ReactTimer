import { Header } from "../components/header";
import './template.css';
import {Outlet} from 'react-router-dom';

export function Layout() {

    return (

        <>
            <Header/>
            <main className="container--template">
                <div className="container--template-contents">
                    <Outlet />
                </div>

            </main>

        </>
    )
}

