import React, { Component } from "react";

class EducationForm extends Component {
  render() {
    return (
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
            <input type="text" value="Electrical Engineering" />
          </div>
          <div>
            <label>Year From</label>
            <input type="number" value="2014" />
          </div>
          <div>
            <label>Year To</label>
            <input type="number" value="2022" />
          </div>
          <button>Submit</button>
        </form>
        <button className="add-education-form">Add</button>
      </div>
    );
  }
}

export default EducationForm;
