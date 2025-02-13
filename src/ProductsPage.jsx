import { ProductsIndex } from "./ProductsIndex";
import { ProductsShow } from './ProductsShow';
// import { ProductsNew } from "./ProductsNew";
import { Modal } from './Modal';
import axios from 'axios';
import { useState, useEffect } from "react";

export function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});

    const handleIndex = () => {
      console.log("Handling Index");
      axios.get("http://localhost:3000/products.json").then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
    };

    const handleShow = (product) => {
      console.log(product);
      setCurrentProduct(product);
      console.log("Handling Show");
      setIsProductsShowVisible(true);
    }

    const handleUpdate = (params, product) => {
      console.log("handling update");
      axios.patch(`http://localhost:3000/products/${product.id}.json`, params).then(response => {
        console.log(response.data)
        setIsProductsShowVisible(false)
        // loop through products array
        // find the product to update
        // swap out current product values for response.data
        setProducts(products.map(p => p.id === response.data.id ? response.data : p))
      })
    }

    const handleDestroy = (product) => {
      console.log("handling destroy");
      axios.delete(`http://localhost:3000/products/${product.id}.json`).then(response => {
        console.log(response.data);
        // loop through the array of products, delete the one that is selected via product.id
        setProducts(products.filter(p => p.id !== product.id))
        setIsProductsShowVisible(false)
      })
    }

    const closeModal = () => {
      console.log("Closing Modal");
      setIsProductsShowVisible(false)
    }

    useEffect(handleIndex, []);

  return (
    <main>
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isProductsShowVisible} onClose={closeModal}>
        <ProductsShow product={currentProduct} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  )
}