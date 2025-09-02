import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";


export const CycleContext = createContext({
    cycles: [],
    activeCycleId: null,
    activeCycle: undefined,
    createNewCycle: () => {},
});

export function CycleProvider({ children }){

    const [cycles, setCycles] = useState([]);
        const [activeCycleId, setActiveCycleId] = useState(null);
    
        /**
         * 
         * @param {Object} data - Dados do formulário
         * @param {String} data.task - Tarefa a ser realizada
         * @param {number} data.minutesAmount - Duração do ciclo em minutos 
         */
    
        function createNewCycle({ minutesAmount, task}) {
            // id: string;
            // task: string;
            // minutesAmount: number;
            // startDate: Date;
            // interruptedDate?: Date;
            // finishedDate?: Date;
            const id = String(new Date().getTime());
    
            const newCycle = {
                id,
                task,
                minutesAmount,
                startDate: new Date(),
    
            }
            setCycles( (prevCycles) => [...prevCycles, newCycle]);
            setActiveCycleId(id);
        }
    
        const activeCycle = cycles.find(cycle => cycle.id === activeCycleId); // Encontra o ciclo ativo com base no ID

    return <CycleContext.Provider value={{ cycles, activeCycleId, activeCycle, createNewCycle }}>{children}</CycleContext.Provider>
}

CycleProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export function useCycle(){
    const context = useContext(CycleContext);
    return context;
}



