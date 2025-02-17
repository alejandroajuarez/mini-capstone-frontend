import { OrdersNew } from "./OrdersNew";

export function ProductsShow({ product, onUpdate, onDestroy }) {
  console.log(product)
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Handling Update");
    const params = new FormData(event.target)
    onUpdate(params, product)
  }

  const handleRemove = () => {
    console.log('Delete the Product post')
    onDestroy(product)
  }

  return (
    <div>
      {/* {JSON.stringify(product)} */}
      <h1><b>id: </b>{product.id}</h1>
      <h2><b>Product Name: </b>{product.name}</h2>
      <h4><b>Price:</b> ${product.price}</h4>
      <p><b>Image URL:</b> {product.image_url}</p>
      <p><b>Description:</b> {product.description}</p>
      <p><b>Supplier ID: </b> {product.supplier_id}</p>

      <OrdersNew product={product}/>
      
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
      <br />
      <br />
      <br />

      <button onClick={handleRemove}>Delete Product Listing</button>
    </div>
  )
}
