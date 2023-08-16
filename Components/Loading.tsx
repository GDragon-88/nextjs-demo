import React from 'react'
import Image from 'next/image'
import loading  from '../image/loading.gif'
import style  from '../styles/loading.module.scss'
function Loading() {
  return (
    <div className={style.loading}>
      <Image 
         src={loading}
         alt = 'loading'
         width='60'
         height={'60'}
      />
    </div>
  )
}

export default Loading