import React from 'react'
import { Table, Image } from 'antd'

const columns = [
  {
    title: 'Product',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
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
    key: 'title'
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  }
]

class TableProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { products } = this.props

    return (
      <Table
        columns={columns}
        dataSource={products}
        onRow={(product) => ({
          onClick() {
            console.log(product)
          }
        })}
        pagination={{ position: ['bottomCenter'] }}
      />
    )
  }
}

export default TableProducts
