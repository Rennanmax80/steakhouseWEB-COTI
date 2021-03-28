import React from 'react'
import { Row, Col } from 'react-materialize'
import Profile from '../components/Profile'
import Register from '../components/Register'

const Account = () => (
 <Row>
   <Col m={3}>
      <Profile />
   </Col>
   <Col m={9}>
      <Register />
   </Col>
 </Row>
)

export default Account;