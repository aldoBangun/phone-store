import React from 'react'
import { Table, Image } from 'antd'
import { useNavigate } from 'react-router-dom'

const columns = [
  {
    title: 'Product',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
    width: 200,
    render: (url) => (
      <Image
        src={url}
        alt="thumbnail"
        height={100}
        width={100}
        preview={false}
      />
    )
  },
  {
    title: 'Name',
    dataIndex: 'title',
    key: 'title',
    width: 200
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
    width: 200
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    width: 200
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (price) => `$${price.toLocaleString()}`,
    width: 200
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
    width: 200
  }
]

class TableProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { products, navigate } = this.props

    return (
      <Table
        rowClassName="product-row"
        columns={columns}
        dataSource={products}
        size="large"
        onRow={(product) => ({
          onClick() {
            navigate(`products/${product.id}`)
          }
        })}
        pagination={{ position: ['bottomCenter'] }}
      />
    )
  }
}

function withNavigation(Component) {
  return function Wrapper(props) {
    const navigate = useNavigate()
    return <Component {...props} navigate={navigate} />
  }
}

export default withNavigation(TableProducts)
