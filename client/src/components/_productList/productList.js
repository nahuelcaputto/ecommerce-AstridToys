import React, { useEffect, useState } from "react";
import ProductCard from "../_productCard/productCard";
import axios from "axios";

const getSerie = axios.get(`http://localhost:3002/products/search/Series`);
const getMovie = axios.get(`http://localhost:3002/products/search/Movies`);
const getGame = axios.get(`http://localhost:3002/products/search/Games`);

const ProductList = ({ product, match }) => {
  const [productos, setProductos] = useState([]);

  let tituloCatalogo = "";
  let query = "";
  var isCatalogue = false;
  switch (match.url) {
    case "/categories/series":
      query = "Serie";
      tituloCatalogo = "Funkos de Series";
      getSerie.then((res) => {
        setProductos(res.data);
      });
      break;
    case "/categories/movies":
      query = "Movie";
      tituloCatalogo = "Funkos de Peliculas";
      getMovie.then((res) => {
        setProductos(res.data);
      });
      break;
    case "/categories/games":
      query = "Game";
      tituloCatalogo = "Funkos de Juegos";
      getGame.then((res) => {
        setProductos(res.data);
      });
      break;
    default:
      isCatalogue = true;
      tituloCatalogo = "Catalogo de Funkos ";
  }

  return (
    <div>
      <div className="d-flex flex-wrap ml-2 justify-content-center justify-content-md-start text-center">
        { isCatalogue && product.map((p) => (p.active && <ProductCard product={p} />))}
        { !isCatalogue && productos.map((p) => (p.active && <ProductCard product={p} />))} 
      </div>
    </div>
  );
};

export default ProductList;
