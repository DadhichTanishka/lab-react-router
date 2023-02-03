import './App.css';
import NavBar from './nav';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import Contacts from './contacts';
import About from './about';
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
      </Routes>
    </div>
    
   
  );
}

export default App;
