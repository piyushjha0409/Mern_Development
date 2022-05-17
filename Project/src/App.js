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
import NoteState from '../src/Context/notes/NoteState'
import Login from './components/Login';

function App(){
return (
  <>
  <NoteState>
  <Router>
    <Navbar/>
    <div className="container">
    <Routes>
      {/* Route: 1 */}
      <Route path='/' element={<Home/>} />
  
      {/* Route: 2 */}
      <Route exact path='/about' element={<About/>} />
  
      {/* Route: 3 */}
      <Route exact path='/login' element={<Login/>} />
    </Routes>
    </div>
  </Router>
  </NoteState>
  </>
    

);
}
export default App;