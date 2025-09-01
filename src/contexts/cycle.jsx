import { createContext } from "react";
import PropTypes from "prop-types";

export const CycleContext = createContext({
    cycles: [],
});

export function CycleProvider({ children }){
    return <CycleContext.Provider>{children}</CycleContext.Provider>
}

CycleProvider.propTypes = {
    children: PropTypes.node.isRequired,
}




