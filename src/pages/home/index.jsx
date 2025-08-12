import { Button } from "../../components/button";
import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";
import './home.css';
import { useForm, FormProvider } from "react-hook-form";


export function HomePage() {

    const methods = useForm();
    const { handleSubmit} = methods; 

    function createNewCycle(data){
        console.log(data)
    }

    return (

        <form className="container--home" onSubmit={handleSubmit(createNewCycle)}>
            {/* <input type="text" {...register('name', { required: true })} /> // input para o nome do ciclo */}

            <FormProvider {...methods}>
            <NewCycle />
            </FormProvider>
            <Timer />
            <Button>Começar</Button>
                
        </form>
        
    );
}

export default HomePage;