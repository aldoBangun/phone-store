import React from 'react'
import { Typography, Tag, Divider } from 'antd'
import { StarFilled } from '@ant-design/icons'

class DetailProductInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      title,
      rating,
      totalPrice,
      discountPercentage,
      price,
      category,
      description
    } = this.props

    return (
      <>
        <Typography.Title level={4}>{title}</Typography.Title>

        <Typography.Text>
          <StarFilled style={{ color: '#ffd666' }} />
          {` ${rating} (5 rating)`}
        </Typography.Text>

        <Typography.Title level={1} style={{ marginTop: '1.5rem' }}>
          {`$${totalPrice}`}
        </Typography.Title>

        <Tag color={discountPercentage > 15 ? 'red' : 'green'}>
          {`-${discountPercentage}%`}
        </Tag>

        <Typography.Text style={{ textDecoration: 'line-through' }}>
          {`$${price}`}
        </Typography.Text>

        <Divider />

        <Typography.Text style={{ display: 'block', marginBottom: '1rem' }}>
          <span style={{ color: '#707070' }}>Category: </span>
          <span style={{ fontWeight: 500, textTransform: 'capitalize' }}>
            {category}
          </span>
        </Typography.Text>

        <Typography.Paragraph>{description}</Typography.Paragraph>
      </>
    )
  }
}

export default DetailProductInfo
