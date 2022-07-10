import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
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
                     <Link className="nav-link" aria-current="page" to="/cart">Cart</Link>
                 </li>
             </ul> 
        </div>
    );
}

export default Navbar;