import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter, Route, Switch, Link, useParams} from 'react-router-dom';


/*Importaciones de componentes*/ 
/*Componente Catalogo*/
import Catalogue from './components/_catalogue/catalogue';
/*Componente Navbar*/
import Navbar from './components/_navBar/navBar'
import Product from './components/_product/product';


const getProduct = axios.get("http://localhost:3002/products");
const getCategory = axios.get("http://localhost:3002/categories");


function App() {
  const [product, setProduct]= useState([]);
  const [category, setCategory]= useState([]);


  useEffect(()=>{
    console.log(product)
    console.log(category)
    getProduct.then((res)=>{
      setProduct(res.data)
    })
    getCategory.then((res)=>{
      setCategory(res.data)
    })
  },[product, category])

  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/products/:index">
          <Product/>
        </Route>
        <Route path="/products">
          <Catalogue product={product} category={category}/>
        </Route>
      </Switch> 
    </BrowserRouter>
  );
}

export default App;