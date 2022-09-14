import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
// import SideBar from './Components/SideBar/SideBar.jsx';
// import About from './Components/About/About';
import All from './Components/All/All';
// import Carousel from './Components/Carousel/Carousel.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
    {/* <SideBar/> */}
     <Routes>
      {/* <Route path="" element={<About/>}/> */}
      {/* <Route path="" element={<Carousel/>}/> */}
      <Route path="" element={<All/>}/> 
    </Routes>
    </div>
  );
}

export default App;
