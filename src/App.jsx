import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/CartContainer/Cart'
import Checkout from './components/Checkout/Checkout'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <CartProvider>

          <NavBar />
          <ToastContainer theme="dark"/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos" />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting="Bienvenidos" />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>

  )

}
export default App