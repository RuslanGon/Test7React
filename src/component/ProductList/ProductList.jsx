import { Link, useLocation } from "react-router-dom";
import css from './ProductList.module.css'


const ProductList = ({products}) => {

const location = useLocation()

    return (
      <ul>
        {location.pathname === '/search' && <h2>Search resalt</h2>}
        {location.pathname === '/products' && <h2>Products result</h2>}
          {Array.isArray(products) &&
            products.map((product) => {
              return (
                <li key={product.id}>
                  <img width={250} src={product.thumbnail} alt={product.title} />
                  <h2>title: {product.title}</h2>
                  <h3>brand: {product.brand}</h3>
                  <p>description: {product.description}</p>
                  <h4>price: {product.price}</h4>
                  <p>rating: {product.rating}</p>
                  <Link state={location} className={css.limk} to={`/products/${product.id}`}>See the details</Link>
                </li>
                
              );
            })}
        </ul>
    )
  }
  
  export default ProductList