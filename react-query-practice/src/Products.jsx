
import ".././src/index.css";
import { Link } from "react-router";
import {useGetAllProducts} from "./queries/useGetAllProducts"
const Products = () => {
  const myAllProducts= useGetAllProducts();
  const { data: products, isLoading, error } = myAllProducts;
   console.log("myAllProducts", myAllProducts);
 

  return (
    <>
     {isLoading && <h1>Loading...</h1>}
    
     {error && <h1>{error.message}</h1>}
    
{products?.map((product) => (
  <div className="main" key={product.id}> 
    <div>
      <Link to={`/products/${product.id}`}> 
      <h2>{product.title}</h2>
      </Link>
      <p>{product.description}</p>
      <div> 
        <p>{product.brand}</p>
        <p>{product.price}</p>
      </div>
    </div>
  </div>
))}

      

    </>
  );
};

export default Products;
