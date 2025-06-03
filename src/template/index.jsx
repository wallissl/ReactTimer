import { Header } from "../components/header";
import PropTypes from "prop-types";


export function Layout( { children }) {

    return (

        <>
            <Header/>
            <main>

                {children}

            </main>

        </>
    )
}

Layout.PropTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};