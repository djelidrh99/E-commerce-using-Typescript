import { Col, Container, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const ProductsSkeleton = () => {
    const SkeletonList = Array(4)
    .fill("")
    .map((_, index) => {
      return (
        <Col className="rowBox" key={index} xs={6} md={6} xl={3}>
          <ContentLoader 
    speed={2}
    width={220}
    height={350}
    viewBox="0 0 220 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
   
  >
    <rect x="33" y="195" rx="6" ry="6" width="120" height="10" /> 
    <rect x="28" y="13" rx="6" ry="6" width="139" height="171" /> 
    <rect x="35" y="212" rx="6" ry="6" width="90" height="10" /> 
    <rect x="37" y="247" rx="6" ry="6" width="50" height="10" /> 
    <rect x="31" y="269" rx="6" ry="6" width="139" height="41" /> 
    <rect x="107" y="310" rx="0" ry="0" width="32" height="0" /> 
    <rect x="95" y="318" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
        </Col>
      );
    });
  return (
    <Container>
      <Row>
        {SkeletonList}
      </Row>
    </Container>
  )
}

export default ProductsSkeleton