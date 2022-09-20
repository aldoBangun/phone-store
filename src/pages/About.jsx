import React from 'react'
import { Row, Col } from 'antd'
import ProfileDetail from '../components/about/ProfileDetail'
import ProfilePortfolio from '../components/about/ProfilePortfolios'

class About extends React.Component {
  render() {
    return (
      <Row className="about" gutter={24}>
        <Col span={10}>
          <ProfileDetail />
        </Col>
        <Col span={14}>
          <ProfilePortfolio />
        </Col>
      </Row>
    )
  }
}

export default About
