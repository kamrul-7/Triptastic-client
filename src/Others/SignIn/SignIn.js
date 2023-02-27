import { LinkOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Rate, Upload } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Password from 'antd/es/input/Password';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};

const SignIn = () => {

    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();



    const from = location.state?.from?.pathname || '/';


    const onFinish = (values) => {
        console.log('Received values of form: ', values);

        createUser(values.email, values.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                handleUpdateUserProfile(values.name, values.photoURL);
                toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (
        <div className='lg:py-56 py-32 w-72 lg:w-96 mx-auto'>
            <Form
                name="name"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >

                <Form.Item
                    name="name"
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
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email address!',
                        },
                    ]}
                >
                    <Input prefix={<emailOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>


                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >

                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>



                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}

                >

                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </Form.Item>

                <Form.Item
                    name="photoURL"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Photo URL!',
                        },
                    ]}
                >
                    <Input prefix={<LinkOutlined className="site-form-item-icon" />} placeholder="Please input your Photo URL!" />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox className='text-white'>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item className='text-white'>
                    <Button type="primary" danger htmlType="submit" className="login-form-button mr-8">
                        Register
                    </Button>

                    Or
                    <a href="/login" className='text-blue-300 ml-8 font-bold'>Login Now!</a>
                </Form.Item>
            </Form>

        </div>
    );
};
export default SignIn;