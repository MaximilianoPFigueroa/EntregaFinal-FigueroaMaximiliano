import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element= {<ItemListContainer greeting="Bienvenidos" />}/>
          <Route path="/category/:idCategory" element={ <ItemListContainer greeting="Bienvenidos" /> }/>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} /> 
        </Routes>
      </BrowserRouter>
    </div>

  )

}
export default App