import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <button
          className="done-education-btn"
          onClick={this.props.editEducationView}
        >
          EDIT
        </button>
        <h1>EDUCATION</h1>
        <ul className="education-list-container">
          <li className="education-list">
            <div className="left">
              <h2>{this.props.degree}</h2>
              <p>{this.props.university}</p>
            </div>
            <div className="middle"></div>
            <div className="right">
              <p>{this.props.startYear}</p>
              <p>{this.props.endYear}</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Education;
