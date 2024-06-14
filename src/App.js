import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddUser from './components/AddUser';
import AddBus from './components/AddBus';
import Search from './components/Search';
import ViewAll from './components/ViewAll';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/AddUser' element={<AddUser/>}/>
          <Route path='/AddBus' element={<AddBus/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/ViewAll' element={<ViewAll/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
