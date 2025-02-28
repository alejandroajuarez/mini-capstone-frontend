import { useLoaderData } from "react-router-dom";

export function CategoriesShowPage() {
  const category = useLoaderData()
  
  return (
    <div>
      <p>Cateogories Show Page</p>
      <h1>{category.name}</h1>
      {category.products.map((product) =>
      <div key={product.id}>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <hr />
      </div>
    )}
    </div>
  )
}