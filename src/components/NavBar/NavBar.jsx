import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { BsFillMapFill } from "react-icons/bs";

function NavBar() {
  return (
    <>
      <Navbar variant="dark" style={{ backgroundColor: "#2596be" }}>
        <Container>
          <BsFillMapFill style={{ color: "white", size: "70px" }} />
          <Navbar.Brand className="nav-link" to="/home">
            TRAVEL ADVISOR
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/fav">
              Favorite
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;
