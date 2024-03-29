import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import StoreContext from "./../context/storeContext";

const Product =(props) =>{
    let[quantity, setQuantity] = useState(1);
    let globalAddProd = useContext(StoreContext).addProduct;

    const quantityChange=(val) =>{
        setQuantity(val);
            // console.log("Quantity Changed",val);
    };

    // console.log(props);
    const getTotal=() =>{
        let total = props.data.price*quantity;
        return total.toFixed(2);
    }
    const handleAdd=() =>{
        
        let prod4Cart={...props.data};
        prod4Cart.quantity=quantity;
        // let prod4Cart={...props.data, quantity:}; same as above code but simplified
        
        globalAddProd(prod4Cart);
    };
    return(
        <div className="product">
            <img src={"/img/"+props.data.image} alt="Organic Food" />
            <h2>{props.data.title}</h2>
            <label>${(+props.data.price).toFixed(2)} /item</label>
            <label>Total:${getTotal()} </label>
            <QuantityPicker onChange={quantityChange}></QuantityPicker>
            <button onClick={handleAdd} className="btn btn-primary">ADD</button>
        </div>
    );
}

export default Product;