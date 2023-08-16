import { useRouter } from 'next/router';
import React from 'react'

function DetailBlog() {
   const router = useRouter();
  return (
   <div>
      <div>Detail blog </div>
    <div>Detail id: {router.query.blogid}</div>
   </div>
    
  )
}

export default DetailBlog;