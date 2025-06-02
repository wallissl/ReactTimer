import './header.css';

export function Header() {
    
    return(
        <header className='container--header'>
            <img src='/vite.svg' alt='Logo' />

            <nav>
                <a href='#'>Home</a>
                <a href='#'>Histórico</a>
          
            </nav>
       
        </header>
    )
}