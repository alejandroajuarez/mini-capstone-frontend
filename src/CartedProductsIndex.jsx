import { useLoaderData } from "react-router-dom";

export function CartedProductsIndex() {
  const cartedProducts = useLoaderData();

  return (
    <div>
      <h1>Your Cart</h1>
      {/* {JSON.stringify(cartedProducts)} */}
      {cartedProducts.map(cp => (
        <div key={cp.id}>
          <p><b>Item: </b> {cp.product.name}</p>
          <p><b>Price: </b> {cp.product.price}</p>
          <p><b>Quantity: </b> {cp.quantity}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}