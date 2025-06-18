/* import { HomePage } from './pages/home'; */
import React from 'react';
import { Layout } from './template';
import { HistoryPage } from './pages/history';

function App() {  

  return (

    <React.Fragment>
      
      <Layout >
      
      {/*   <HomePage /> */}
        <HistoryPage />

      </Layout>

    </React.Fragment>
  )
  
}

export default App
