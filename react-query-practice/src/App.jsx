import React from 'react';
import { useProducts } from "./custom/fetchProducts";
import './index.css';
import { useAddProducts } from './custom/useAddProducts';
import { Mutation } from '@tanstack/react-query';
function App() {


  const {data} = useProducts();
  const mutation = useAddProducts();
  return ( 
    <> 
    <button className="btn" onClick={() => { mutation.mutate() }}>Add Products</button>
      <h1>React Query Practice</h1>
     
      { data?.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} height="50px" width="50px" />
        </div>
      ))}
    </>
  )
}

export default App
