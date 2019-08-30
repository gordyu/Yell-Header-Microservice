import React from "react";
import ReactDOM from "react-dom";
import Searchbar from "./searchbar.jsx";
import Dropdowns from "./dropdowns.jsx";
import ItemTitle from "./itemTitle.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  render() {
    return (
      <div className="header">
        <div className="searchbar">
          <Searchbar />
        </div>
        <div className="dropdowns">
          <Dropdowns />
        </div>
        <div className="item_title">
          <ItemTitle />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("header"));