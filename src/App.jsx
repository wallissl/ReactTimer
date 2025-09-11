import { RouterProvider } from 'react-router-dom'; // É necessário importar o RouterProvider para usar as rotas definidas no arquivo routes.js
import { routes } from './routes';
import { CycleProvider } from './contexts/cycle'

function App() {  

  return (
    
    <CycleProvider>

      <RouterProvider router={routes} />
    
    </CycleProvider>
  )
}

export default App
