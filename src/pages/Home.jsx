import {
  Typography,
  Form,
  Input,
  Space
} from 'antd'
import React from 'react'
import data from '../data/product.json'
import TableProducts from '../components/home/TableProducts'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      search: '',
      products: data,
      searchResult: data
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.setSearch = this.setSearch.bind(this)
  }

  handleSearch() {
    const { search, products } = this.state
    const filteredProducts = products.filter((product) => {
      const keyword = search.toLocaleLowerCase()
      return product.title.toLocaleLowerCase().includes(keyword)
    })

    this.setState({
      searchResult: filteredProducts
    })
  }

  setSearch(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    const { setSearch } = this
    const { searchResult } = this.state

    return (
      <>
        <Typography.Title level={4}>Products</Typography.Title>

        <Space direction="vertical">
          <Form>
            <Input.Search
              placeholder="search product"
              onChange={setSearch}
              onSearch={this.handleSearch}
              allowClear
              style={{ width: 400 }}
            />
          </Form>

          <TableProducts products={searchResult} />
        </Space>
      </>
    )
  }
}

export default Home
