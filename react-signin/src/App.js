import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SignUp from './components/SignUp';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <> 
    <Router>
     <Header />
     <Routes>
        <Route path='signup' element={<SignUp/>} />
        <Route path='login' element={<Login/>} />
        <Route path='home' element={<Home/>} />
     </Routes>

     </Router>
     </>
   
  );
}

export default App;
