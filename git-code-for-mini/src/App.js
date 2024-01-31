import './App.css';
// import Navbar from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Register from './routes/Register';
import Cards from './routes/Cards';
import Sidebar from './routes/Sidebar';
import Video1 from './routes/Video1';
import Login from './routes/Login';
import CreateCourse from './routes/CreateCourse';
import Assignment from './routes/Assignment';
import Assignment2 from './routes/Assignment2'
import Lesson1 from './routes/Lesson1';
import Lesson2 from './routes/Lesson2';
import Lesson3 from './routes/Lesson3';
import Lesson4 from './routes/Lesson4';
import Lesson5 from './routes/Lesson5';
import Descriptions from './routes/Descriptions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/video1' element={<Video1/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/CreateCourse' element={<CreateCourse/>}/>
        <Route path='/Assignment' element={<Assignment/>}/>
        <Route path='/Assignment2' element={<Assignment2/>}/>
        <Route path='/Lesson1' element={<Lesson1/>}/>
        <Route path='/Lesson2' element={<Lesson2/>}/>
        <Route path='/Lesson3' element={<Lesson3/>}/>
        <Route path='/Lesson4' element={<Lesson4/>}/>
        <Route path='/Lesson5' element={<Lesson5/>}/>
        <Route path='/Descriptons' element={<Descriptions/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
