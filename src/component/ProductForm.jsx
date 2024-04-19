import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useCreateProduct } from "../context/ProductProvider";
function ProductForm() {
  const [catData, setCatData] = useState([]);
  const {   fetchProdData, validationSchema } = useCreateProduct();
  const submitProductHandler = (values) => {
    fetchProdData(values);
    resetForm();
  };
  const { handleSubmit, resetForm, getFieldProps, touched, errors } = useFormik(
    {
      onSubmit: submitProductHandler,
      initialValues: { title: "", quantity: 0, categoryId: "" },
      validationSchema,
      validateOnMount: true,
    }
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/category");
        return setCatData(data);
      } catch (error) {
        console.log(errors);
      }
    };
    fetchData();
  }, [fetch, setCatData]);

  return (
    <div className="mb-10">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <div className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="product-title"
              className="block mb-1 text-slate-400"
            >
              title
            </label>
            <input
              type="text"
              name="title"
              id="product-title"
              {...getFieldProps("title")}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            />
            {errors && touched.quantity && (
              <span className="text-white">{errors.title}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="product-quantity"
              className="block mb-1 text-slate-400"
            >
              quantity
            </label>
            <input
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
              type="number"
              name="quantity"
              min={0}
              {...getFieldProps("quantity")}
              id="product-quantity"
            />
            {errors && touched.title && (
              <span className="text-white">{errors.quantity}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="product-category"
              className="block mb-1 text-slate-400"
            >
              category
            </label>
            <select
              name="categoryId"
              id="product-category"
              className="bg-transparent text-slate-400 rounded-xl w-full"
              {...getFieldProps("categoryId")}
            >
              <option className="bg-slate-500 text-slate-300" value="">
                pls select a category
              </option>
              {catData &&
                catData.map((item) => {
                  return (
                    <option
                      key={item.id}
                      className="bg-slate-500 text-slate-300"
                      value={item.id}
                    >
                      {item.title}
                    </option>
                  );
                })}
            </select>
            {errors && touched.categoryId && (
              <span className="text-white">{errors.categoryId}</span>
            )}
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              type="submit"
              id="add-new-product"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            >
              Add new Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
