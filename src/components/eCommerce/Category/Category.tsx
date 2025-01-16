import { Col} from 'react-bootstrap'
import img from '@assets/img/cat.jpg'
import style from './style.module.css'

const {imageContainer,box} = style
function Category() {
  return (
    <Col sm={6} md={6} xl={3} className={box} >
        <div className={imageContainer}>
        <img src={img} alt="img" />
        </div>
        <h5>Category</h5>
        </Col>
  )
}

export default Category