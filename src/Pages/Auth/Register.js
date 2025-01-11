import React, { useState } from 'react';
import { Col, Form, Input, Row, message } from 'antd';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth, fireStore } from 'Components/Config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

const Register = () => {
    const initialState = { fullName: '', email: '', password: '', confirmPassword: '', phone: '' };
    const [state, setState] = useState(initialState);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleChange = (e) =>
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handlePhoneChange = (phone) => {
        setState((prev) => ({ ...prev, phone }));
    };

    const handleSubmit = async () => {
        const { fullName, email, password , phone , confirmPassword} = state;

        // Validation
        if (fullName.trim().length < 3) {
            return message.error('Please type your name correctly (at least 3 characters).');
        }
        if (password.length < 8) {
            return message.error('Password must be at least 8 characters long.');
        }
        if (confirmPassword !== password) {
            return message.error("Passwords don't match.");
        }
        if (phone.length < 10) { return message.error('Please enter a valid phone number.'); }

        const userData = { fullName, email, password, phone: state.phone };
        setIsProcessing(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // message.success("User is Successfully Registered");
                localStorage.setItem('user-login', true);
                localStorage.setItem('user-uid', user.uid);
                createDocument({ ...userData, uid: user.uid });
            })
            .catch((error) => {
                // message.error("Account is already registered", error);
                console.log('error', error)
            })
            .finally(() => {
                setIsProcessing(false);
            });
    };

    const createDocument = async (userData) => {
        console.log('User data:', userData);
        let { uid, email, password, displayName } = userData;
        let user = {
            uid: uid,
            fullName: state.fullName || displayName,
            email: email,
            password: password,
            phone: state.phone || '',
            DataCreated: serverTimestamp(),
            status: 'active',
        }
        // Placeholder for database integration logic
        try {
            // const docRef = await addDoc(collection(fireStore, "users"), userData);
            await setDoc(doc(fireStore, "users", user.uid), user);
        } catch (e) {
            message.error("Error adding document: ", e);
        }finally{
            message.success("User is Successfully Registered");
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
                                    label="Full Name" name="fullName" rules={[{ required: true, message: 'Please enter your full name.' }]}>
                                    <Input type="text" placeholder="Enter your full name" onChange={handleChange} name="fullName" value={state.fullName} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please enter your phone number.' }]}>
                                    <PhoneInput
                                        inputStyle={{ outline: "blue", width: '100%', height: '38px' }}
                                        country={'pk'}
                                        value={state.phone}
                                        onChange={handlePhoneChange}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item
                                    label="Email" name="email" rules={[{ required: true, message: 'Please enter your email.' }, { type: 'email', message: 'Please enter a valid email.' }]}>
                                    <Input inputMode='email' placeholder="Enter your email" onChange={handleChange} name="email" value={state.email} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password.' }]}>
                                    <Input.Password placeholder="Enter your password" onChange={handleChange} name="password" value={state.password} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Confirm Password" name="confirmPassword"
                                    rules={[
                                        { required: true, message: 'Please confirm your password.' },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error("Passwords don't match."));
                                            },
                                        }),
                                    ]}>
                                    <Input.Password placeholder="Confirm your password" onChange={handleChange} name="confirmPassword" value={state.confirmPassword} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Button type="primary" className="w-100" disabled={isProcessing}>
                                    Register
                                </Button>
                            </Col>
                            <Col span={12} className="mt-3">
                                <p>Already have an account?</p>
                            </Col>
                            <Col span={12}>
                                <Link to="/auth/login" className="btn bg-black mt-2 text-light p-2 text-center nav-link">
                                    Login
                                </Link>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </main>
    );
};

export default Register;