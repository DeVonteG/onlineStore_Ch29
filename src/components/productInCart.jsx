import "./productInCart.css";
import {useContext} from "react";
import storeContext  from "../context/storeContext";


const ProductInCart= (props) =>{
    const removeProduct = useContext(storeContext).removeProduct;
    const getTotal=() =>{
        let total = props.data.price* props.data.quantity;
        return total.toFixed(2);
    };

    const handleRemove= () =>{
        removeProduct(props.data.id);
    };
    return(
        <div className="product-cart">
            <img src={"/img/"+props.data.image} alt="Organic Food" />
            <div className="product">
                <label>Product</label>
                <h2>{props.data.title}</h2>
                <p>{props.data.category}</p>
            </div>
            <div className="price">
                <label>Price</label>
                <label>${props.data.price.toFixed(2)} /item</label>
            </div>
            
            <div className="quantity">
                <label>Quantity:</label>
                <label>{props.data.quantity}</label>
            </div>
            <div className="total">
                <label>Total</label>
                <label> ${getTotal()}</label>
            </div>
            
            <div>
                <button  onClick={handleRemove}className="btn btn-sm btn-danger">🗑️</button>
            </div>
        </div>
    );
};

export default ProductInCart;