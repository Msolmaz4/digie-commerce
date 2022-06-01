import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import {
  Detail,
  Favorite,
  Home,
  Login,
  Register,
  Card,
  Profil

} from './pages/index'
import PrivateRoute from './router/PrivateRoute';

import PublicRoute from './router/PublicRoute';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route element={<PublicRoute/>} >
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/id' element={<Detail/>}/>
      </Route>
     

      <Route element={<PrivateRoute/>}>
      <Route path='/favorites' element={<Favorite/>}/>
      <Route path='/profile' element={<Profil/>}/>
      <Route path='/cart' element={<Card/>}/>
      </Route>
      

      
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/> 
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
