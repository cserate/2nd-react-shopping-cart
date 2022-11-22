import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import ProductDetail from './Components/Product Detail/ProductDetail';
import Product from './Components/Product/Product';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path= '/' element= {<Homepage />} />
          <Route path= '/cart' element= {<Cart />} />
          <Route path= '/detail' element= {<ProductDetail />} />
        </Routes>
        
      </BrowserRouter>
     
      
    </div>
  );
  }

export default App;
