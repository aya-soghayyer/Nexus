import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import nexus from "../../assets/letterNlogo.png";
import colors from "../../utils/Colors";
import { FaBell } from "react-icons/fa";
import style from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";
import "./Navbar.module.css";
import DarkMood from "../DarkMode/Dark";

const Navbarr = () => {
  return (
    <>
      <div className={style.CObackground}>
        <div className="mx-5 ">
          <Navbar expand="lg" className="container-fluid">
            <Container fluid>
              <NavLink  to="/">
                <img
                  src={nexus}
                  className="me-auto my-2 my-lg-0 gap-5"
                  style={{ maxHeight: "80px" }}
                  alt=""
                />
              </NavLink>

              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto d-flex gap-5">
                  
                  <NavLink
                  style={{ textDecoration: 'none' }}
                    className="fs-5 fw-bold"
                    to="/"
                  >
                    Events
                  </NavLink>

                  <NavLink
                  style={{ textDecoration: 'none' }}
                    className="fs-5 fw-bold"
                    
                    to="/About"
                  >
                    About us
                  </NavLink>
                  <span>
                    <DarkMood/>
                     </span>
                  <NavLink className="fs-5" href="#">
                    <FaBell style={{ color: colors.blue }} />
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Navbarr;
