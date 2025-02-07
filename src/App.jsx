import axios from 'axios';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { ProductsPage } from './ProductsPage';

// axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.withcredentials = true;

function App() {
  return (
    <div>
      <Header />
      <ProductsPage />
      <Footer />
    </div>
  )
}

export default App
