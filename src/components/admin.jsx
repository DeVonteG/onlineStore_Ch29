import "./admin.css";
import {useState} from "react";

const Admin=()=>{
    const [coupon, setCoupon]= useState({});
    const [product,setProduct]  = useState({});
    
    const handleCouponChange=(e)=>{
        let name= e.target.name;
        let value= e.target.value;

        // console.log(name, value);
        let copy={...coupon}; //create copy
        copy[name]=value; // modify copy
        setCoupon(copy); //set copy
    };

    const saveCoupon=()=>{
        let copy={...coupon}; 

        let discount= parseFloat(copy.discount);//official way (+copy.discount) most popular
        copy.discount=discount;
        

        console.log(copy);
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
                </section>
            </div>
        </div>
    );
};




export default Admin;