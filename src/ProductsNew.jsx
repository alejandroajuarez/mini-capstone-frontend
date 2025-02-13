export function ProductsNew({ onCreate }) {
  const handleSubmit = (event) => {
    console.log("Handling Submit");
    const params = new FormData(event.target);
    onCreate(params)
    event.target.reset()
  }

  return (
    <div id="products-new">
      <h1>New Product Listing</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Listing Title: </label>
          <input type="text" className="form-control" id="name" name="name" />          
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