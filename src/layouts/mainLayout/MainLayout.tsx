import { Container } from "react-bootstrap"
import style from "./style.module.css"
import { Outlet } from "react-router-dom"


import Heaer from "../../components/common/Header/Header"
import Footer from "../../components/common/Footer/Footer"
import { fetchCategories } from "@store/categories/thunk/getCategoriesThunk"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { AppDispatch } from "@store/store"

const {container,wrapper} =style


export default function MainLayout() {
  const dispatch =useDispatch<AppDispatch>()

  useEffect(()=>{
    dispatch(fetchCategories())
  },[])

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
