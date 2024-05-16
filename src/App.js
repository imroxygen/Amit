import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home"
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import TimeLine from "./components/TimeLine";
import Work from "./components/Work";
import  "./styles/app.scss"
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <Header/>
    <Home />
    <Work />
    <TimeLine/>
    <Services />
    <Testimonial />
    <Contact />
    <Footer/>
    <Toaster/>
    </>
  );
}

export default App;
