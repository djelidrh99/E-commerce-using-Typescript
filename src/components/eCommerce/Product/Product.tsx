import { Button, Col, Container, Row } from 'react-bootstrap'
import style from './style.module.css'
import { Tproducts } from '@type/type'

const {imageContainer,box} = style



function Product({title,img,price}:Tproducts) {
  return (
    <Col xs={6} md={6} xl={3} className={box} >
        <div>
        <div className={imageContainer}>
        <img src={img} alt={title} />
        </div>
        <h5>{title}</h5>
        <h6>{price}</h6>
        <Button variant="primary">Add To Cart</Button>
        </div>
        </Col>
  )
}

export default Product