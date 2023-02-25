import logo from './logo.svg';
import './App.css';
import {Route ,Routes, BrowserRouter , Redirect} from 'react-router-dom'
import Login from './components/login';
import Signup from './components/signup';
import requestPage from './components/requestPage.js';
import Home from './components/Home';

function App() {
  return (
    
    <div className="App">
      <></>
      <BrowserRouter>
        <Route path='/request' component />
        <Route path='/' exact component={<Home />} />
      </BrowserRouter>
       
    </div>
  );
}

export default App;

