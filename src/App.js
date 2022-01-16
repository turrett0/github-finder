import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Navbar from './components/layout/Navbar';
import './App.css';
import Footer from './components/layout/Footer';
import { GithubProvider } from './context/github/GithubContext';

function App() {
  return (
    <GithubProvider>


      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className='container mx-auto px-3 pb-12'></main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound " element={< NotFound />} />
            <Route path="/*" element={< NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
