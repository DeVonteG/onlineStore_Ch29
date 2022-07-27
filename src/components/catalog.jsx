import { useEffect, useState } from "react";
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
// import QuantityPicker from "./quantityPicker";

const Catalog = () =>{
    let [products,setProducts]=useState([]);
    
    const loadCatalog = async () =>{
        let service = new DataService();
        let data = await service.getCatalog();
        setProducts(data);

    }
    useEffect(() =>{
        loadCatalog();
    },[]);
    
    return(
        <div className="catalog">
            <h2>This is the Catalog</h2>
            <h3>We Have {products.length} Products Currently!!! </h3>
                <div className="catalog-container">
                    {
                        products.map(prod=> 
                        <Product key={prod.id} data={prod}></Product>)
                    }
                </div>
        </div>
    );
}


export default Catalog;
