import { HomePage } from './pages/home';
import { Header } from './components/header'
import React from 'react';
import { Layout } from './template';

function App() {  

  return (

    <React.Fragment>
      
      <Layout >
      
        <Header />
        <HomePage />

      </Layout>

    </React.Fragment>
  )
  
}

export default App
