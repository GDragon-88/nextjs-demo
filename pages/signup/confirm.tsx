import { Button, Divider, Form, Input } from 'antd'
import React, { useEffect } from 'react'
import style from "../../styles/signUpConfirm.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState, userSignUp } from '../../redux/authSlice';
import { useRouter } from 'next/router';
const Confirm = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [form] = Form.useForm();
   const router = useRouter()
   const dispatch = useDispatch<any>()
   const onFinish = (value: any) => {
      dispatch(userSignUp(value))
   }

   const userInfo = useSelector(selectAuthState)?.registNewUser

   useEffect(()=>{
      if(userInfo){
         form.setFieldsValue(userInfo)
      }
   },[userInfo, router, form])
   return (
      <div className={style.signUpConfirm}>
         <div className={style.signUpLayout}>
            <div className={style.title}>Please check your information before register!</div>
            <div className={style.subTitle}>You can update your information later!</div>
            <Form
               className={style.form}
               form={form}
               onFinish={onFinish}
               validateTrigger="onSubmit"
               scrollToFirstError={true}
            >
               <Form.Item
                  name={'name'}
                  label="Full name"
               >
                  <Input bordered={false} readOnly />
               </Form.Item>

               <Form.Item
                  name={'email'}
                  label="Email"
               >
                  <Input bordered={false} readOnly />
               </Form.Item>

               <Form.Item
                  name={'phoneNumber'}
                  label="Phone number"
               >
                  <Input bordered={false} readOnly />
               </Form.Item>

               <Form.Item
                  name={'dateOfBirth'}
                  label="Date of birth"
                  rules={[
                  ]}
               >
                  <Input bordered={false} readOnly />
               </Form.Item>

               <Divider orientation="left" plain>Address information</Divider>


               <Form.Item
                  name={'city'}
                  label="City/province"
                  rules={[
                  ]}
               >
                  <Input bordered={false} readOnly />
               </Form.Item>

               <Form.Item
                  name={'district'}
                  label="District"
                  rules={[
                  ]}
               >
                  <Input bordered={false} readOnly />
               </Form.Item>

               <Form.Item
                  name={'ward'}
                  label="Ward"
                  rules={[
                  ]}
               >
                  <Input bordered={false} readOnly />
               </Form.Item>

               <Form.Item
                  name={'location'}
                  label="House number, street"
                  rules={[
                  ]}
               >
                  <Input bordered={false} readOnly />
               </Form.Item>

               <Form.Item>
                  <Button type="primary" onClick={()=>router.push('/signup')} style={{ backgroundColor: "red", marginRight:"25px" }}>
                     Back
                  </Button>
                  <Button type="primary" htmlType="submit" style={{ backgroundColor: "blue" }}>
                     Submit
                  </Button>
               </Form.Item>
            </Form>
         </div>
      </div>
   )
}

export default Confirm