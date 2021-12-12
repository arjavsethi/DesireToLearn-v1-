import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProjectState from "./context/projectState"
import LinkTree from "./components/Linktree/Linktree"
import Footer from "./components/Footer/Footer"
import Application from "./components/Application/Application.js"
import QuestionsList from './components/Questions/QuestionsList';
import Contact from './components/Contact/Contact';
import Testimonial from './components/Testimonial/Testimonial';
import { useRef } from 'react';
import Blog from './components/Blog/Blog';
function App() {
  const testimonialSection = useRef(null);
  const goToTestimonial = ()=>{
    window.scrollTo({top :testimonialSection.current.offsetTop , behavior:"smooth" })
  }

  return (
    < >
    <ProjectState>
      <Router>

      <Navbar/>
     <Routes>
    <Route path='/' element={<><Home goToTestimonial={goToTestimonial}/><LinkTree /><div ref={testimonialSection}><Testimonial   /></div> <Footer/> </>} />
    
    <Route path='/application' element={<> <Application /> </>} />
    <Route path='/blog' element={ <><Blog />  <div className="fixed-bottom">  <Footer/> </div></>} />
    <Route path='/contact' element={ <><Contact/> <Footer/> </> } />
    <Route path='/questions' element={<> <QuestionsList /> <Footer/></>} />
        </Routes>
      


    
        </Router>
        </ProjectState>
    </>
  );
}

export default App;
