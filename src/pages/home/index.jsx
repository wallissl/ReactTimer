import { Button } from "../../components/button";
import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";
import './home.css';
import { userForm } from "react-hook-form";


export function HomePage() {

    const { register, handleSubmit } = useForm()

    return (

        <form className="container--home"> 
            <NewCycle   />
            <Timer />
            {/* <Button variant="secondary">Começar</Button> */}

            <Button>Começar</Button>
                
        </form>
        
    );
}

export default HomePage;