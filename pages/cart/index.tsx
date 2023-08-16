import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDiscount, addToCart, removeAll, selectCartState } from '../../redux/cartSlice'
import style from "../../styles/cart.module.scss"
import { DeleteOutlined } from '@ant-design/icons'
import { Divider, Input, Tooltip } from 'antd'
// import { setLoading } from '../../redux/globalSlice'
import CartApi from '../../Api/cartApi'
import axios from 'axios'
import { setError } from '../../redux/globalSlice'
import Image from 'next/image'
import emptyCart from '../../image/emty_cart.png'
import { useRouter } from 'next/router'

function Cart() {
   const cartData = useSelector(selectCartState)
   const [code, setCode] = useState('')
   const dispatch = useDispatch()
   const router =  useRouter()
   const callApi = React.useCallback(async () => {
      try {
         if (code) {
            const data = await CartApi.checkDiscount(code)

            dispatch(addDiscount(data?.data.discount))
            console.log(data.data)
         }
      } catch (error) {
         console.log(error)
         if (axios.isAxiosError(error)) {
            dispatch(setError(error?.response?.data.message))
         } else if (error instanceof Error) {
            await dispatch(setError(error.message));
         }
      }

   }, [code, dispatch])

   const increase = (id: number) => {
      dispatch(addToCart({
         id: id,
         quantity: 1
      }))
   }
   const decrease = (id: number) => {
      dispatch(addToCart({
         id: id,
         quantity: -1
      }))
   }

   const remove = (id: number) => {
      dispatch(removeAll(id))
   }

   return (
      <div className={style.cart}>
         {cartData?.cartItem.length !== 0 ? (
            <div className={style.cartForm}>
               <div className={style.firstCol}>
                  <div>
                     <div className={style.title}>Item in cart</div>
                     <Divider className={style.divider} />
                  </div>
                  {
                     cartData?.cartItem.map((item: any) => {
                        return (
                           <div className={style.cartItem} key={item.id}>
                              <div className={style.itemImage}>
                                 <Image src={`${item.img}`} alt='image' width={200} height={150} />
                              </div>
                              <div className={style.itemInfo}>
                                 <div className={style.itemName}>{item.name}</div>
                                 <div className={style.itemPrice}>{item.price}</div>
                                 <div className={style.itemQuantity}>
                                    <button className={style.button} onClick={() => decrease(item.id)}>
                                       <span className={style.minus}>-</span>
                                    </button>
                                    <span>{item.quantity}</span>

                                    <button className={style.button} onClick={() => increase(item.id)}>
                                       <span>+</span>
                                    </button>

                                    <Tooltip title={'Remove'}>
                                       <button onClick={() => remove(item.id)}><DeleteOutlined className={style.delete} /></button>
                                    </Tooltip>
                                 </div>
                              </div>

                           </div>
                        )
                     })
                  }
               </div>
               <div className={style.secondCol}>
                  <div className={style.content}>
                     <div className={style.order_summary}>Order summary</div>
                     <Divider className={style.divider}></Divider>
                     <div>
                        <div className={style.subTotal}>
                           <span className={style.subTotal_col1}>Subtotal:</span>
                           <span className={style.subTotal_col2}>{`${cartData.total}$`}</span>
                        </div>
                        <div className={style.discount}>
                           <span className={style.discount_text}>Discount Code</span>
                           <Input onBlur={callApi} onChange={(e) => setCode(e?.target.value)}></Input>

                           <span className={style.note}>If you have any coupon, enter here to use!</span>
                           <div className={style.note}>Only 1 discount code can be used per order</div>
                        </div>
                        <div className={style.subTotal}>
                           <span className={style.subTotal_col1}>Discount: </span>
                           <span className={style.subTotal_col2}>{`${cartData?.discountPercent * cartData?.total / 100}$`}</span>
                        </div>
                        <div className={style.total}>
                           <span className={style.total_col1}>Total</span>
                           <span className={style.total_col2}>{`${cartData?.total* ( 100 - cartData?.discountPercent)/100}$`}</span>
                        </div>
                        <div>
                           <button className={style.checkOut} onClick={()=>router.push('/checkout')}>Order now</button>
                           <button className={style.backShop}>Continue shopping!</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <div>
               <div>
                  You don&apos;t have any product and cart
               </div>
               <div>
                  <Image src={emptyCart} alt='empty' height={250} width={250} />
               </div>
            </div>
         )}
      </div>
   )
}

export default Cart