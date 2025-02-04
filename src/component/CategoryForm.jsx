import { useState } from "react";
import { useFormik } from "formik";
import { useCatProvider } from "../context/CategoryProvider";

function CategoryForm() {
  const [isShow, setIsShow] = useState(false);
  const {validationSchema,fetchCatData} = useCatProvider()

  const submitCategoryHandler = (value) => {
    fetchCatData(value)
    resetForm()
  };
  const { getFieldProps,handleSubmit,errors,resetForm } = useFormik({
    onSubmit:  submitCategoryHandler,
    initialValues: { title: "", description: "" },
    validationSchema,
  });

  return (
    <section>
      <div className={`mb-8 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New category
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
        >
          <div className="flex flex-col gap-y-4">
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400  "
            >
              title
            </label>
            <input
              type="text"
              name="title"
              id="category-title"
              {...getFieldProps("title")}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            />
            {errors && <span className="text-white">{errors.title}</span>}
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              description
            </label>
            <textarea
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              type=" text"
              name="description"
              {...getFieldProps("description")}
              id="category-description"
            ></textarea>
              {errors && <span className="text-white">{errors.description}</span>}
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
            onClick={()=>setIsShow(false)}
            type="button"
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
              id="cancel-add-category"
            >
              Cancel
            </button>
            <button
               type="submit"
              id="add-new-category"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
   
        id="toggle-add-category"
        className={`text-slate-600 text-lg mb-4 font-medium ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        Add new Category?
      </button>
    </section>
  );
}

export default CategoryForm;
