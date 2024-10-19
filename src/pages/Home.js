import React from 'react';
import Header from '../components/Header/Header';
import TopContent from '../components/TopContent/TopContent';
import Vision from '../components/Vision/Vision';
import Mission from '../components/Mission/Mission';
import Goals from '../components/Goals/Goals';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
       <Header />
       <TopContent />
       <Vision />
       <Mission />
       <Goals />
       <Footer />
    </>
  )
}

export default Home;