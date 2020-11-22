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
  const [data, setData] = React.useState([])
  const [processedData, setProcessedData] = React.useState([])
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  React.useEffect(() => {
    let processedData = [];
    
    if(data.length > 0){
      for(let i = 0; i< data.length; i+=1){
        let photos = [];
        let pLinks = [];
        for(let j = 0; j< data[i].length; j++){
          const tweet  = data[i][j].statuses;
          for(let k=0; k<tweet.length; k++){
            const status = tweet[k];
            if("media" in status.entities && status.entities.media.length > 0){
              const stmedia = status.entities.media;
              for(let l = 0; l < stmedia.length; l++){
                const media = stmedia[l];
                if("url" in media && (media.type==="photo" || media.type==="video")){
                    photos.push(media.url);
                    pLinks.push(media.expanded_url);
                    break;
                }
              }
            }
            else if("urls" in status.entities && status.entities.urls.length > 0){
              const urls = status.entities.urls;
              for(let l = 0; l<urls.length; l++){
                const url = urls[l];
                  photos.push(url.url);
                  pLinks.push(url.expanded_url);
                  break;
              }
            }
          }
        }
        processedData.push([[...new Set(photos)], [...new Set(pLinks)]]);
      }
      setProcessedData([...processedData]);
    }
  }, [data]);



  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader setData={setData}/>
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Idea</h2>
                <h5 className="description">
                  The reality lies with the people. We see and feel how climate changes and pollution is affecting our surroundings.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Environment</h4>
                    <p className="description">
                       See how pollution is affecting the planet through pictures and videos tweeted
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Purpose</h4>
                    <p>
                      Make people aware of pollution and give them a chance to bring change
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Everyone</h4>
                    <p>
                      Provide positive feedback to people who have acted on and brought change
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">The Bad</h2>
            <Row md="5">
              {processedData.length > 0 ? processedData[0][1].map((val, idx) => {return (<Col key={idx} md="5">
              <Card className="card-profile card-plain">
                  <iframe frameBorder="0" height="300" src={"https://twitframe.com/show?url=" + val} frame></iframe>
              </Card>
              <a className="btn btn-light " href={val} target="_blank" rel="noopener noreferrer nofollow">Open Tweet</a>
              </Col>)}) : null}
            </Row>
          </Container>
          <Container>
            <h2 className="title">The Good</h2>
            <Row md="5">
              {processedData.length > 0 ? processedData[1][1].map(val => {return (<Col md="5">
              <Card className="card-profile card-plain">
                  <iframe src={"https://twitframe.com/show?url=" + val}></iframe>
              </Card>
              <a className="btn btn-light " href={val} target="_blank" rel="noopener noreferrer nofollow">Open Tweet</a>
              </Col>)}) : null}
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;