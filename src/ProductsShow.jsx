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
      <h1><b>id: </b>{product.id}</h1>
      <h1><b>Product Name: </b>{product.name}</h1>
      <h2>Price: {product.price}</h2>
      <p>Image URL: {product.image_url}</p>
      <p>Description: {product.description}</p>

      <form onSubmit={handleSubmit}>
        <p>Product Name: <input type="text" name="name"  /></p>
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