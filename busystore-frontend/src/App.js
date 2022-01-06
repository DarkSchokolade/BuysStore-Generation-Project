import './App.css';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="gap"></div>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
