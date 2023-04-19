import './App.css';
import PrimerComponente from './Components/PrimerComponente';
import { Routes, Route } from 'react-router-dom';
import { Home } from "react-router-dom";
import { About } from "react-router-dom";
import { Contact } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;



