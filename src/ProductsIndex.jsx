import { useState } from "react";

export function ProductsIndex({ products, onShow }) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(products);

  return (
      <div id="products-index">
        Search Filter: <input type="text" value={searchFilter} onChange={(event) =>
          setSearchFilter(event.target.value)} />
        <h1>All Products</h1>
        <div className="row">
        {products.filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase())).map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <img src={product.image_url} className="card-img-top" alt="..." height="200px" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.description}</p>
                <button type="Button" className="btn btn-primary" onClick={() => onShow (product)}>More Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
    );
  }