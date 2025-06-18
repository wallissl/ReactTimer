import { Timer, ScrollText} from 'lucide-react';

import './header.css';


export function Header() {
    
    return(
        <header className='container--header'>
            <img src='/vite.svg' alt='Logo' />

            <nav>
                <a href='#'><Timer size={24} /></a>
                <a href='#'><ScrollText size={24} /></a>
          
            </nav>
       
        </header>
    )
}