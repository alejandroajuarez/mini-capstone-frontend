import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export function OrdersIndex() {
  const orders = useLoaderData();

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map(order => (
        <div key={order.id}>
          <p><b>product name:</b> {order.product.name}</p>
          <p><b>product price:</b> {order.product.price}</p>

          <p><b>quantity:</b> {order.quantity}</p>
          <p><b>subtotal:</b> {order.subtotal}</p>
          <p><b>tax:</b> {order.tax}</p>
          <p><b>total:</b> {order.total}</p>
        </div>
      ))}
    </div>
  )
}