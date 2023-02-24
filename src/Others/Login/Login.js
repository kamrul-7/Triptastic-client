import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
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
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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