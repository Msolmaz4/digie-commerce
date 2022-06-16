
import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import {
  Detail,
  Favori,
  Home,
  Login,
  Register
}
from './pages/index'


function App() {
  return (
    <BrowserRouter>
   
      

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/id' element={<Detail/>}/>
      <Route path='/favori' element={<Favori/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;
