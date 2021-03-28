import React from 'react'
import { Row, Col } from 'react-materialize'
import Profile from '../components/Profile'
import Products from '../components/Products'

const Home = () => (
 <Row>
   <Col m={3}>
      <Profile />
   </Col>
   <Col m={9}>
      <Products />
   </Col>
 </Row>
)

export default Home;