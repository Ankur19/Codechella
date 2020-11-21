import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">What's Tweetours?</h2>
                <h5 className="description">
                  Ever wondered about the most "tweeted" locations on the planet?
                  Uncover the global Twitter heartbeat here. See what people are tweeting about.
                  Pack your bags! It's either a daring adventure or nothing at all.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Environment</h4>
                    <p className="description">
                       See how pollution is affecting the planet
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Purpose</h4>
                    <p>
                      Find amazing tourist destinations on the planet!
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      See the destination data 
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Everyone</h4>
                    <p>
                      Let's make the planet safe for everyone
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Top Tweetour destinations</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Place 1</CardTitle>
                        <h6 className="card-category">some tag?</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula felis, tempor vitae cursus tempor, finibus non arcu. Nunc eu nibh placerat, euismod dui vitae, placerat elit. Morbi tincidunt elit ante, eget feugiat mauris semper id.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Place 1</CardTitle>
                        <h6 className="card-category">some tag?</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula felis, tempor vitae cursus tempor, finibus non arcu. Nunc eu nibh placerat, euismod dui vitae, placerat elit. Morbi tincidunt elit ante, eget feugiat mauris semper id.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Place 1</CardTitle>
                        <h6 className="card-category">some tag?</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula felis, tempor vitae cursus tempor, finibus non arcu. Nunc eu nibh placerat, euismod dui vitae, placerat elit. Morbi tincidunt elit ante, eget feugiat mauris semper id.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Place 1</CardTitle>
                        <h6 className="card-category">some tag?</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula felis, tempor vitae cursus tempor, finibus non arcu. Nunc eu nibh placerat, euismod dui vitae, placerat elit. Morbi tincidunt elit ante, eget feugiat mauris semper id.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Place 1</CardTitle>
                        <h6 className="card-category">some tag?</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula felis, tempor vitae cursus tempor, finibus non arcu. Nunc eu nibh placerat, euismod dui vitae, placerat elit. Morbi tincidunt elit ante, eget feugiat mauris semper id.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Place 1</CardTitle>
                        <h6 className="card-category">some tag?</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula felis, tempor vitae cursus tempor, finibus non arcu. Nunc eu nibh placerat, euismod dui vitae, placerat elit. Morbi tincidunt elit ante, eget feugiat mauris semper id.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;