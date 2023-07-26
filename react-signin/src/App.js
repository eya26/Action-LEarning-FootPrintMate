import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SignUp from './components/SignUp';
import {Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <> 
     <Header />
     <Routes>
        <Route path='signup' element={<SignUp/>} />
        <Route path='login' element={<Login/>} />
        <Route path='home' element={<Home/>} />
     </Routes>
     </>
   
  );
}

export default App;
