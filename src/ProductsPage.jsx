import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from './ProductsNew';
import { ProductsShow } from './ProductsShow';
import { Modal } from './Modal';
import axios from 'axios';
import { useState, useEffect } from "react";

export function ProductsPage() {
    const [products, setProducts] = useState([]);

    const handleIndex = () => {
      console.log("Handling Index");
      axios.get("http://localhost:3000/products.json").then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
    };

    useEffect(handleIndex, []);

  return (
    <main>
      <ProductsIndex products={products}/>
    </main>
  )
}