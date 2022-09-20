import React from 'react'
import {
  Card,
  Space,
  Typography,
  Divider
} from 'antd'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'

class Contact extends React.Component {
  render() {
    return (
      <Card className="contact">
        <Space>
          <PhoneOutlined />
          <Typography.Text copyable>0857-9237-3008</Typography.Text>
        </Space>
        <Divider />
        <Space>
          <MailOutlined />
          <Typography.Text copyable>alfredobangun14@gmail.com</Typography.Text>
        </Space>
      </Card>
    )
  }
}

export default Contact
