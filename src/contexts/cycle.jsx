import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";


export const CycleContext = createContext({
    cycles: [],
    activeCycleId: null,
    activeCycle: undefined,
    createNewCycle: () => {},
});

const CYCLES_KEY_LOCALSTORAGE = '@React-timer:cycles-state-1.0.0'
const ACTIVE_CYCLE_LOCALSTORAGE = '@React-timer:active-cycle-1.0.0'

export function CycleProvider({ children }){

    const [cycles, setCycles] = useState(() => {
        const cycleStorage = localStorage.getItem(CYCLES_KEY_LOCALSTORAGE);

        if(cycleStorage) {
            return JSON.parse(cycleStorage);
        }
        return [];
    });
        const [activeCycleId, setActiveCycleId] = useState(() => {
            const activeCycleStorage = localStorage.getItem(ACTIVE_CYCLE_LOCALSTORAGE);

           return activeCycleStorage;
            
        });
    
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

            setCycles((prevCycles) => {
            let newCycleState = [...prevCycles, newCycle]

            localStorage.setItem(CYCLES_KEY_LOCALSTORAGE, JSON.stringify(newCycleState))
            
            return newCycleState
            })

            setActiveCycleId(id);
            localStorage.setItem(ACTIVE_CYCLE_LOCALSTORAGE, id);
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



