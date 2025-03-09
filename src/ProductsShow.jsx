import axios from "axios";
import { useEffect, useState } from "react";

export function ProductsShow({ product }) {
  console.log(product)

  const [categories, setCategories] = useState([])
  const getCategories = () => {
    console.log('getting categories')
    axios.get("http://localhost:3000/categories.json").then(response => {
      setCategories(response.data)
    })
  }

  useEffect(getCategories, [])

  const handleAddToCategory = (event) => {
    event.preventDefault()
    console.log('adding to category')
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/category_products.json", params).then(response => {
      console.log(response.data)
      window.location.href = "/categories"
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Handling Submit");
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/carted_products.json", params).then(response => {
      console.log(response.data);
      window.location.href = "/carted_products"
    })
  }
    //   onUpdate(params, product)
  // }

  // const handleRemove = () => {
  //   console.log('Delete the Product post')
  //   onDestroy(product)
  // }

  return (
      
    <div>
      <h1>Product Information</h1>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      {/* {product.categories.map(category => (
        <p key={category.id}>{category.name}</p>
      ))} */}
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
      <br />
      <br />
      <br />
      <br />
      <p>Add this product to a category</p>
      <form onSubmit={handleAddToCategory}>
        <input type="hidden" name="product_id" value={product.id} />
        <select name="category_id" />
      </form>
    </div>
  );
}