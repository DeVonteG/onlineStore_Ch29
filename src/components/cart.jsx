
import {useContext } from "react";
import ProductInCart from "./productInCart";
import storeContext from "../context/storeContext";
import "./cart.css";
// import {Link} from "react-router-dom";

const Cart=() =>{
    const cart=useContext(storeContext).cart;


    const getCount = () =>{
        let count= 0;
        // travel the array sum the quantity of each product into count
        for (let i=0; i<cart.length; i++){
             count += cart[i].quantity;
            
        };

        
        //return count
        return count;
    };
    const getTotal = () =>{
        let total= 0;
        for (let i=0; i<cart.length; i++){
            let prod = cart[i];
            total += prod.price* prod.quantity;

        };
        return total.toFixed(2);
    };


    return(
        <div className="cart-page">
            <h1>Welcome to your Organix Cart 🛒 </h1>
            <h4>There are {getCount()} products in your cart</h4>
            <section>
                {cart.map((prod) => <ProductInCart key = {prod.id} data={prod}> </ProductInCart>)}
            </section>
            <section>
                <h5>Total to pay</h5>
                <h3>${getTotal()}</h3>
            </section>
        </div>
    );
}; 

export default Cart;