import { useEffect, useState } from "react";
import { reguestProducts, reguestProductsByQuery } from "../serveses/api";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiGetProducts } from "../redux/productDetails/operation";

export const useProductSearch = ({isSearchPage = false}) => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.productDetails.products)

    // const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    // const [query, setQuery] = useState('')

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query')
  
    
    useEffect(() => {
      if(isSearchPage) return
     dispatch(apiGetProducts())
    }, [dispatch, isSearchPage]);
  
  
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