import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Componant/Navbar';
import Footer from './Componant/Footer';
import Contact from './Componant/Contact';
import AllUsers from './Componant/AllUsers';
import EditUser from './Componant/EditUser';

function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/alluser' element={<AllUsers/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
    </Routes>
    <Footer/>
   </Router>
   </>
  );
}

export default App;
