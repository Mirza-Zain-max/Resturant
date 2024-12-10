import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Container, Image } from 'react-bootstrap'
import { Col, Row, Typography } from 'antd'
import Pizza from '../../Assets/images/pizza.png'
import Pizza2 from '../../Assets/images/pizza2.png'
import Pizza3 from '../../Assets/images/pizza3.png'
import Pasta from '../../Assets/images/pasta.png'
import Pizza4 from '../../Assets/images/pizza4.png'
import Pizza5 from '../../Assets/images/pizza5.png'

const Premium = () => {
    const {Title} = Typography
  return (
    <Fade delay={.2}>
    <Container>
        <Row  className='d-flex justify-content-center align-items-center'>
            <Col>
            <Title level={1} className='text-light text-center my-5'>Premium Meun</Title>
            </Col>
        </Row>
        <Row  className='d-flex justify-content-center align-items-center'>
        <Col xs={24} md={12} lg={7} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image src={Pizza} className=' d-flex w-100 rounded-5  justify-content-center align-items-center'  />
          </Col>
        <Col xs={24} md={12} lg={7} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image src={Pizza2} className=' d-flex w-100 rounded-5  justify-content-center align-items-center'  />
          </Col>
        <Col xs={24} md={12} lg={7} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image src={Pizza3} className=' d-flex w-100 rounded-5  justify-content-center align-items-center'  />
          </Col>
        <Col xs={24} md={12} lg={7} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image src={Pasta} className=' d-flex w-100 rounded-5  justify-content-center align-items-center'  />
          </Col>
        <Col xs={24} md={12} lg={7} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image src={Pizza4} className=' d-flex w-100 rounded-5  justify-content-center align-items-center'  />
          </Col>
        <Col xs={24} md={12} lg={7} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image src={Pizza5} className=' d-flex w-100 rounded-5  justify-content-center align-items-center'  />
          </Col>
        </Row>
    </Container>
    </Fade>
  )
}

export default Premium