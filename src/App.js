import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardListContainer from './components/CardList/CardListContainer';
import SnackBar from './components/SnackBar/SnackBar';
import Banner from './components/Banner/Banner'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Membresias from './Pages/Membresias';
import Detalle from './Pages/Detalle'
import Inicio from './Pages/Inicio'
import Servicios from './Pages/Servicios'
import NotFound from './Pages/NotFound'
import ProductList from './Pages/ProductList'
import Agendar from './Pages/Agendar'




function App() {
  //llamamos una api utilizando fetch que nos devuelve una lista de usuarios
  /*useEffect( () => {
    fetch('https://pokeapi.co/api/v2/ability/battle-armor')
    .then((response) => {
      return response.json()
    })
    .then((res) =>{
      console.log("respuesta: ", res)
    })
  },[])*/
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Banner/>
      <h1>Bienvenidos a Wellness GYM</h1>
        <Routes>
          <Route path="/productos" element={<CardListContainer/>} />
          <Route path="/membresias" element={<Membresias />} />
          <Route path="/productos/:id" element={<Detalle />} />
          <Route path="/categorias/:categoria" element={<ProductList />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Agendar" element={<Agendar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
      
      </BrowserRouter>
      

     
      {/*<div>
        <CardListContainer/>
      </div>*/}
    </div>
  );
}

export default App;
