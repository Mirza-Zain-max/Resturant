import React, { useState } from 'react';
import { Col, Form, Input, Row, message } from 'antd';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from 'Components/Config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const initialState = {  email: '', password: '' };
    const [state, setState] = useState(initialState);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleChange = (e) =>
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async () => {
        const { email, password } = state;
        try {
            setIsProcessing(true);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('user', user)
            setState(initialState);

        } catch (error) {
            message.error(error.message || 'An error occurred during registration.');
        } finally {
            setIsProcessing(false);
        }
    };

   
    return (
        <main className="auth p-3 p-md-4 p-lg-5">
            <Container>
                <div className="card p-3 p-md-4 p-lg-4">
                    <Form layout="vertical" onFinish={handleSubmit}>
                        <h1 className="mb-4 text-center">
                            <i>Register</i>
                        </h1>
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    label="Email" name="email" rules={[{ required: true, message: 'Please enter your email.' }, { type: 'email', message: 'Please enter a valid email.' },]}>
                                    <Input type="email" placeholder="Enter your email" onChange={handleChange} name="email" value={state.email} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password.' }]}                                >
                                    <Input.Password placeholder="Enter your password" onChange={handleChange} name="password" value={state.password} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Button type="primary"  className="w-100"
                            
                                >
                                   Login
                                </Button>
                            </Col>
                            <Col span={12} className="mt-1">
                                <p className='mb-0'>Forgot Password</p>
                            </Col>
                            <Col span={12}>
                                <Link to="/auth/forgot" className="btn mt-1 text-center nav-link">
                                    Forgot
                                </Link>
                           </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </main>
    );
};

export default Login;
