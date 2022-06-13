import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';
import { Signup } from './components/Signup';
import {PrivateRoute} from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<PrivateRoute Component={Signup} />} />
      <Route path='/About' element={<About />} />
      <Route path='/Signup' element= {<Signup />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
