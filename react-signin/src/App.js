import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SignUp from './components/SignUp';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from "./components/Dashboard";
import TogglePage from './components/TogglePage';
import Game from "./components/Game";
import DrawerSide from "./components/DrawerSide";


function App() {
  return (
    <> 
    <Router>
      <DrawerSide/>
     {/* <Header /> */}
     <Routes>
        <Route path='signup' element={<SignUp/>} />
        <Route path='login' element={<Login/>} />
        <Route path='home' element={<Home/>} />
        <Route path='calculator' element={<TogglePage />} />
        <Route path='quiz' element={<Game />} />
        <Route path='dashboard' element={<Dashboard />} />
     </Routes>

     </Router>
     </>
   
  );
}

export default App;
