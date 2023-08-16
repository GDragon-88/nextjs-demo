import React, { useState, useEffect } from 'react'
import style from '../../styles/streaming.module.scss'
import SkeletonVideo from '../../Components/Stream/SkeletonVideo'
import Api from '../../common/Api'
function Streaming() {
   const [videoStatus, setVideoStatus] = useState('init')
   const[videoSrc, setSrc]= useState<any>('')
   const fetchingVideo = async () => {
       Api.get('api/streaming',{
         headers: {
            "range": "100000-200000",
          },
       })
         .then(res => {
            const resUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/streaming`;
            console.log(res.data)
            setSrc(resUrl)
            setVideoStatus('playing')
         })
         .catch((error) =>{
            console.log(error)
         })
   }

   
  return (
    <div className={style.streamPage}>
      <h1>{'Streaming video'}</h1>
      <div className={style.video}>
         {videoStatus === 'init' ? (<SkeletonVideo videoStatus = {videoStatus}/>):(
            <video src={videoSrc} controls/>
         )}

      </div>
      <button
         className={style.button}
         onClick={()=>fetchingVideo()}
      >
         {'Start stream'}
      </button>
    </div>
  )
}

export default Streaming