import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='mx-5 py-3'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
