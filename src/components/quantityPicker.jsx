import {useState} from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) =>{
    let [quantity, setQuantity] = useState(0);

    const handleIncrease=() =>{
        let newVal= quantity+1;
        setQuantity(newVal);
        props.onChange(newVal);
    };
    const handleDecrease=() =>{
        if (quantity >=1){
        let val= quantity-1;
        setQuantity(val);
        props.onChange(val);
    };
}
    return(
        <div className="quantityPicker">
            <button className="btn btn-secondary btn sm" onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            {/* <input min="0" type="number"/> */}
            <button className="btn btn-secondary btn sm" onClick = {handleIncrease}>+</button>
        </div>
    );
}
export default QuantityPicker;
