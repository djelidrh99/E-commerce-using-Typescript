import { Col, Container, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const CategoriesSkeleton = () => {
  const SkeletonList = Array(4)
    .fill("")
    .map((_, index) => {
      return (
        <Col className="rowBox" key={index} xs={6} md={6} xl={3}>
          <ContentLoader
            speed={2}
            width={220}
            height={230}
            viewBox="0 0 220 230"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <circle cx="100" cy="90" r="88" />
            <rect x="58" y="190" rx="6" ry="6" width="80" height="10" />
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
  );
};

export default CategoriesSkeleton;
