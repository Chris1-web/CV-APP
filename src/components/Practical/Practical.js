import React, { Component } from "react";

class Practical extends Component {
  render() {
    return (
      <div className="experience">
        <h1>EXPERIENCE</h1>
        <ul className="experience-list-container">
          <li className="experience-list">
            <div className="top">
              <h2>{this.props.job}</h2>
            </div>
            <div className="middle">
              {this.props.year} | {this.props.company}
            </div>
            <div className="bottom">
              <p className="experience-description">{this.props.description}</p>
            </div>
          </li>
        </ul>
        {/* <ul className="experience-list-container">
          <li className="experience-list">
            <div className="top">
              <h2>Frontend Web Developer</h2>
            </div>
            <div className="middle">2015-2022 | Google.com</div>
            <div className="bottom">
              <p className="experience-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex reprehenderit in voluptate velit esse cillum
                dolore eu cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </li>
        </ul> */}
      </div>
    );
  }
}

export default Practical;
