import { Col } from "react-bootstrap";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import { Tcategories } from "@type/type";


const { imageContainer,boxContainer } = style;


function Category({ title, img,prefix}: Tcategories) {
  
 
 
   
  return (
    
      <NavLink to={`/categories/products/${prefix}`}>
      <div className={boxContainer}>
      <div className={imageContainer}>
        <img title={title} src={img} alt="img" />
      </div>
      <h5>{title}</h5>
      </div>
      </NavLink>
    
  );
}

export default Category;
