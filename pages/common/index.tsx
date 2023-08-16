import React from 'react'
import style from '../../styles/common.module.scss'
import { formatter } from '../../common/common'
import { ShoppingCartOutlined } from '@ant-design/icons'
import Image from 'next/image'
import url from '../../image/login_img.jpg'
function index() {

   const addToCart = () => {
      alert('add to card')
      console.log('click!')
   }
  return (
    <div style={{padding:'30px', minHeight: '800px'}}>
      <div>
         <p>product card</p>
         <div className={style.product_card}>
            <div className={style.product_image}>
               <div className={style.first_layer}>
                  <Image src={url} alt='product' 
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{ height: '100%', width: '100%', objectFit: "cover" }}
                     
                  />
               </div>
               <div className={style.second_layer}>
                  <div className={style.button} onClick={()=>{addToCart()}}>
                     <ShoppingCartOutlined/>
                  </div>
               </div>
            </div>
            <div className={style.product_description}>
               <div className={style.name}>
                  {"name Read more: https:// nextjs.org/docs  /messages/fast-refresh-reload https://nextjs.org/docs/messages/fast-refresh-reload"}
               </div>
               <div className={style.price}>
                  <div className={style.discount}>5%</div>
                  <div className={style.display_price}>
                     <div className={style.privious}>12000</div>
                     <div className={style.current}>{formatter.format(10000)}</div>
                  </div>
                  
               </div>
               <div className={style.action}>
                  <div className={style.quantity}>{`${5} sold`}</div>
                  <div className={style.favorite}>add to favorite</div>
               </div>
               
            </div>
         </div>
         

      </div>
    </div>
  )
}

export default index