import './App.css';
import Homepage from './components/homepage/Homepage';
import ContactList from './components/contact/ContactList';
import UpdateContact from './components/updatecontact/UpdateContact';
import NavBar from './components/navbar/NavBar';
import AddContact from './components/addcontact/AddContact';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>


      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/list' element={<ContactList/>} />
        <Route path="/add" element={<AddContact/>} />
        <Route path="/update/:id"element={  <UpdateContact/>} />
      </Routes>  
      
      
    
    </div>
  );
}

export default App;
