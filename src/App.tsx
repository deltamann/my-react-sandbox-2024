import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import About from './routes/About';
import Home from './routes/Home';
import Demo from './routes/Demo';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='App-Header'>
          <header>
            <NavBar />
          </header>
        </div>
        <div className='App-Content'>
          <section>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/demo' element={<Demo />} />
            </Routes>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
