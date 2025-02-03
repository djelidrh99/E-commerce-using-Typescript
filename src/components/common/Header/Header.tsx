import { Badge, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderLeftBar from './HeaderLeftBar/HeaderLeftBar';
import Container from 'react-bootstrap/Container';
import style from "./style.module.css"
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/Hooks/hooks';
import { authLogOut } from '@store/Auth/authSlice';
import { useEffect } from 'react';
import { fetchWishlist } from '@store/Wishlist/thunk/getWishlistThunk';

const {HeaderContainer}=style



function Header() {

  const {accessToken,user} = useAppSelector(state=>state.auth)
  const dispatch =useAppDispatch()

  useEffect(()=>{
    if(accessToken) {
      dispatch(fetchWishlist("itemId"))
    }
  },[dispatch,accessToken])
  
 

  return (
    <header>
      <div className={HeaderContainer}>
        <h1><span>Our</span><Badge>Ecom</Badge></h1>
        <HeaderLeftBar/>
        
      </div>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" >
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
            <Nav.Link as={NavLink}  to="categories" >Categories</Nav.Link>
            <Nav.Link as={NavLink}  to="about" >About</Nav.Link>
          </Nav>
          {accessToken ?<NavDropdown
              title={`Welcome,${user?.firstName} ${user?.lastName}`}
              style={{color:"white"}}
            >
              <NavDropdown.Item as={NavLink} to="profile" >Profile</NavDropdown.Item>
              <NavDropdown.Item >
                Orders
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/login?" onClick={()=>{dispatch(authLogOut())}} >
                Log Out
              </NavDropdown.Item>
            </NavDropdown> :
            <Nav className="">
            <Nav.Link as={NavLink}  to="login" >Login</Nav.Link>
            <Nav.Link as={NavLink}  to="register" >Register</Nav.Link>
          </Nav>
            }
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
   
  );
}

export default Header;