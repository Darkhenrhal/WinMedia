import React from "react";
import "./../../assets/css/circle.css"

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="circle span-150"/>
              <span className="circle span-50" />
              <span className="circle span-50" />
              <span className="circle span-75" />
              <span className="circle span-100" />
              <span className="circle span-75" />
              <span className="circle span-50" />
              <span className="circle span-100" />
              <span className="circle span-50" />
              <span className="circle span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center w-[1500px]  py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="10">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/argon-react-white.png")}
                      style={{ width: "200px" }}
                    />
                    <h1 className="display-1 text-uppercase text-white text-bold font-large font-weight-bold"></h1>
                    <p className="lead text-white">
                    Helping brands stand out through strategic advertising and PR solutions.
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-cloud-download-95" />
                        </span>
                        <span className="btn-inner--text">Download React</span>
                      </Button>{" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="https://github.com/creativetimofficial/argon-design-system-react"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-github" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Star us</span>
                          on Github
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
