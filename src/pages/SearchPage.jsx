
// import "./App.css";
import Loader from "../component/Loader/Loader";
import ErrorMessage from "../component/ErrorMessage/ErrorMessage";
import ProductList from "../component/ProductList/ProductList";
import SearchForm from "../component/SearchForm/SearchForm";
import { useProductSearch } from "../hooks/useProductSearch";



const SearchPage = () => {
  
    const {products, isLoading, isError, onSearchQuery } = useProductSearch({isSearchPage: true})

  return (
    <div>
      <h1>Search product by name or brand</h1>
     
      <SearchForm onSearchQuery={onSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ProductList products={products} />
    </div>
  );
};

export default SearchPage;