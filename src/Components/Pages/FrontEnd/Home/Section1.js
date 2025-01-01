import React from 'react'
import { Button, Card, Container, Image } from 'react-bootstrap'
import {  Col, Row, Typography } from 'antd'
import Frame from '../../Assets/images/frame3.png'
import { Fade } from 'react-awesome-reveal'
const Section1 = () => {
    const { Title, Paragraph } = Typography
    return (
        <Fade delay={0.3} cascade>
            <Container className='mt-5'>
                <Row className=''>
                    <Col lg={11} md={10} xs={24} >
                        <Image src={Frame} className='w-100 mt-5 float-md-end mb-3 ms-md-3' />
                    </Col>
                    <Col lg={8} md={10} xs={24} className='my-5' >
                        <Card className='bg-black justify-content-start align-items-start'>
                            <Title level={3} className='text-light '>#1 OF THIS WEEK</Title>
                            <Title className='text-light justify-content-start fs-1 align-items-start d-flex' level={1}>EAT HEALTHY <br /> BE HEALTHY</Title>
                            <Paragraph className='text-light  my-4 fs-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. repellat magnam consectetur voluptatum voluptates sed iusto quia?</Paragraph>
                            <Button className=' text-light border-0 mb-5' style={{ height: "40px", backgroundColor: "#f4511f" }}>Order Now</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fade>
    )
}

export default Section1