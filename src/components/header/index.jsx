import { Timer, ScrollText} from 'lucide-react';
import {NavLink} from 'react-router-dom';
import './header.css';


export function Header() {
    
    return(
        <header className='container--header'>
            <img src='/vite.svg' alt='Logo' />

            <nav>
                <NavLink to="/"><Timer size={24} /></NavLink>
                <NavLink to='/historico'><ScrollText size={24} /></NavLink>
          
            </nav>
       
        </header>
    )
}