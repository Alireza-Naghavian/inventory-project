import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import * as Yup from "yup";
const Base_Url = "http://localhost:3000"
const CatProvider = createContext(null);
function CategoryProvider({children}) {
    const [catData,setCatData] = useState([]);
    const [error,setError] = useState(null)

        const fetchCatData = async(values)=>{
try {
    const data = await axios.post(`${Base_Url}/category`,values)
    if(data.status !== 200 || data.status !== 201) throw new Error(data)
    return setCatData(data.data)
} catch (error) {
    setError(error?.response?.data?.message)
}
}

    const validationSchema = Yup.object({
        title: Yup.string()
          .required("this filed must be fill")
          .min(4, "title atleast must have 4 characters"),
        description: Yup.string().required("this filed must be fill"),
      });
  return (
<CatProvider.Provider value={{validationSchema,fetchCatData,catData,error}}>
    {children}
</CatProvider.Provider>
  )
}
export const useCatProvider = ()=>{
    return useContext(CatProvider)
}
export default CategoryProvider