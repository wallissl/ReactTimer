/* import { HomePage } from './pages/home'; */
import React from 'react';
import { Layout } from './template';
import { HistoryPage } from './pages/history';
import { RouterProvider } from 'react-router-dom'; // É necessário importar o RouterProvider para usar as rotas definidas no arquivo routes.js
import { routes } from './routes';

function App() {  

  return (

    <React.Fragment>
      <RouterProvider router={routes} />
      
      {/* <Layout > */}
      {/*   <HomePage /> */}
      {/* <HistoryPage /> */}
      {/* </Layout> */}

    </React.Fragment>
  )
  
}

export default App
