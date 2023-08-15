import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Introduction from './components/Introduction';
import About from './components/About';
import Cards from './components/Cards';
import WhyBuild from './components/WhyBuild';
import Technologies from './components/Technologies';
import HowWeBuild from './components/HowWeBuild';
import HydraForm from './components/HydraForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Introduction />
      <About />
      <WhyBuild />
      <Cards />
      <Technologies />
      <HowWeBuild />
      <HydraForm />
      <Footer />
    </div>
  );
};

export default App;
