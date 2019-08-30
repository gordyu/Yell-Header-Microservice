import React from "react";
import Map from "./map.jsx";
import { Button, Container, Row, Col, Card, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCamera, faShareSquare, faBookmark, faChartBar, faCheckCircle,
  faMapMarkerAlt, faPencilAlt, faDirections, faPhone, faExternalLinkAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
const checkmark = <FontAwesomeIcon icon={faCheckCircle} style={{color:"#0073bb"}}/>;
const star = <FontAwesomeIcon icon={faStar}/>;
const camera = <FontAwesomeIcon icon={faCamera}/>;
const share = <FontAwesomeIcon icon={faShareSquare}/>;
const bookmark = <FontAwesomeIcon icon={faBookmark}/>;
const barChart = <FontAwesomeIcon icon={faChartBar}/>;
const pin = <FontAwesomeIcon icon={faMapMarkerAlt}/>;
const pencil = <FontAwesomeIcon icon={faPencilAlt}/>;
const directions = <FontAwesomeIcon icon={faDirections}/>;
const phone = <FontAwesomeIcon icon={faPhone}/>;
const open = <FontAwesomeIcon icon={faExternalLinkAlt}/>;
const smartphone = <FontAwesomeIcon icon={faMobileAlt}/>;

export default class ItemTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   };
  }

  render() {
    return (
      <div className="item_title" style={{background: "#f5f5f5"}}>
        <br />
        <div className="stars_and_buttons">
          <Container>
            <Row>
              <Col>
                <Row style={{display: "flex", justifyContent: "left", alignItems: "baseline"}}>
                  <h1><b>HackReactor</b></h1>&nbsp;{checkmark}&nbsp;Claimed
                </Row>
                <Row style={{display: "flex", justifyContent: "left", alignItems: "baseline"}}>
                  <img src={"../starimgs/five.png"} />&nbsp;193 reviews&nbsp;&nbsp;
                  <Button outline color="secondary" size="sm" style={{padding:"3px", lineHeight:"5px"}}>{barChart} Details</Button>
                </Row>
                <Row style={{display: "flex", justifyContent: "left", alignItems: "baseline"}}>
                  <Button color="link" style={{color: "#0073bb"}}>Vocational & Technical School</Button>
                  <Button outline color="secondary" size="sm" style={{padding:"6px", lineHeight:"5px"}}>Edit</Button>
                </Row>
              </Col>
              <Col style={{display: "flex", justifyContent: "right", alignItems: "flex-end"}}>

                <Button color="danger">{star} Write a Review</Button>&nbsp;&nbsp;&nbsp;&nbsp;

                <Button outline color="secondary" size="sm">{camera} Add Photo</Button>
                <Button outline color="secondary" size="sm">{share} Share</Button>
                <Button outline color="secondary" size="sm">{bookmark} Save</Button>

              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <div className="category">

        </div>
        <br />
        <div className="map_and_photos" style={{lineHeight: "1.5em"}}>
          <Container>
            <Row style={{padding: "0", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "14px", lineHeight: "1.6em"}}>
              <Col>
                <Card>
                  {/*<CardImg top width="50%" src="http://placekitten.com/200/200" alt="maps"/>*/}
                  <CardBody>
                    {<div style={{height: '100px', width: '100%'}}>
                      <Map />
                    </div>}
                    {pin} 944 Market St &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>{pencil} Edit</a><br />
                    San Francisco, CA 94102<br />
                    {directions} <a>Get Directions</a><br />
                    {phone} 415-268-0355<br />
                    {open} <a>hackreactor.com</a><br />
                    {smartphone} &nbsp;<a>Send to your Phone</a><br />
                  </CardBody>
                </Card>
              </Col>
              <Col>
              <div style={{display: "flex", justifyContent: "left", alignItems: "left", padding: "0"}}>
                <img src={"../logos/pic1.jpg"} className="thumbnail" height="200" width="200"/>
                <img src={"../logos/pic2.jpg"} className="thumbnail" height="200" width="200"/>
                <img src={"../logos/pic3.jpg"} className="thumbnail" height="200" width="200"/>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}