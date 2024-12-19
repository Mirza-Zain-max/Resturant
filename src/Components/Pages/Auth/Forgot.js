import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Col, Row, Input, Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailLink } from 'firebase/auth';

const Forgot = () => {
  const [state, setState] = useState({ email: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const { email } = state;
    try {
        setIsProcessing(true);
        const userCredential = await signInWithEmailLink( email);
        const user = userCredential.user;
        console.log('user', user)

    } catch (error) {
        message.error(error.message || 'User is logged in.');
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
              <i>Forgot</i>
            </h1>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email.' },
                    { type: 'email', message: 'Please enter a valid email.' },
                  ]}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    name="email"
                    value={state.email}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  className="w-100 btn btn-primary"
                  htmlType="submit"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Submit'}
                </Button>
              </Col>
              <Col span={24} className="d-flex justify-content-center align-items-center">
                <Button
                  onClick={() => navigate(-1)}
                  className="text-center mt-3 btn btn-secondary"
                >
                  Back To Page
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </main>
  );
};

export default Forgot;
