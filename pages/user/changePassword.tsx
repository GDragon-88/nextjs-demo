import { Button, Form, Input } from 'antd'
import React from 'react'
import validate from '../../validate/validate'
import { useDispatch } from 'react-redux'
import { changePassword } from '../../redux/authSlice'
import { setSuccess } from '../../redux/globalSlice'

function ChangePassword() {
  const [form] = Form.useForm()
  const dispatch = useDispatch<any>()
  const onFinish = async (values: any) => {
    try {
      const payload = values;
      const data = await dispatch(changePassword(payload))

      if (data.type.endsWith('/fulfilled')) {
        form.resetFields(),
        dispatch(setSuccess('Change password success!'))
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h2> Change password</h2>
      <hr/>
      <Form
        form={form}
        onFinish={onFinish}
        validateTrigger="onSubmit"
        scrollToFirstError={true}
        style={{width:'600px'}}
      >
        <Form.Item
          label={"Current password"}
          name={'currentPassword'}
          required={true}
          rules={[
            validate.fieldRequired('current password'),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label={"New password"}
          name={'newPassword'}
          required={true}
          rules={[
            validate.fieldRequired('new password'),
            validate.passwordValidate(),
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (
                  !value ||
                  getFieldValue("currentPassword") !== value
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  'New password cannot same old password!'
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label={"Confirm password"}
          name={'confirmPassword'}
          required={true}
          rules={[
            validate.fieldRequired('confirm password'),
            validate.passwordValidate(),
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (
                  !value ||
                  getFieldValue("newPassword") === value
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "Confirm password not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button htmlType='submit' style={{ backgroundColor: '#1889f3', color: "white" }}>Confirm</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ChangePassword