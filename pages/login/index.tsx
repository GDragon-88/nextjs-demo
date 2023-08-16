import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import style from '../../styles/login.module.scss'
import { Button, Checkbox, Form, Input } from 'antd'
import validate from '../../validate/validate'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { userLogin } from '../../redux/authSlice'

function Login() {
    const router = useRouter()
    const [remember, setRemember] = useState(false)
    const dispatch = useDispatch<any>()
    const [loading, setLoading] = useState(false)

    const onChange = (e: CheckboxChangeEvent) => {
        setRemember(e.target.checked)
    }

    const onFinish = async (values: any) => {
        setLoading(true)
        values = {
            ...values,
            remember: remember
        }
            dispatch(userLogin(values))
            setLoading(false)
            router.push('/')
        
    }

    const warning = ()=> {
        alert ('Features under development!')
    }

    return (
        <div className={style.login_page}>
            <div className={style.login}>
                <div className={style.img}>
                </div>
                <div className={style.form}>
                    <div className={style.top_form}>
                        <div className={style.signin_text}>Sign in</div>
                        <div className={style.logo}>
                            <div onClick={()=>warning()}>f</div>
                            <div onClick={()=>warning()}>G</div>
                        </div>
                    </div>
                    <Form
                        onFinish={onFinish}
                        validateTrigger='onSubmit'
                    >
                        <Form.Item
                            label="Email"
                            name={"email"}
                            rules={[
                                validate.fieldRequired("email"),
                                validate.mailValidate
                            ]}
                        >
                            <Input></Input>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name={"password"}
                            rules={[
                                validate.fieldRequired("password")
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name={"remember"}
                            rules={[
                            ]}
                            valuePropName='checked'
                        >
                            <Checkbox onChange={onChange}>{"Remember me"}</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type='primary'
                                htmlType='submit'
                                style={{ backgroundColor: "blue" }}
                                loading={loading}
                            >
                                Login
                            </Button>
                        </Form.Item>

                    </Form>

                    <div>
                        <p>You don&apos;t have account?</p>
                        <Link href={'/signup'} className={style.signup}> Sign up</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}

export default Login