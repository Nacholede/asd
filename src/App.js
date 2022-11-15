import ItemListContainer from "./components/itemList/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import NavBar from "./components/NavBar/navBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
const styleH3 = {backgroundColor: "blue",  color: "white"}
let titulo = <h1 style={styleH3}> Tienda Retrostore  </h1>; 

  return (
    <BrowserRouter> 
    <navBar />
    <Routes> 
      <Route path="/categoria/:idcategoria" element= {<ItemListContainer />} /> 
      <Route path="/detail/:iditem" element= {<ItemDetailContainer />} /> 
      </Routes> 
    <div className="App">
      <header className="App-header">
        <NavBar /> 
          {titulo}
         <ItemListContainer />
         
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
