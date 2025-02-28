import { useLoaderData } from "react-router-dom";

export function CategoriesIndex() {
  const categories = useLoaderData();
  
  return (
    <div>
      <p>Below are the categories</p>
      {categories.map((category) =>
      <div key={category.id}>
        <p><a href={`/categories/${category.id}`} >{category.name}</a></p>
        <hr />
      </div>
  )}
    </div>
  )
}