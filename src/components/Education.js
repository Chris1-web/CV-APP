import React, { Component } from "react";

class Education extends Component {
  render() {
    let educationView;
    if (this.props.editEducation) {
      educationView = (
        <div className="education">
          <button
            className="done-education-btn"
            onClick={this.props.educationDisplayView}
          >
            DONE
          </button>
          <form className="education-form">
            <legend>
              <h1>EDUCATION</h1>
            </legend>
            <div>
              <label>Course of Study</label>
              <input
                type="text"
                value={this.props.courseValue}
                onChange={this.props.changeCourse}
              />
            </div>
            <div>
              <label>Unversity</label>
              <input
                type="text"
                value={this.props.universityValue}
                onChange={this.props.changeUniversity}
              />
            </div>
            <div>
              <label>Year From</label>
              <input
                type="number"
                value={this.props.beginYear}
                onChange={this.props.changeStartYear}
              />
            </div>
            <div>
              <label>Year To</label>
              <input
                type="number"
                value={this.props.finalYear}
                onChange={this.props.changeEndYear}
              />
            </div>
            <button>Submit</button>
          </form>
          <button className="add-education-form">Add</button>
        </div>
      );
    } else {
      educationView = (
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
    return <div>{educationView}</div>;
  }
}

export default Education;
