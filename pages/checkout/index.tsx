import React, { useId, useState } from 'react'
import style from '../../styles/checkout.module.scss'
import { useSelector } from 'react-redux'
import { selectCartState } from '../../redux/cartSlice'
import Link from 'next/link'
import emptyCart from '../../image/emty_cart.png'
import Image from 'next/image'
import { Divider, Form, Input } from 'antd'
import validate from '../../validate/validate'
import { formatter } from '../../common/common'
import { useRouter } from 'next/router'
function Checkout() {
   const { TextArea } = Input;
   const [form] = Form.useForm();
   const { cartItem, numberItem, total, discountPercent } = useSelector(selectCartState)
   const [loading, setLoading] = useState(false)
   const router = useRouter()

   const onSubmit = async (values: any) => {
      setLoading(true)
      console.log(values)
      // call api 
      // if ok navigate to user order page

      new Promise((resolve)=>{
         resolve(
            setTimeout(()=>{
               setLoading(false) 
            }, 1500)
         )
      })

      router.push('/user')
   }

   return (
      <div className={style.checkout_page}>
         <div>Checkout Page</div>

         {/* block content */}
         {cartItem && !cartItem.length ? (
            <div className={style.no_content}>
               <div>
                  <h3>You don&apos;t have any product in cart !</h3>
                  <Image src={emptyCart} alt='emty' width={250} height={250} />
                  <div className={style.link}>
                     <Link href={'/product'}>Go to product</Link>
                  </div>
               </div>

            </div>
         ) : (
            <div className={style.content}>
               {/*block product */}
               <div className={style.product}>
                  <div className={style.product_info_header}>
                  <div className={style.image}>{"Image"}</div>
                  <div className={style.name}>{'Name'}</div>
                  <div className={style.price}>{"Price"}</div>
                  <div className={style.quantity}>{"Quantity"}</div>
                  <div className={style.total}>{"Total"}</div>
                  </div>
                  {cartItem.map((item: any, index: any) => {
                     return (
                        <>
                           <div className={style.product_info} key={item.id+ index}>
                              <Image src={`${item.img}`} alt='image' width={200} height={150} className={style.product_image}/>
                              <div className={style.name}>{item.name}</div>
                              <div className={style.price}>{item.price}</div>
                              <div className={style.quantity}>{item.quantity}</div>
                              <div className={style.total}>{item.price * item.quantity}</div>
                           </div>
                           <div className={style.item_divider}/>
                        </>
                     )
                  })}
               </div>

               {/* block customer info */}
               <div className={style.customer}>
                  <div className={style.customer_title}>Customer information</div>
                  <Divider className={style.divider} />
                  <Form
                     form={form}
                     onFinish={onSubmit}
                  >
                     <Form.Item
                        className={style.input}
                        label={'Customer name'}
                        name={'name'}
                        rules={[
                           validate.fieldRequired('name'),
                           validate.rangeLength('name', 1, 50)
                        ]}
                     >
                        <Input />
                     </Form.Item>

                     <Form.Item
                        className={style.input}
                        label={'Phone number'}
                        name={'phoneNumber'}
                        rules={[
                           validate.fieldRequired('phone number'),
                           validate.phoneNumber()
                        ]}
                     >
                        <Input />
                     </Form.Item>

                     <Form.Item
                        className={style.input}
                        label={'Email'}
                        name={'email'}
                        rules={[
                           validate.mailValidate
                        ]}
                     >
                        <Input />
                     </Form.Item>

                     <Form.Item
                        className={style.input}
                        label={'Address'}
                        name={'address'}
                        rules={[
                           validate.fieldRequired('address'),
                           validate.maxLength('address', 255)
                        ]}
                     >
                        <Input />
                     </Form.Item>

                     <Form.Item
                     label={'Note'}
                     name= {'note'}
                     rules={[
                        validate.maxLength('note', 255)
                     ]}
                     >
                        <TextArea 
                           // maxLength={255}
                           rows={3}
                           style={{resize:'none'}}
                        />
                     </Form.Item>

                  </Form>

                  <div>Order info</div>
                  <Divider className={style.divider} />
                  <div className={style.customer_order}>
                     <span>Sub total: </span>
                     <span>{formatter.format(total)}</span>
                  </div>
                  <div className={style.customer_order}>
                     <span>Discount: </span>
                     <span>{formatter.format(discountPercent * total)}</span>
                  </div>

                  <div>
                     <span>Delivery fee: </span>
                     <p className = {style.text_warning}>{'✔Free for distances less than 10km'}</p>
                     <p className = {style.text_warning}>{'✔For longer distances please refer '}{<Link href={'/info/delivery'} className={style.text_link}>here</Link>}</p>
                  </div>

                  <div className={style.customer_order}>
                     <span>Total: </span>
                     <span>{formatter.format((100-discountPercent)* total/100)}</span>
                  </div>

                  <div className={style.customer_remind}>Please check the information carefully before submitting</div>

                  <div>
                     <button 
                        className={loading?style.button_submit_loading: style.button_submit} 
                        disabled = {loading}
                        onClick={() => form.submit()}
                     >
                        <span className={loading?style.text_button_submit:''}>Order</span>
                     </button>
                  </div>
               </div>
            </div>
         )}

      </div>
   )
}


export async function getStaticProps() {
   return {
      props: {}
   }
}

export default Checkout