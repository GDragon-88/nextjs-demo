import { Form, Input, Button, DatePicker, Divider } from 'antd'
import React, { useEffect } from 'react'
import validate from '../../validate/validate';
import style from '../../styles/signup.module.scss'
import Link from 'next/link';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserInfor, selectAuthState } from '../../redux/authSlice';
import { useRouter } from 'next/router';

function SignUp() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [form] = Form.useForm();
   const dispatch = useDispatch<any>()
   const router = useRouter()

   const disabledDate = (current: any) => {
      // Can not select days before today and today
      return current && current > moment().subtract(1, "days").endOf("days");
   };

   const userInfo = useSelector(selectAuthState)?.registNewUser

   useEffect(()=>{
      if(userInfo){
         form.setFieldsValue(userInfo)
      }
   }, [userInfo,form])

   const onFinish = async(values: any) => {
      console.log(values)
      values = {
         ...values,
         dateOfBirth: moment(values?.representativeDateOfBirth)
      }
      await dispatch(saveUserInfor(values))

      router.push('signup/confirm')

   }

   return (
      <div className={style.signup}>
         <div className={style.signupform}>
            <div className={style.header}>
               <span className={style.firstCol}>Sign up</span>
               <div className={style.secondCol}>
                  <div>
                     <div>Quick acess with</div>
                     <div className={style.platform}>
                        <p className={style.plugInGoogle}>G</p>
                        <p className={style.plugInFacebook}>f</p>
                     </div>
                  </div>
               </div>
            </div>
            <Form
               form={form}
               onFinish={onFinish}
               validateTrigger="onSubmit"
               scrollToFirstError={true}
            >
               <Form.Item
                  name={'name'}
                  label="Full name"
                  rules={[
                     validate.fieldRequired('full name'),
                     validate.maxLength('full name', 255)
                  ]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  name={'email'}
                  label="Email"
                  rules={[
                     validate.fieldRequired('email'),
                     validate.maxLength('email', 255),
                     validate.mailValidate()
                  ]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  name={'phoneNumber'}
                  label="Phone number"
                  rules={[
                     validate.fieldRequired('phone number'),
                     validate.phoneNumber()
                  ]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  name={'dateOfBirth'}
                  label="Date of birth"
                  rules={[
                  ]}
               >
                  <DatePicker 
                     format={"YYYY-MM-DD"}
                     disabledDate={disabledDate}
                  />
               </Form.Item>

               <Divider orientation="left" plain>Address information</Divider>


               <Form.Item
                  name={'city'}
                  label="City/province"
                  rules={[
                  ]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  name={'district'}
                  label="District"
                  rules={[
                  ]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  name={'ward'}
                  label="Ward"
                  rules={[
                  ]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  name={'location'}
                  label="House number, street"
                  rules={[
                  ]}
               >
                  <Input />
               </Form.Item>

               <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ backgroundColor: "blue" }}>
                     Submit
                  </Button>
               </Form.Item>
            </Form>
            <div>
               <p>
                  You have an account?
                  <Link href={'/login'} className={style.link}>Login</Link>
               </p>
            </div>
         </div>
      </div>
   )
}

export default SignUp

// export async function getStaticProps() {
//    return {
//       props: {

//       }
//    }
// }