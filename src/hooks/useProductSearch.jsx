import { useEffect, useState } from "react";
import { reguestProducts, reguestProductsByQuery } from "../serveses/api";
import { useSearchParams } from "react-router-dom";

export const useProductSearch = ({isSearchPage = false}) => {

    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    // const [query, setQuery] = useState('')

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query')
  
    
    useEffect(() => {
      if(isSearchPage) return
      async function fetchProducts() {
        try {
          setIsLoading(true);
          const data = await reguestProducts();
          setProducts(data.products);
          // console.log(data);
        } catch {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
      fetchProducts();
    }, [isSearchPage]);
  
  
  useEffect(() => {
  if(!query)return
  async function fetchProductsByQuery() {
    try {
      setIsLoading(true);
      const data = await reguestProductsByQuery(query);
      setProducts(data.products);
      // console.log(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
  fetchProductsByQuery();
  },[query])
  
  
  
    const onSearchQuery = (searchTerm) => {
      // setQuery(searchTerm);
      setSearchParams({query: searchTerm})
    };

  return {products, isLoading, isError, onSearchQuery}
}