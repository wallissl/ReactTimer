
import { Button } from "../../components/button";
import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";
import './home.css';
import { useForm, FormProvider } from "react-hook-form";
import { useCycle } from "../../contexts/cycle";
import { Hand, Play } from "lucide-react";



export function HomePage() {

    const methods = useForm({
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });
    const { createNewCycle, activeCycle, interruptedCurrentCycle } = useCycle();
    const { handleSubmit, reset} = methods;

    /**
     * 
     * @param {Object} data - Dados do formulário
     * @param {String} data.task - Tarefa a ser realizada
     * @param {number} data.minutesAmount - Duração do ciclo em minutos 
     */

    function onSubmit(data) {
        console.log('novo')
        createNewCycle(data);
        reset();
    }  

    return (

        <form className="container--home" onSubmit={handleSubmit(onSubmit)}>
            {/* <input type="text" {...register('name', { required: true })} /> // input para o nome do ciclo */}

            <FormProvider {...methods}>
            <NewCycle />
            </FormProvider>
            <Timer />

                {
                    activeCycle ? (
                        <Button type="button" variant="secondary" onClick={interruptedCurrentCycle}>
                            <Hand size={24} />Interromper
                        </Button>
                    ) : (
                        <Button type="submit">
                            <Play size={24} />Começar</Button>
                    )
                }
                
        </form>
        
    );
}

export default HomePage;