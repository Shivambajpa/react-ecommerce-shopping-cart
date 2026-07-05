import { useNavigate } from "react-router-dom";

export default function Checkout(){

const navigate=useNavigate();

const placeOrder=()=>{

localStorage.removeItem("cart");

navigate("/success");

}

return(

<div>

<h1>Checkout</h1>

<input placeholder="Full Name"/>

<input placeholder="Address"/>

<input placeholder="Phone"/>

<select>

<option>Cash On Delivery</option>

<option>UPI</option>

</select>

<button onClick={placeOrder}>
Place Order
</button>

</div>

)

}