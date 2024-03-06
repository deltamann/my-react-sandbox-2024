import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import About from './routes/About';
import Home from './routes/Home';
import Demo from './routes/Demo';

function App() {
  return (
    <div className="App App-Content">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/demo' element={<Demo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
