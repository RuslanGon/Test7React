import { useParams } from "react-router-dom"


const CommentPage = () => {
    const {productId} = useParams()
  return (
    <div>Comment prodoction {productId}</div>
  )
}

export default CommentPage