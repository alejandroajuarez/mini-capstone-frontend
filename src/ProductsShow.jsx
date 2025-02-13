export function ProductsShow({ product, onUpdate, onDestroy }) {
  console.log(product)
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Handling Update");
    const params = new FormData(event.target)
    ontimeupdate(params, product)
  }

  const handleRemove = () => {
    console.log('Delete the Product post')
    onDestroy(product)
  }

  return (
    <div>
      {/* {JSON.stringify(product)} */}
      {/* <h1><b>id: </b>{product.id}</h1> */}
      <h2><b>Product Name: </b>{product.name}</h2>
      <h4><b>Price:</b> ${product.price}</h4>
      <p><b>Image URL:</b> {product.image_url}</p>
      <p><b>Description:</b> {product.description}</p>

      <form onSubmit={handleSubmit}>
        <p>Product Name: <input type="text" name="name"  /></p>
        <p>Product Supplier ID: <input type="integer" name="supplier_id" /></p>
        <p>Price: <input type="text" name="price"  /></p>
        <p>Image URL: <input type="text" name="image_url"  /></p>
        <p>Description: <input type="text" name="description"  /></p>
        <button>Update Product</button>
      </form>
      <br />
      <br />
      <br />

      <button onClick={handleRemove}>Delete Product Listing</button>
    </div>
  )
}