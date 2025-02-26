import axios from "axios"

export function OrdersNew({product}) {

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
        <div>
          <input name="product_id" type="hidden" value={product.id} />
        </div>
      <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option defaultValue="1">One</option>
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