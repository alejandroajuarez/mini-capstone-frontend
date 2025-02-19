import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function OrdersNew() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
  }

  useEffect(getProducts, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handling Submit");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/orders.json", params).then(response => {
      console.log(response.data);
      event.target.reset();
      window.location.href = "/orders"
    })
  }

  return (
    <div id="orders-new">
      <h1>New Order</h1>
      <form onSubmit={handleSubmit}>
      <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        {/* <option value="2">Two</option>
        <option value="3">Three</option> */}
      </select>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity: </label>
          <input type="integer" className="form-control" id="price" name="quantity" />
        </div>
        <button type="submit" className="btn btn-primary">Buy Now</button>
      </form>
    </div>
  );
}