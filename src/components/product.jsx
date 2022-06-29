import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState } from "react";

const Product =(props) =>{
    let[quantity, setQuantity] = useState(1);

    const quantityChange=(val) =>{
        setQuantity(val);
            // console.log("Quantity Changed",val);
    };

    // console.log(props);
    const getTotal=() =>{
        let total = props.data.price*quantity;
        return total.toFixed(2);
    }
    return(
        <div className="product">
            <img src={"/img/"+props.data.image} alt="Organic Food" />
            <h2>{props.data.title}</h2>
            <label>${props.data.price.toFixed(2)} /item</label>
            <label>Total:${getTotal()} </label>
            <QuantityPicker onChange={quantityChange}></QuantityPicker>
            <button className="btn btn-primary">ADD</button>
        </div>
    );
}

export default Product;