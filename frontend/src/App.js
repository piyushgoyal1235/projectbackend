import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';  // Assuming this is the correct import
import men_banner from './Components/assets/banner_mens.png';
import women_banner from './Components/assets/banner_women.png';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Men' element={< ShopCategory banner={men_banner} category="men" />} />
          <Route path='/Women' element={< ShopCategory banner={women_banner} category="Women" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/LoginSignup' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
