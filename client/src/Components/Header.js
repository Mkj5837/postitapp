import { Navbar, Nav, NavItem, NavLink, Container } from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/* <Container fluid className="header"> */}
      <Navbar light expand="md" className="header">
        <div>
          <img src={logo} className="logo" />
        </div>
        <Nav>
          <NavItem>
            <NavLink active href="#">
              <Link to="/">Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#">
              <Link to="/profile">Profile</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#">
              <Link to="/login">Login</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      {/* </Container> */}
    </>
  );
};

export default Header;
