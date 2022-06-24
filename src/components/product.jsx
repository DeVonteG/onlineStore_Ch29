import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product =() =>{
    return(
        <div className="product">
            <img src="https://yourstrulyorganics.com/wp-content/uploads/2019/05/featured-organic-food-1024x535-1024x535.jpg" alt="Organic Food" />
            <h2>Title</h2>
            <label>Price: $40 </label>
            <label>Total: $60 </label>
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-primary">Add</button>
        </div>
    );
}

export default Product;