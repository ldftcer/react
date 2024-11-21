import './App.css';
import Header from './components/Header';
import About from './components/About';
import Product from './components/Product';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import Contactus from './components/Contactus';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Product />
      <Blog />
      <Reviews />
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default App;