import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Navb from './components/Navb'
import Home from './pages/Home'
import Login from './pages/Login'
import Market from './pages/Market'
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
        <Router>
          <Navb/>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/Market' element={<Market/>}></Route>
            <Route path='/Detail' element={<Detail/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
