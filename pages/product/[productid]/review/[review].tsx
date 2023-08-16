import { useRouter } from 'next/router'
import React from 'react'

const ReviewProduct = () => {

   const router = useRouter();
   const {productid, review} = router.query;
  return (
    <div>
      <h1>Review of {productid}</h1>
      <div>Param: product: {productid} {' - '} reivew: {review}</div>
    </div>
  )
}

export default ReviewProduct