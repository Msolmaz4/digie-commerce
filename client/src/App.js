import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import {
  Detail,
  Favorite,
  Home,
  Login,
  Register

} from './pages/index'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/detail/id' element={<Detail/>}/>
      <Route path='/favorite' element={<Favorite/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/> 
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
