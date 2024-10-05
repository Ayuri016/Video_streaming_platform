import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home"
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Header />  
      
      <div className="App">
        <Routes>          
          <Route path="/" element={<Login />}/>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/detail/:id/' element={<Detail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
