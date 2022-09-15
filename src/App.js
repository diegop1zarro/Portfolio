import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import All from './Components/All/All'; 
import './App.css';

function App() {
  return (
    <div className="App">
    {/* <SideBar/> */}
     <Routes>
      <Route path="" element={<All/>}/> 
    </Routes>
    </div>
  );
}

export default App;
