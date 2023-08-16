import React from 'react'
import style from '../../styles/streaming.module.scss'
import axios from 'axios'
import Api from '../../common/Api'
function SkeletonVideo({videoStatus}: any) {
   const renderPlacehoder = (status: string) => {
      switch(status){
         case 'init':
            return 'Click <Start stream> to play!';
         case 'loading':
            return 'Loading...'
         case 'error':
            return 'Error!'
         default:
            return ''
      }
   }

  return (
    <div className={style.skeleton}>
      <div className={style.square}>
         <span className={style.text}>{renderPlacehoder(videoStatus)}</span>
      </div>
    </div>
  )
}

export default SkeletonVideo