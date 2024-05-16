
// import "./App.css";
import Loader from "../component/Loader/Loader";
import ErrorMessage from "../component/ErrorMessage/ErrorMessage";
import ProductList from "../component/ProductList/ProductList";
import { useProductSearch } from "../hooks/useProductSearch";



const ProductsPage = () => {
  
    const {products, isLoading, isError} = useProductSearch({isSearchPage: false})

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;