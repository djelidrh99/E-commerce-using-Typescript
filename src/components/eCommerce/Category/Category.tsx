import { Col } from "react-bootstrap";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";


const { imageContainer, box } = style;
type categoriesType = {
  title: string;
  img: string;
  prefix:string
};

function Category({ title, img,prefix }: categoriesType) {
  
 
 
   
  return (
    <Col sm={6} md={6} xl={3} className={box}>
      <NavLink to={`/categories/products/${prefix}`}>
      <div className={imageContainer}>
        <img src={img} alt="img" />
      </div>
      <h5>{title}</h5>
      </NavLink>
    </Col>
  );
}

export default Category;
