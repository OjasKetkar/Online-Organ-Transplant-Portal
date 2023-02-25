import logo from './logo.svg';
import './App.css';
import {Route ,Routes, Redirect, BrowserRouter} from 'react-router-dom'
import Login from './components/login';
import Signup from './components/signup';
import RequestPage from './components/requestPage.js';
import Home from './components/Home';
import Contact from './components/Contact';
import Donate from './components/Donate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path='/' element = {<Home />} />
        <Route path='/home' element = {<Home />} />
        <Route path='/donate' element = {<Donate />} />
        <Route path='/request' element = {<RequestPage />} />
        <Route path='/contact' element = {<Contact />} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

