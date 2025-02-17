import axios from "axios"

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function OrdersNew({product}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handling Submit");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/orders.json", params).then(response => {
      console.log(response.data);
      window.location.href = "/"
    })
  }

  return (
    <div id="orders-new">
      <h1>New Order</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="product_id" className="form-label">Product ID: </label>
          <input type="text" readOnly className="form-control-plaintext" id="product_id" value={product.id} />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity: </label>
          <input type="integer" className="form-control" id="price" name="quantity" />
        </div>
        <button type="submit" className="btn btn-primary">Buy Now</button>
      </form>
    </div>
  );
}