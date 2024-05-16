import { Suspense, lazy, useEffect, useRef} from "react"
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom"


import Loader from "../component/Loader/Loader"
import ErrorMessage from "../component/ErrorMessage/ErrorMessage"
import { useDispatch, useSelector } from "react-redux"
import { apiRequestProductDetailsById } from "../redux/productDetails/operation"


const CommentPage = lazy(() => import('./CommentPage'))
const ReviewsPage = lazy(() => import('./ReviewsPage'))


const ProductDetailsPage = () => {
 
  const location = useLocation()
  const backLinkRef = useRef(location.state ?? '/products')

  const {productId} = useParams()


  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails.productDetails)
  const isLoading = useSelector(state => state.productDetails.isLoading)
  const isError = useSelector(state => state.productDetails.isError)
  useEffect(() => {
    dispatch(apiRequestProductDetailsById(productId))
  }, [dispatch, productId])


  return (
    <div>
      <h1>Product details {productId}</h1>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <Link to={backLinkRef.current}>←Go back</Link>
      {productDetails !== null && (
        <div>
          <img src={productDetails.thumbnail} alt={productDetails.title} />
          <h3>Title: {productDetails.title} </h3>
          <p>Brand: {productDetails.brand}</p>
          <p>Price: {productDetails.price}</p>
        </div>
      )}
      <Link to="comments">Comments</Link>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="comments" element={<CommentPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default ProductDetailsPage