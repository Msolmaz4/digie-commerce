
import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import {
  Detail,
  Favori,
  Home,
  Login,
  Register,
  Cart,
  Profil
  }
from './pages/index'
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivatRoute';


function App() {
  return (
    <BrowserRouter>
   
      

    <Routes>
      <Route element={<PublicRoute/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      </Route>
      


      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      <Route element={<PrivateRoute/>}>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/profil' element={<Profil/>}/>
      <Route path='/favori' element={<Favori/>}/>
      </Route>
      
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;
