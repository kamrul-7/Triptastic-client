import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const [loginUserEmail, setLoginUserEmail] = useState('');



    const onFinish = (values) => {
        console.log('Received values of form: ', values);

        signIn(values.email, values.password)
            .then(result => {
                const user = result.user;
                toast.success('User Login Successful')
                console.log(user);
                navigate('/')
                setLoginUserEmail(values.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);

            });

    };
    return (
        <div className='py-56 w-96 mx-auto'>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox className='text-white'>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot text-blue-500" href="">
                        Forgot password?
                    </a>
                </Form.Item>

                <Form.Item className='text-white'>
                    <Button type="primary" danger htmlType="submit" className="login-form-button mr-8">
                        Log in
                    </Button>

                    Or
                    <a href="/signIn" className='text-blue-300 ml-8'>register now!</a>

                </Form.Item>

            </Form>

        </div>
    );
};
export default Login;