import { useQuery } from "@tanstack/react-query";
import axios from "axios";




export const useGetAllProducts = () => {
    return useQuery({
        
      queryKey: ["products"], 
      queryFn: async () => {
        const response = await axios.get("https://dummyjson.com/products");
        const data = response.data.products;
        return data;},
        staleTime: 10000,
});

};
  // console.log("useGetAllProducts", useGetAllProducts);
  // console.log("useQuery", useQuery);
 
  
  