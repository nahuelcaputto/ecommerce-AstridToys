import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProductToCart , removeAllProductsToCart, calculeAllCart, addQantity, subQantity } from "../../redux/actions/actions";

import { Link } from "react-router-dom";

//cart -product cart o pedido
const Cart = () => {
  const [cart, setCart] = useState([]);
  // var userId = 2;

  // const getCart = axios.get(`http://localhost:3002/users/${userId}/cart`);

  // useEffect(() => {
  //   getCart.then((res) => {
  //     setCart(res.data);
  //   });
  //   console.log(cart);
  // }, []);

  // Lineas agregadas por Rodri 02:45
  const [isUpdateList, setList] = useState(false);
  const cartStore = useSelector((state) => state.carrito);
  const dispatch = useDispatch();

  useEffect(() => {
    setCart(cartStore);
  }, [isUpdateList]);

  const handlerRemove = (f) => {
    dispatch(removeProductToCart(f));
    setList(!isUpdateList);
  };

  const handlerRemoveAll = (f) => {
    dispatch(removeAllProductsToCart());
    setList(!isUpdateList);
  };

  const handlerAddQantity = (f) => {
    dispatch(addQantity(f));
    setList(!isUpdateList);
  }
  
  const handlerSubQantity = (f) => {
    dispatch(subQantity(f));
    setList(!isUpdateList);
  }
  /*const handlerCalculeAll = (f) => {
    dispatch(calculeAllCart());
    setList(!isUpdateList);
  };*/

  return (
    <>
      <div className="container d-flex flex-column text-center my-5 p-5 border shadow">
        <div class="">
          <h1 class="display-3">My cart</h1>
          {cart.length > 0 ? (
            <>
              <table class="table">
                <thead>
                  <tr>
                    <th className="m-2">Name</th>
                    <th>Price</th>
                    <th className="m-2">Cant</th>
                    <th>Description</th>
                    <th>Delete Item</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {console.log(cart)} */}
                  {cart.map((f) => (
                    <tr>
                      <td>{f.name}</td>
                      <td>{f.price}</td>
                      <td>
                          <div className="input-group d-flex">
                                <span className="input-group-btn">
                                    <button onClick={()=>handlerSubQantity(f)} id='minus' type="button" className="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
                                      <span className="glyphicon glyphicon-minus">-</span>
                                    </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" value={f.cant} min="1" max="100"/>
                                <span className="input-group-btn">
                                    <button onClick={()=>handlerAddQantity(f)} id='plus' type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                        <span className="glyphicon glyphicon-plus">+</span>
                                    </button>
                                </span>
                          </div>
                      </td>      
                      {/* <td>{f.cant}</td> */}
                      <td>{f.description}</td>
         
                      <td>
                        <button onClick={() => handlerRemove(f)} type="button"> 
                        <ion-icon class="glyphicon glyphicon-trash">  </ion-icon>
                       </button>
                      </td>
                      <td>
                      <div class="total"> ${f.cant * f.price},00</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p class="lead">
                <button onClick={() => handlerRemoveAll()} class="btn btn-danger btn-lg my-5"><ion-icon name="trash-outline" style={{fontSize:"24px"}}/>  CLEAN CART</button>
              </p>
            </>
          ) : (
            <div className="my-4">
              <div>
                <p className="lead">Aun no tienes productos agregados.</p>
                <p className="lead">
                  Visita nuestro sección de productos para empezar a comprar.
                </p>
              </div>
            </div>
          )}
          <hr class="my-2" />
          <p class="lead">
            <Link to="/products" className="text-decoration-none">
              <button class="btn btn-danger btn-lg my-5">
                CONTINUE SHOPPING{" "}
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;