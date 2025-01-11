import { Typography } from 'antd'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Container, Col, Row, Image, } from 'react-bootstrap'
import Frame1 from '../../Assets/images/frame1.png'
import Frame2 from '../../Assets/images/farme2.png'
import Frame4 from '../../Assets/images/frame4.png'



const OurService = () => {
  const { Title } = Typography
  return (
    <Fade>
      <Container>
        <Row className='d-flex justify-content-center my-5 align-items-center'>
          <Col>
            <Title className=' text-light d-flex justify-content-center align-items-center ' >Our Service </Title>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={4} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image style={{ maxHeight: "370px" }} className=' d-flex w-75 justify-content-center align-items-center' src={Frame1} />
          </Col>
          <Col xs={12} md={6} lg={4} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image style={{ maxHeight: "370px" }} className=' d-flex w-75 justify-content-center align-items-center' src={Frame2} />
          </Col>
          <Col xs={12} md={6} lg={4} className='img-hover my-3 p-5 d-flex justify-content-center align-items-center'>
            <Image style={{ maxHeight: "370px" }} className=' d-flex w-75 justify-content-center align-items-center' src={Frame4} />
          </Col>
        </Row>
      </Container>
    </Fade>
  )
}

export default OurService