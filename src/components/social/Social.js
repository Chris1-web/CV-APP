import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="social-links-container">
        <ul className="social-links">
          <li>
            <img src={this.props.internet} alt="internet" />
            <p>www.thewebsite.com</p>
          </li>
          <li>
            <img src={this.props.internet} alt="internet" />
            <p>123-456-7890</p>
          </li>
          <li>
            <img src={this.props.internet} alt="internet" />
            <p>cland@gmail.com</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
