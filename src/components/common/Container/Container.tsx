import { Container, Row } from "react-bootstrap"
import Heading from "../Heading/Heading"
import Loading from "../Loading/Loading"
import { Tloading } from "@type/type";

type ContainerProps= {
    headingTitle:string;
    loading:Tloading;
    children:React.ReactNode;
    error:null|string,
    type: "categories" | "products" | "cart"
}

const FullContainer = ({headingTitle,loading,children,error,type}:ContainerProps) => {
  return (
    <Container>
    <Heading title={headingTitle}/>
    <Loading status={loading} error={error}  type={type}>
      <Row >
        
      {children}
      </Row>
    </Loading>
  </Container>
  )
}

export default FullContainer