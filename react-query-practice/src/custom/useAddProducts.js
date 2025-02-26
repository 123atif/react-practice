import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useAddProducts = () => {
  const mutation = useMutation({
    mutationFn: async (product) => {
      try {
        const response = await axios.post("https://fakestoreapi.com/products", product);
        return response.data; 
      } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to add product");
      }
    },
  });

  return mutation;
};
