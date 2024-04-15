import "./App.css";
import Navbar from "./component/Navbar";
import ProductForm from "./component/ProductForm";
import ProductList from "./component/ProductList";
function App() {
  return (
<div className="bg-slate-800 min-h-screen">
  <Navbar/>
  <div className="container mx-auto p-4  flex-col 
  flex 
  md:justify-between
   lg:max-w-screen-xl md:gap-x-12">
 <section className="w-full">
            {/* <CategoryForm setCategories={setCategories} /> */}
            <ProductForm />
          </section>
 <section className="">
            {/* <CategoryForm setCategories={setCategories} /> */}
          <ProductList/>
          </section>

  </div>
</div>
  );
}

export default App;
