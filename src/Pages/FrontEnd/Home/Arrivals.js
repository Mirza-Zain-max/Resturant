import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Container, Image } from 'react-bootstrap'
import { Col, Row, Typography } from 'antd'
import Burger from '../../Assets/images/Burger.png'


const NewArrivals = () => {
    const {Title} = Typography
  return (
    <Fade delay={.2}>
    <Container>
        <Row  className='d-flex justify-content-center align-items-center'>
            <Col>
            <Title level={1} className='text-light text-center my-5'>New Arrivals </Title>
            </Col>
        </Row>
        <Row  className='d-flex justify-content-center align-items-center'>
        <Col xs={24} md={12} lg={7} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image src={Burger} className=' d-flex w-100 rounded-5  justify-content-center align-items-center'  />
          </Col>
        <Col xs={24} md={12} lg={7} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image src={Burger} className=' d-flex w-100 rounded-5  justify-content-center align-items-center'  />
          </Col>
        <Col xs={24} md={12} lg={7} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image src={Burger} className=' d-flex w-100 rounded-5  justify-content-center align-items-center'  />
          </Col>
        <Col xs={24} md={12} lg={7} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image src={Burger} className=' d-flex w-100 rounded-5  justify-content-center align-items-center'  />
          </Col>
        <Col xs={24} md={12} lg={7} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image src={Burger} className=' d-flex w-100 rounded-5  justify-content-center align-items-center'  />
          </Col>
        <Col xs={24} md={12} lg={7} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image src={Burger} className=' d-flex w-100 rounded-5  justify-content-center align-items-center'  />
          </Col>
        </Row>
    </Container>
    </Fade>
  )
}

export default NewArrivals