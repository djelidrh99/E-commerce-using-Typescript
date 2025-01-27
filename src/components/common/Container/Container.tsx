import { Container, Row } from "react-bootstrap"
import Heading from "../Heading/Heading"
import Loading from "../Loading/Loading"
import { Tloading } from "@type/type";

type ContainerProps= {
    headingTitle:string;
    loading:Tloading;
    children:React.ReactNode;
    error:null|string

}

const FullContainer = ({headingTitle,loading,children,error}:ContainerProps) => {
  return (
    <Container>
    <Heading>{headingTitle} </Heading>
    <Loading status={loading} error={error}>
      <Row >
        
      {children}
      </Row>
    </Loading>
  </Container>
  )
}

export default FullContainer