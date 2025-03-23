import { Routes, Route, Link } from "react-router-dom"
import ProductsDetails from "./ProductsDetails"
import Products from "./Products"


function App() {


  
  return ( 
    <> 
      <h1>React Query Practice</h1>
      <Link to="products-list">All Products List | </Link>
      <Link to="Products">Products</Link>
      <br />
      <Routes>
        <Route path="products/:id" element={ <ProductsDetails/> } />
        <Route path="Products" element={ <Products/> } />
      </Routes>
      
    </>
  )
}

export default App
