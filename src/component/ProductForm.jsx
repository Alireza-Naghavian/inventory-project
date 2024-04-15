import React from 'react'

function ProductForm() {
  return (
    <div className="mb-10">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <div className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            title
          </label>
          <input
            type="text"
            name="title"
            id="product-title"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
          />
        </div>
        <div>
          <label htmlFor="product-quantity" className="block mb-1 text-slate-400">
            quantity
          </label>
          <input
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            type="number"
            name="quantity"
            id="product-quantity"
          />
        </div>
        <div>
          <label htmlFor="product-category" className="block mb-1 text-slate-400">
            category
          </label>
          <select
            name="categoryId"
            id="product-category"
            className="bg-transparent text-slate-400 rounded-xl w-full"
          >
            <option className="bg-slate-500 text-slate-300" value="">
              select a category
            </option>
          
                <option className="bg-slate-500 text-slate-300"></option>
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
        
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
          >
            Add new Product
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductForm