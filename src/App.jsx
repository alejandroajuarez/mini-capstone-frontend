import axios from 'axios';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { ProductsPage } from './ProductsPage';
import { SignupPage } from './SignupPage';
import { LoginPage } from './LoginPage';
import { LogoutLink } from './LogoutLink';

// axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.withcredentials = true;

function App() {
  return (
    <div>
      <Header />
      <SignupPage />
      <LoginPage />
      <LogoutLink />
      <ProductsPage />
      <Footer />
    </div>
  )
}

export default App
