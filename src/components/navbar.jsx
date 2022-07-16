import "./navbar.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import StoreContext from "../context/storeContext";

function Navbar(){
    let cart= useContext(StoreContext)
    return (
        <div className="navbar">
            <ul className="nav nav-pills">
                 <li className="nav-item">
                     <Link className="nav-link" aria-current="page" to="/">Home</Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" aria-current="page" to="/catalog">Catalog</Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" aria-current="page" to="/about">About</Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" aria-current="page" to="/admin">Admin</Link>
                 </li>
                 
             </ul> 
            <form className="d-flex">
                <Link className="btn btn-outline-light" to="/cart">
                    <span className= "badge bg-primary">{cart.length}</span>View Cart
                </Link>
            </form>
        </div>
    );
}

export default Navbar;