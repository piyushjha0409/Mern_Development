import './App.css'
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
}from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App(){
return (
  <>
  <Router>
    <Navbar/>
    <Routes>
      {/* Route: 1 */}
      <Route path='/' element={<Home/>} />
  
      {/* Route: 2 */}
      <Route exact path='/about' element={<About/>} />
    </Routes>
  </Router>
  </>
    


);
}
export default App;