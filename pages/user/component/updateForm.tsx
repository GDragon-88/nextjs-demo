import React, { useEffect, useState } from 'react'
import { DatePicker, Divider, Form, Input } from 'antd'
import validate from '../../../validate/validate'
import moment from 'moment'
function UpdateUserInfo({ setDisableUpdate }: any) {
  const [form] = Form.useForm()
  const [change, setChange] = useState(false)

  const disabledDate = (current: any) => {
    // Can not select days before today and today
    return current && current > moment().subtract(1, "days").endOf("days");
 };
 
  useEffect(() => {
    if (change) {
      setDisableUpdate(false)
    }
  }, [setDisableUpdate, change])
  return (
    <div>
      <Form
        form={form}
        onChange={() => setChange(true)}
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
      </Form>

      <div>{'Please check your information carefully before submit!'}</div>
    </div>
  )
}

export default UpdateUserInfo