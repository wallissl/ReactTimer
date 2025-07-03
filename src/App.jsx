import { RouterProvider } from 'react-router-dom'; // É necessário importar o RouterProvider para usar as rotas definidas no arquivo routes.js
import { routes } from './routes';

function App() {  

  return (
    
    <>   
      <RouterProvider router={routes} />
    
    </>
  )
  
}

export default App
