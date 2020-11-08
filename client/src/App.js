import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import CategoryList from "./components/_categoriesList/categoriesList";
/*Importaciones de componentes*/
import Home from "./components/_home/home.js"
import Footer from "./components/_footer/footer.js";
/*Componente Catalogo*/
import Catalogue from "./components/_catalogue/catalogue";
/*Componente Navbar*/
import Navbar from "./components/_navBar/navBar";
import Product from "./components/_product/product";
import DashboardLoadCategory from "./components/_dashboardLoadCategory/dashboardLoadCategory";
import DashboardLoadProduct from "./components/_dashboardLoadProduct/dashboardLoadProduct";
import DashboardUpdateProduct from "./components/_dashboardUpdateProduct/dashboardUpdateProduct";

const getProduct = axios.get("http://localhost:3002/products");
const getCategory = axios.get("http://localhost:3002/categories");

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getProduct.then((res) => {
      setProduct(res.data);
    });
    getCategory.then((res) => {
      setCategory(res.data);
    });
  }, [product, category]);

  return (
    <Router>
      <Navbar category={category} />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products/:index">
          <Product />
        </Route>
        <Route
          path="/products"
          render={({ match }) => (
            <Catalogue product={product} category={category} match={match} />
          )}
        />
        <Route
          path="/categories/series"
          render={({ match }) => (
            <Catalogue product={product} category={category} match={match} />
          )}
        />
        <Route
          path="/categories/movies"
          render={({ match }) => (
            <Catalogue product={product} category={category} match={match} />
          )}
        />
        <Route
          path="/categories/games"
          render={({ match }) => (
            <Catalogue product={product} category={category} match={match} />
          )}
        />
        <Route path="/dashboard/category/create">
          <DashboardLoadCategory />
        </Route>
        <Route path="/dashboard/product/create">
          <DashboardLoadProduct />
        </Route>
        <Route path="/dashboard/product/update">
          <DashboardUpdateProduct />
        </Route>
        <Route path="/dashboard/category/list">
          <CategoryList />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
