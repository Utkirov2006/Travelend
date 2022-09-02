import React from 'react';
import Boxs from './components/Boxs';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Wrappers from './components/Wrappers';

const App = () => {
  return (
    <>



      <main>
        <Navbar />
        <MainContent />

      </main>
      <Boxs />
      <Cards />
      <Wrappers/>

      <Footer/>

    </>
  );
};

export default App;