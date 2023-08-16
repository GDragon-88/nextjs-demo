import React, { useState } from 'react'
import style from '../../styles/streaming.module.scss'
import axios from 'axios'
function Video() {
   const [videoURL, setVideoURL] = useState<any>(null);

   const fetchAndDisplayVideo = async () => {
      try {
      //   await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/streaming/video`);
        setVideoURL(`${process.env.NEXT_PUBLIC_API_URL}/api/streaming/video`);
      } catch (error) {
        console.log('Error fetching video:', error);
      }
    };
  return (
    <div className={style.streamPage}>
      <h1>{'Streaming video'}</h1>
      <div className={style.video}>
      {videoURL ? (
        <video controls>
          <source src={videoURL} type="video/mp4" />
        </video>
      ) : (
        <p>Loading video...</p>
      )}

      </div>
      <button
         className={style.button}
         onClick={fetchAndDisplayVideo}
      >
         {'Start stream'}
      </button>
    </div>
  )
}

export default Video