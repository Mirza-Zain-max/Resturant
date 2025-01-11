import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Card, Container, Image } from 'react-bootstrap'
import { Button, Col, Row, Typography } from 'antd'
import Frame from '../../Assets/images/Burger.jpg'
import Frame1 from '../../Assets/images/Aboutus.png'
const AboutUs = () => {
   const { Title, Paragraph } = Typography
    return (
        <Fade delay={0.3} cascade>
            <Container className='mt-5'>
                        <Title className='text-light text-center' level={1}>About Us</Title>
                <Row className='d-flex justify-content-start  align-items-center'>
                    <Col lg={8} md={10} xs={24} className='my-5' >
                        <Title className='text-light justify-content-start fs-1 align-items-start d-flex my-4' level={1}>About Us</Title>
                        <Paragraph className='text-light  my-4 fs-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. repellat magnam consectetur voluptatum voluptates sed iusto quia?</Paragraph>
                        <Button className=' text-light border-0 mb-5 fs-5' style={{ height: "40px", backgroundColor: "#f4511f" }}>Know More</Button>
                    </Col>
                    <Col lg={8} md={10} xs={24} className='d-flex justify-content-end  align-items-end'>
                       <Card className='d-flex border-0  justify-content-start align-items-end'>
                        <Image src={Frame} className='w-100'/>
                       </Card>
                    </Col>
                    <Col lg={8} md={10} xs={24} className='d-flex justify-content-end  align-items-end'>
                       <Card className='d-flex border-0  justify-content-start align-items-end'>
                        <Image src={Frame1} className='w-100'/>
                       </Card>
                    </Col>
                </Row>
            </Container>
        </Fade>
    )
}

export default AboutUs