import React from 'react'
import style from  "../../styles/Component/Slider.module.scss"
import Image from 'next/image'
import img from '../../image/login_img.jpg'
import { ArrowRightOutlined } from '@ant-design/icons'
import Link from 'next/link'
function SliderComponent({data}: any) {
  return (
    <div>
      <div className={style.layout}>
         <div>
            <Image 
               src={img}
               alt='image'
               className={style.next_image}
            />
         </div>
         <div className={style.content}>
            <div className={style.content_wrap}>
               <div className={style.text_content}>
                  <div className={style.first_line}>{data?.content.first_line}</div>
                  <div className={style.second_line}>{data?.content.second_line}</div>
                  <div className={style.third_line}>{data?.content.decription}</div>
               </div>
               <div>
                  <button className={style.button}>
                     <Link href={"/"}>
                        <span>Explore now</span>
                        <span className={style.arrow}><ArrowRightOutlined/></span>
                     </Link>
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default SliderComponent