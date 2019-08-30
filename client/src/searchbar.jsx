import React from "react";
import {Navbar, NavbarBrand, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const search = <FontAwesomeIcon icon={faSearch}/>;

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    };
  }

  render() {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", background: "#d32323"}}>
        <Navbar color="#d32323">
          <NavbarBrand href="/"><img src={"../logos/yelp.png"}/></NavbarBrand>
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2"><b>Find</b></Label>
              <Input type="text" name="query" id="exampleQuery" placeholder="tacos, cheap dinner, Max's" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2"><b>Near</b></Label>
              <Input type="text" name="location" id="exampleLocation" placeholder="Seattle, WA" />
            </FormGroup>
            <Button color="danger">{search}</Button>
          </Form>&nbsp;&nbsp;
          <Button color="danger">Log In</Button>&nbsp;&nbsp;
          <Button color="secondary">Sign Up</Button> 
        </Navbar>
      </div>
    );
  }
}