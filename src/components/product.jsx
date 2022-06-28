import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product =(props) =>{
    console.log(props);
    return(
        <div className="product">
            <img src={"/img/"+props.data.image} alt="Organic Food" />
            <h2>{props.data.title}</h2>
            <label>${props.data.price}</label>
            <label>Total: $60 </label>
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-primary">ADD</button>
        </div>
    );
}

export default Product;