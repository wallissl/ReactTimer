
import { Button } from "../../components/button";
import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";
import './home.css';
import { useForm, FormProvider } from "react-hook-form";
import { useCycle } from "../../contexts/cycle";


export function HomePage() {

    const methods = useForm();
    const { activeCycle, createNewCycle } = useCycle();
    const { handleSubmit} = methods;

    /**
     * 
     * @param {Object} data - Dados do formulário
     * @param {String} data.task - Tarefa a ser realizada
     * @param {number} data.minutesAmount - Duração do ciclo em minutos 
     */

    function onSubmit({ minutesAmount, task}) {
        createNewCycle({ minutesAmount, task});
    }  

    return (

        <form className="container--home" onSubmit={handleSubmit(onSubmit)}>
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