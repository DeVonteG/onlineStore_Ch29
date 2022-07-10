import "./home.css";
import {Link} from "react-router-dom";



const Home =()=>{
    

    return(
        <div>
            <h1>Welcome to Orgnix, Fresh produce is only 1 click away</h1>
            <Link className="btn btn-primary" aria-current="page" to="/catalog">Catalog</Link>
        </div>    
            
    )
};


export default Home;