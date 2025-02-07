export function ProductsIndex({ products }) {
  return (
    <div id="products-index">
      <h1>All Products ({products.length} total)</h1>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <h2>{product.name}</h2>
          </div>
          <div>
            <p>${product.price}</p>
          </div>
          <div>
            <img src={product.image_url} />
          </div>
          <div>
            <p>{product.description}</p>
          </div>
          <button onClick={() => onShow(product)}>More Details</button>
        </div>
      ))}
    </div>
  );
}