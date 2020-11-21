import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Spinner from "../utils/spinner/spinner";

const validation = axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, { withCredentials: true })

const Dashboard = () => {
    const [redirect, setRedirect] = useState(false)
    const [load, setLoad] = useState(true)
    const user = useSelector((state) => state.user);

    useEffect(() => {
        setRedirect(false)
        console.log(load)
        
        setTimeout(()=>{
            validation
            .then(r => { console.log("Estas logueado!"); console.log(r.data); setLoad(false)})
            .catch(err => { console.log("No estas logueado"); setRedirect(true) } ) 
        }, 300)

        
      }, []);
    
    return (
        
        <>
        {!user ? <Redirect to='/products'/> : null}
        {redirect ? <Redirect to='/products'/> : null}
        { load ? <Spinner />  : (
        <div className="container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
                 <div style={{backgroundImage: "url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/02/estantes-figuras-funko-pop-1861835.jpg?itok=Y9Oa9CMk)",  width: "100%",
                 height: "280px",}} className="">
                <h1 style={{background:"white"}}  className="display-3 text-center">Dashboard</h1>
                <hr className="my-2" />
                <div className="d-flex justify-content-around px-5 mt-5">
                <Link to="/dashboard/product/update">
                    <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
                    <ion-icon style={{fontSize:"24px"}} name="add-circle-outline"></ion-icon>{" "} Product
                    </button>
                </Link>
                <Link to="/dashboard/category/list">
                    <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
                    <ion-icon style={{fontSize:"24px"}} name="add-circle-outline"></ion-icon>{" "} Category 
                    </button>
                </Link>
                <Link to="/dashboard/orders/list">
                    <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
                    <ion-icon style={{fontSize:"24px"}} name="add-circle-outline"></ion-icon>{" "} Orders 
                    </button>
                </Link>
                <Link to="/dashboard/users/list">
                    <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
                    <ion-icon style={{fontSize:"24px"}} name="add-circle-outline"></ion-icon>{" "} Users 
                    </button>
                </Link>
                </div>
            </div>
        </div>
        
        )}

        </>
        )
}

export default Dashboard;