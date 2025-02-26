import axios from "axios"

export function OrdersNew({product}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handling Submit");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/carted_products.json", params).then(response => {
      console.log(response.data);
      window.location.href = "/carted_products"
    })
  }

  return (
    <div>
      <h1>Product Information</h1>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      {product.categories.map(category => (
        <p key={category.id}>{category.name}</p>
      ))}
       <form onSubmit={handleSubmit}>
        <div>
          <input name="product_id" type="hidden" value={product.id} />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity: </label>
          <input type="integer" className="form-control" id="price" name="quantity" />
        </div>
        <button type="submit" className="btn btn-primary">Add to Cart</button>
      </form>
    </div>
  );
}