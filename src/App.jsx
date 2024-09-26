import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App(){
    return (
      <div className="container">
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a la mejor tienda de ropa deportiva"}/>
      </div>

    )

}
export default App