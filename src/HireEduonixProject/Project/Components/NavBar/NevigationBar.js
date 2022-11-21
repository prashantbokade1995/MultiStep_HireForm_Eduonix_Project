import './NevigationBar.css'
import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { VscBell } from "react-icons/vsc";
import { CgSearch } from "react-icons/cg";
import LoginModalBox from "../LoginModal/LoginModalBox";
import RegisterModal from "../RegisterModal/RegisterModal";


const NevigationBar = () => {
    return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
        <img src="https://media-exp1.licdn.com/dms/image/C511BAQE1NaQLmyGLlw/company-background_10000/0/1560411660501?e=2147483647&v=beta&t=VPlj9xmyaLwmdgMvEH746x_HkoIVdCU6dC1WLTLUIiM" alt="logo" height='30'/><span><b><i>  </i></b></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-0 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <NavDropdown title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Home">Home</NavDropdown.Item>
              <NavDropdown.Item href="/Hire">
                Hire
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/refer">
                Referal
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" id='Search'>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning"><CgSearch /></Button>
          </Form>
          <img src="https://cdn.eduonix.com/assets/images/infiniti_icon/infiniti-new-1-black.png" alt="infiniti" height='auto' className='m-2'/>
          <div><AiOutlineShoppingCart className="m-2" />
          <LoginModalBox/>
          <RegisterModal/>
            <VscBell className="m-2"/>
            <CgProfile  className="m-2"/>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

    )
}

export default NevigationBar
