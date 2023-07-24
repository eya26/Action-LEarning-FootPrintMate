import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import {Routes,Route} from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <> 
     <Header />
     <Routes>
   
        <Route path='login' element={<Login/>} />
     </Routes>
     <Home />
     </>
   
  );
}

export default App;
