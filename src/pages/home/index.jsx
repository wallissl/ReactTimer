import { use, useState } from "react";
import { Button } from "../../components/button";
import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";
import './home.css';
import { useForm, FormProvider } from "react-hook-form";


export function HomePage() {

    const methods = useForm();
    const { handleSubmit} = methods;
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

  

    return (

        <form className="container--home" onSubmit={handleSubmit(createNewCycle)}>
            {/* <input type="text" {...register('name', { required: true })} /> // input para o nome do ciclo */}

            <FormProvider {...methods}>
            <NewCycle />
            </FormProvider>
            <Timer activeCycle={activeCycle}/>
            <Button>Começar</Button>
                
        </form>
        
    );
}

export default HomePage;