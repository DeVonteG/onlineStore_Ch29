import { useEffect, useState } from "react";
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
// import QuantityPicker from "./quantityPicker";

const Catalog = () =>{
    let [products,setProducts]=useState([]);
    
    const loadCatalog = () =>{
        let service = new DataService();
        let data = service.getCatalog();
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
            {/* <Product title= "Test A" price="10.50"></Product>
            <Product title="Test B" price="11.00"></Product>
            <Product title="Test C" price="12.50"></Product>
            <Product title="Test D"price="13.00"></Product>
            <Product title="Test E" price="14.00"></Product>
            <Product title="Test F" price="15.00"></Product> */}
        </div>
    );
}


export default Catalog;
