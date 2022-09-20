import React from 'react'
import { Space, Image } from 'antd'

class DetailProductImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageSize: 320,
      activeImageIndex: 0
    }

    this.handleSwitchImage = this.handleSwitchImage.bind(this)
  }

  handleSwitchImage(index) {
    this.setState({
      activeImageIndex: index
    })
  }

  render() {
    const { images, title } = this.props
    const { imageSize, activeImageIndex } = this.state
    const { handleSwitchImage } = this

    return (
      <Space direction="vertical">
        <Image
          className="preview-image"
          src={images[activeImageIndex]}
          alt={title}
          height={imageSize}
          width={imageSize}
        />
        <Space>
          {images.map((image, index) => (
            <Image
              className="thumbnail-image"
              key={`${image}`}
              preview={false}
              src={image}
              alt="preview"
              onClick={() => handleSwitchImage(index)}
              style={{
                borderColor:
                  index === activeImageIndex ? '#da4020' : 'transparent'
              }}
            />
          ))}
        </Space>
      </Space>
    )
  }
}

export default DetailProductImage
