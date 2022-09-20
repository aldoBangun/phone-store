import React from 'react'
import {
  Card,
  Space,
  Typography,
  Button
} from 'antd'

class DetailActions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { stock } = this.props

    return (
      <Card>
        <Typography.Title level={5}>{`Stock: ${stock}`}</Typography.Title>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button type="primary" size="large" block>Add to Cart</Button>
          <Button size="large" block>Buy</Button>
        </Space>
      </Card>
    )
  }
}

export default DetailActions
