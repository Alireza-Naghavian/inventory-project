import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCreateProduct } from "../context/ProductProvider";

function ProductList() {
  const [prodList, setProdList] = useState([]);
  const [cat, setCat] = useState([]);
  const {deleteProd} = useCreateProduct();
  const findCategory = (catId) => {
    return [...cat].find((item) => item.id == catId)?.title;
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      return setProdList(data);
    };
    fetchData();
  }, [setProdList]);
  console.log(prodList);
  useEffect(() => {
    const loadCat = async () => {
      const { data } = await axios.get("http://localhost:3000/category");
      return setCat(data);
    };
    loadCat();
  }, [setCat]);
const deleteHandler =(id)=>{
  deleteProd(id)
}
  return (
    <div className="">
      <h2 className="text-xl text-slate-400 font-bold mb-4 border-b-slate-500 border-b">
        ProductList
      </h2>
      <div className="overflow-x-auto">
        {prodList &&
          prodList.map((item) => {
            return (
              <div
                key={item?.id}
                className="flex items-center justify-between mb-2 w-full gap-x-12 min-w-full"
              >
                <span className="text-slate-400">{item?.title}</span>
                <div className="flex  items-center gap-x-12">
                  <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
                    {findCategory(item?.categoryId)}
                  </span>
                  <span className="flex px-2 py-2 items-center justify-center w-10 mx-auto h-10 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                    {item?.quantity}
                  </span>
                  <button onClick={()=> deleteHandler(item.id)} className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400 delete-product">
                    delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductList;
