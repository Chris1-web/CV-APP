import React, { Component } from "react";

class PersonalForm extends Component {
  render() {
    return (
      <div className="personal">
        <form className="personal-form">
          <legend className="personal-heading">
            <span>Personal Information</span>
            <button className="done-btn" onClick={this.props.homeView}>
              DONE
            </button>
          </legend>
          <div className="name-and-profession-form">
            <div>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                value={this.props.value}
                onChange={this.props.changeName}
              />
            </div>
            <div>
              <label htmlFor="profession">Profession</label>
              <input
                name="profession"
                type="text"
                value={this.props.professionText}
              />
            </div>
          </div>
          <div className="text-area">
            <label>About Me</label>
            <textarea name="about" value={this.props.aboutText}></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default PersonalForm;
