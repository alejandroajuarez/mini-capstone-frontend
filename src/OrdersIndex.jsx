import { useLoaderData } from "react-router-dom";

export function OrdersIndex() {
  const orders = useLoaderData();
  console.log(orders);

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map(order => (
        <div key={order.id}>
          <p><b>product name:</b> {order.product.name}</p>
          <p><b>product price:</b> {order.product.price}</p>
          <p><b>subtotal:</b> {order.subtotal}</p>
          <p><b>tax:</b> {order.tax}</p>
          <p><b>total:</b> {order.total}</p>
        </div>
      ))}
    </div>
  )
}