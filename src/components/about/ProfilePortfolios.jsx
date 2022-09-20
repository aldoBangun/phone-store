import React from 'react'
import {
  List,
  Card,
  Space,
  Button,
  Image,
  Divider,
  Typography
} from 'antd'
import portfolios from '../../data/portfolios.json'

class ProfilePortfolio extends React.Component {
  render() {
    return (
      <List
        className="portfolio-list"
        dataSource={portfolios}
        renderItem={(item) => (
          <Card className="portfolio-card" key={item.id}>
            <Typography.Title level={5}>{item.name}</Typography.Title>
            <Divider />
            <Image className="portfolio-image" src={item.image} alt={item.name} preview={false} />
            <Divider />
            <Space>
              <Button type="link" href={item.repository} target="_blank"> Repository </Button>
              <Button type="link" href={item.demo} target="_blank"> Demo </Button>
            </Space>
          </Card>
        )}
      />
    )
  }
}

export default ProfilePortfolio
