import logo from './logo.svg';
import './App.css';
import User_Interface from './Component/User_Interface/login.jsx';
import P404 from './Component/page404/page404.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
   
<BrowserRouter>
  <Routes>
          
          <Route path="/" element={<User_Interface />}> </Route>
          <Route path="E404" element={<P404 />}> </Route>
            
          
          
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
