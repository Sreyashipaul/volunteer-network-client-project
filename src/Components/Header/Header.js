
import React from 'react';
import { Form, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar  variant="dark">
     <Navbar.Brand href="#home">
    <img
            src="https://i.ibb.co/zR4wpY3/Group-1329.png"
            width="150"
            className="d-inline-block align-top"
            alt="travel-guru logo"
          />
    </Navbar.Brand>
    <Nav className="mr-auto mr-5">
      <Nav.Link className="mx-3 text-dark" href="#home">Home</Nav.Link>
      <Nav.Link className="mx-3 text-dark" href="#features">Donation</Nav.Link>
      <Nav.Link className="mx-3 text-dark" href="#pricing">Events</Nav.Link>
      <Nav.Link className="mx-3 text-dark" href="#pricing">Blog</Nav.Link>
      

    </Nav>
    <Form inline className="mr-3">
   
      <Button className="btn btn-lg" variant="primary">Register</Button>
      </Form>
     
      <Nav.Link eventKey={2} href="#memes">
              <Link to="/adminPannel">
                <Button className="btn btn-lg" variant="dark">
                  Admin
                </Button>
              </Link>
      </Nav.Link>
  </Navbar>
        </div>
    );
};

export default Header;