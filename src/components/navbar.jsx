import "./navbar.css";

function Navbar(){
    return (
        <div className="navbar">
            <ul className="nav nav-pills">
                 <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">Home</a>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" >Catalog</a>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" >Link</a>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link">Cart</a>
                 </li>
             </ul> 
        </div>
    );
}

export default Navbar;