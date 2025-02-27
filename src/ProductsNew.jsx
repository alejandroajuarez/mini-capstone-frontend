import axios from "axios";
import { useState } from "react";

export function ProductsNew() {
  const [errors, setErrors] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handling Submit");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/products.json", params).then(response => {
      console.log(response.data);
      window.location.href = "/"
    })
    .catch((error) => {
      console.log(error.response);
      setErrors(error.response.data.errors);
    });  }

  return (
    <div id="products-new">
      <h1>New Product Listing</h1>
      {errors.map(error => (
        <p key={error}>{error}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Listing Name: </label>
          <input type="text" className="form-control" id="name" name="name" />          
        </div>
        <div className="mb-3">
          <label htmlFor="supplier_id" className="form-label">Listing Supplier ID: </label>
          <input type="integer" className="form-control" id="supplier_id" name="supplier_id" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Listing Price: </label>
          <input type="integer" className="form-control" id="price" name="price" />
        </div>
        <div className="mb-3">
          <label htmlFor="image_url" className="form-label">Image URL: </label>
          <input type="text" className="form-control" id="image_url" name="image_url" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Listing Description: </label>
          <input type="text" className="form-control" id="description" name="description" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}