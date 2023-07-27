import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SignUp from './components/SignUp';
import {Routes,Route} from "react-router-dom";
import Login from './components/Login';
import CarbonCalc from './components/CarbonCalc'; // Import the new CarbonCalc component
import TogglePage from './components/TogglePage'; // Import the new CarbonCalc component
import Game from "./components/Game";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <> 
     <Header />
     <Routes>
        <Route path='signup' element={<SignUp/>} />
        <Route path='login' element={<Login/>} />
        <Route path='calculator' element={<TogglePage />} />
        <Route path='quiz' element={<Game />} />
        <Route path='dashboard' element={<Dashboard />} />
     </Routes>
     </>
   
  );
}

export default App;
