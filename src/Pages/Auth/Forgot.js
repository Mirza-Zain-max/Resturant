import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Col, Row, Input, Form, message} from 'antd';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from 'Components/Config/firebase';

const Forgot = () => {
  const [state, setState] = useState({ email: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  

  const handleSubmit = e => {
    e.preventDefault();

    let { email } = state
    setIsProcessing(true)

    sendPasswordResetEmail(auth, email, { url: 'http://localhost:3000/auth/login' })
    
      .then(() => {
        message.success("Email send  Successfully")
        navigate('/auth/login'); // Redirect to login page

      })
      .catch(() => {
        message.info("This Account Can't Register")
      })
      .finally(() => {
        setIsProcessing(false)
      })


  }


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
                <Button className="w-100 btn btn-primary" onClick={handleSubmit} disabled={isProcessing}  >
                  Submit
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
