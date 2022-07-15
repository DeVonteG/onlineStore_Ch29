import "./admin.css";
import {useState} from "react";
// import { Link } from "react-router-dom";

const Admin=()=>{
    const [coupon, setCoupon]= useState({});
    const [product,setProduct]  = useState({});
    const [allCoupons,setAllCoupons] = useState([]);
    const [allProducts,setAllProducts] = useState([]);
    
    const handleCouponChange=(e)=>{
        let name= e.target.name;
        let value= e.target.value;

        // console.log(name, value);
        let copy={...coupon}; //create copy
        copy[name]=value; // modify copy
        setCoupon(copy); //set copy
    };

    const saveCoupon=()=>{
        let coupon2beSaved={...coupon}; 
        let discount= parseFloat(coupon2beSaved.discount);//official way (+copy.discount) most popular
        coupon2beSaved.discount=discount;
        

        console.log(coupon2beSaved);
        // todo: send obj to server

        // add it to the state array
        let copyCoupons=[...allCoupons];
        copyCoupons.push(coupon2beSaved); //set copyCoupons
        setAllCoupons(copyCoupons); 
    };

    
    

    const handleProductChange=(e)=>{
        let name= e.target.name;
        let value= e.target.value;

        // console.log(name, value);
        let copy={...product}; //creat copy
        copy[name]=value; // modify copy
        setProduct(copy); //set copy
    };

    const saveProduct=()=>{
        let copy={...product};

        copy.price=parseFloat(copy.price);
        
        console.log(copy);
        let copyAllProds=[...allProducts];
        copyAllProds.push(copy);
        setAllProducts(copyAllProds);
    };

    return(


        <div className="admin-page">
            <h1>This is the Admin page</h1>

            <div className="parent">
                <section className="products">
                    <h3>Products</h3>

                    <div className="form">
                        <div className="my-control">
                            <label> Title</label>
                            <input name="title" onChange={handleProductChange}type="text" />
                        </div>

                        <div className="my-control">
                            <label> Price</label>
                            <input name="price" onChange={handleProductChange}type="number" />
                        </div>

                        <div className="my-control">
                            <label> Category</label>
                            <input name="category" onChange={handleProductChange}type="text" />
                        </div>

                        <div className="my-control">
                            <label> Image</label>
                            <input name="image" onChange={handleProductChange}type="text" />
                        </div>

                        <div className="my-control">
                            <button onClick={saveProduct} className="btn btn-primary">Save Product</button>
                        </div>
                    </div>
                    <div className="products-list">
                        <ul>{allProducts.map((prod,index)=> <li key={index}>{prod.title}- ${prod.price} </li>)}</ul>
                    </div>

                </section>

                <section className="coupons">
                    <h3>Coupon Codes</h3>
                        
                    <div className="form">
                        <div className="my-control">
                            <label>Code</label>
                            <input name="code" onChange={handleCouponChange}type="text" />
                        </div>

                        <div className="my-control">
                            <label>Discount</label>
                            <input name="discount"onChange={handleCouponChange} type="number" />
                        </div>

                        <div className="my-control">
                            <button onClick={saveCoupon} className="btn btn-primary">Save Coupon</button>
                        </div>
                    </div>
                    <div className="coupons-list">
                        <ul>
                          {allCoupons.map((coupon,index)=> <li key={index}>{coupon.code} - {coupon.discount}% off</li>)}  
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};




export default Admin;