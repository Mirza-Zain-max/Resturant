import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Button, Card, Container, Image } from 'react-bootstrap'
import {  Col, Row, Typography } from 'antd'
import Disco from '../../Assets/images/Discount.png'

const Discount = () => {
    const { Title } = Typography
    return (
        <Fade delay={0.3} cascade>
            <Container className='mt-5'>
                <Row className=''>
                    <Col lg={11} md={10} xs={24} >
                        <Image src={Disco} className='w-100 p-2 ' />
                    </Col>
                    <Col lg={8} md={10} xs={24} className='my-5 d-flex justify-content-center align-items-center' >
                       <Card className='bg-black'>
                       <Title level={2} className='text-light my-5 d-flex justify-content-center align-items-center  '>50% Discounts <br /> on New Product</Title>
                       <Button className=' text-light border-0 w-50 d-flex justify-content-center align-items-center ' style={{ height: "40px", backgroundColor: "#f4511f" }}>Order Now</Button>
                       </Card>
                    </Col>
                </Row>
            </Container>
        </Fade>
    )
}

export default Discount