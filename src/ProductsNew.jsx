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
        <div>
          Listing Title: <input type="text" name="name" />
        </div>
        <div>
          Listing Price: <input type="integer" name="price" />
        </div>
        <div>
          Image URL: <input type="text" name="image_url" />
        </div>
        <div>
          Listing Description: <input type="text" name="description" />
        </div>
        <button type="submit">Post Listing</button>
      </form>
    </div>
  );
}