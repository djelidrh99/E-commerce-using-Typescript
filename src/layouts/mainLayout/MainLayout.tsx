import { Container } from "react-bootstrap"
import style from "./style.module.css"
import { Outlet } from "react-router-dom"
import Heaer from "../../components/common/Header/Header"
import Footer from "../../components/common/Footer/Footer"


const {container,wrapper} =style


export default function MainLayout() {
  



  return (
    <Container className={container}>
        
            <Heaer/>
            <div className={wrapper}>
              <Outlet>
                
              </Outlet>
            </div>
            <Footer/>

        
        
   
        
    </Container>
  )
}
