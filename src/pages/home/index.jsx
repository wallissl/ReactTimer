import { Button } from "../../components/button";
import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";
import './home.css';

export function HomePage() {
    return (

        <div className="container--home"> 
            <NewCycle   />
            <Timer />
            {/* <Button variant="secondary">Começar</Button> */}

            <Button>Começar</Button>
                
        </div>
        
    );
}

export default HomePage;