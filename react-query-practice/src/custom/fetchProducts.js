import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useProducts = () => {
    const fetchProducts = async () => {
        const products = await axios.get('https://fakestoreapi.com/products');
         return products.data;
    }

   const {data, ispending, isError, error} = useQuery({ 
    queryKey: ['products'], 
    queryFn: fetchProducts 
});

   return {data, ispending, isError, error};
    
}