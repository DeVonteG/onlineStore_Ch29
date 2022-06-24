import "./quantityPicker.css";

const QuantityPicker = () =>{
    return(
        <div className="quantityPicker">
            <button className="btn btn-primary btn sm">-</button>
            <label>#</label>
            {/* <input min="0" type="number"/> */}
            <button className="btn btn-primary btn sm">+</button>
        </div>
    );
}
export default QuantityPicker;
