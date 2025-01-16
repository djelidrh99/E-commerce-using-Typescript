import { Button, Col, Container, Row } from 'react-bootstrap'
import img from '@assets/img/cat.jpg'
import style from './style.module.css'

const {imageContainer,box} = style

function Product() {
  return (
    <Col sm={6} md={6} xl={3} className={box} >
        <div>
        <div className={imageContainer}>
        <img src={img} alt="img" />
        </div>
        <h5>Title</h5>
        <h6>45$</h6>
        <Button variant="primary">Add To Cart</Button>
        </div>
        </Col>
  )
}

export default Product