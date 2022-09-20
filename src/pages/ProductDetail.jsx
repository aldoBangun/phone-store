import React from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'antd'
import DetailActions from '../components/product/DetailActions'
import DetailProductInfo from '../components/product/DetailProductInfo'
import data from '../data/product.json'
import DetailProductImage from '../components/product/DetailProductImage'

class ProductDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      product: null
    }
  }

  componentDidMount() {
    const { params } = this.props
    const { productId } = params
    const product = data.find((item) => item.id === +productId)
    this.setState({ product })
  }

  render() {
    const { product } = this.state

    if (!product) return <h1>Loading...</h1>
    const {
      title,
      price,
      discountPercentage,
      images,
      stock
    } = product
    const totalPrice = (price - price * (discountPercentage / 100)).toFixed(2)
    const productInfo = { ...product, totalPrice }

    return (
      <Row className="product-detail">
        <Col span={8}>
          <DetailProductImage images={images} title={title} />
        </Col>

        <Col span={8}>
          <DetailProductInfo {...productInfo} />
        </Col>

        <Col span={8}>
          <DetailActions stock={stock} />
        </Col>
      </Row>
    )
  }
}

function withParams(Component) {
  return function Wrapper(props) {
    const params = useParams()
    return <Component {...props} params={params} />
  }
}

export default withParams(ProductDetail)
