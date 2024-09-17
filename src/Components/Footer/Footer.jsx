import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import style from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={style.Background}>
        <footer className="mx-5">
          <div>
            <Row>
              <Col lg={3}>
                <h4 className="fw-bold">Nexus </h4>
                <h5 className="">About Us</h5>
                <h5>Our Services</h5>
                <h5>Events</h5>
                <h5>FAQ</h5>
                <h5>Contact Us</h5>
              </Col>
              <Col lg={3}>
                <h4 className="fw-bold">How Do I</h4>
                <h5>Sign Up</h5>
                <h5>Add a Listing</h5>
                <h5>Claim Listing</h5>
                <h5>Post a Query</h5>
                <h5>Add a Blog Post</h5>
                <h5>Other Queries</h5>
              </Col>
              <Col lg={3}>
                <h4 className="fw-bold">Quick Links</h4>
                <h5>Listing</h5>
                <h5>Blog Posts</h5>
                <h5>Shop / Store</h5>
                <h5>Community</h5>
              </Col>
              <Col lg={3}>
                <h4 className="fw-bold">Social media</h4>
                <div className="d-flex gap-4 pt-2">
                  <div className="logos p-2 rounded-5">
                    <FaFacebookF size={25} className="logo" />
                  </div>
                  <div className="logos p-2 rounded-5">
                    <FaLinkedinIn size={25} className="logo" />
                  </div>
                  <div className="logos p-2 rounded-5">
                    <FaEnvelope size={25} className="logo" />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col className=" p-2 ">
                <p className="text-center text-white ">© Nexus - Copy Right</p>
              </Col>
            </Row>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
