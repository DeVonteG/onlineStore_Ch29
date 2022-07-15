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
                     <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" aria-current="page" to="/catalog">Catalog</Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" aria-current="page" to="/about">About</Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" aria-current="page" to="/cart"><span className= "badge bg-primary">{cart.length}</span>View Cart</Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" aria-current="page" to="/admin">Admin</Link>
                 </li>
             </ul> 
        </div>
    );
}

export default Navbar;