import "./App.css";
import CategoryForm from "./component/CategoryForm";
import Navbar from "./component/Navbar";
import ProductForm from "./component/ProductForm";
import ProductList from "./component/ProductList";
import CategoryProvider from "./context/CategoryProvider";
import ProductProvider from "./context/ProductProvider";
function App() {
  return (
    <ProductProvider>
      <CategoryProvider>
        <div className="bg-slate-800 min-h-screen">
          <Navbar />
          <div
            className="container mx-auto p-4  flex-col 
          flex 
          md:justify-between
          lg:max-w-screen-xl md:gap-x-12"
          >
            <section className="w-full">
              <CategoryForm />
              <ProductForm />
            </section>
            <section className="">
              <ProductList />
            </section>
          </div>
        </div>
      </CategoryProvider>
    </ProductProvider>
  );
}

export default App;
