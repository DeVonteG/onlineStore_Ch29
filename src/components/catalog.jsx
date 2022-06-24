import "./catalog.css";
import Product from "./product";
// import QuantityPicker from "./quantityPicker";

const Catalog = () =>{
    return(
        <div className="catalog">
            <h2>This is the Catalog</h2>
            <h3># of Products</h3>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
}

export default Catalog;
