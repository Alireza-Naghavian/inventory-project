import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import * as Yup from "yup";
const CreateProduct = createContext(null);
function ProductProvider({ children }) {
  const [data, setData] = useState([]);
  const [error, SetError] = useState(null);
  const validationSchema = Yup.object({
    title: Yup.string().required("this fied must be fill"),
    quantity: Yup.number().required("pls add the number of the product"),
    categoryId: Yup.string().required("pls select a category"),

  });
  const fetchProdData = async (values) => {
    try {
      const data = await axios.post(`http://localhost:3000/products`, values);
    
      if (data.status !== 200 || data.status !== 201) throw new Error(data);
     return data.data
    } catch (error) {
      SetError(error?.response?.data?.message);
    }
  };

  console.log(data);
  const deleteProd = async(id)=>{
  
      axios.delete(`http://localhost:3000/products/${id}`)
   
  }
  return (
    <CreateProduct.Provider value={{ data, error, fetchProdData,validationSchema,deleteProd}}>
      {children}
    </CreateProduct.Provider>
  );
}
export const useCreateProduct = () => {
  return useContext(CreateProduct);
};

export default ProductProvider;
