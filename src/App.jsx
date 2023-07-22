// import { useEffect, useState } from 'react';
import About from "./components/About"
import CallToAction from "./components/CTA"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import MySocials from "./components/MySocials"
import Navbar from "./components/Navbar"
import ServicesOffered from "./components/Services"
import ShopMyMerch from "./components/ShopMyMerch"
// import Preloader from './components/utils/Preloader';

const App = () => {
  // const [isloading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, [])
  return (
    <>
      {/* {isloading ? <Preloader /> : <div> */}
      <Navbar />
      <Hero />
      <About />
      <ServicesOffered />
      <Gallery />
      <ShopMyMerch />
      <MySocials />
      <CallToAction />
      <Footer />
      {/* </div>} */}
    </>
  )
}

export default App
