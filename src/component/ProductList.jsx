import React from "react";

function ProductList() {
  return (
    <div className="">
      <h2 className="text-xl text-slate-400 font-bold mb-4 border-b-slate-500 border-b">
        ProductList
      </h2>
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between mb-2 w-full gap-x-12 min-w-full">
          <span className="text-slate-400">trest</span>
          <div className="flex  items-center gap-x-12">
            <span className="text-slate-400">12/2/1401</span>
            <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
              cat id
            </span>
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
            12
            </span>
            <button className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400 delete-product">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
