import React, {useState} from "react";
import axios from 'axios';

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader(props) {
  let pageHeader = React.createRef();
  const [location, setLocation] = useState("");

  const handleLocChange = (e) => {
    setLocation(e.target.value)
  }

  const triggerGetData = () => {
    axios.get("http://localhost:5000/getRelatedTweets/bad/" + location).then(res =>{
      axios.get("http://localhost:5000/getRelatedTweets/good/" + location).then(goodResp =>{
        props.setData([res.data, goodResp.data]);
      });
    });
    props.setLoader(true)
    setTimeout(() =>{
      props.setLoader(false);
    }, 5000);
  }

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/daniel-olahh.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Twitter for Climate</h1>
            <h3> Uncover insights into pollution and climate changes in your area and take action</h3>
            <br />
            <input type="text" className="form-control" onChange={e => handleLocChange(e)} placeholder="Search..." />
            <br/>
            <Button className="btn-round" onClick={triggerGetData} color="neutral" type="button" href="" outline>
              Let's go
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
