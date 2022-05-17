import React, { Component } from "react";

class Personal extends Component {
  render() {
    let personalView;
    if (this.props.editPersonal) {
      personalView = (
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
                  value={this.props.nameValue}
                  onChange={this.props.changeName}
                />
              </div>
              <div>
                <label htmlFor="profession">Profession</label>
                <input
                  name="profession"
                  type="text"
                  value={this.props.professionText}
                  onChange={this.props.changeProfession}
                />
              </div>
            </div>
            <div className="text-area">
              <label>About Me</label>
              <textarea
                name="about"
                value={this.props.aboutText}
                onChange={this.props.changeAbout}
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      );
    } else {
      personalView = (
        <div className="personal">
          <div className="upper-profile">
            <button className="edit-btn" onClick={this.props.editPersonalView}>
              EDIT
            </button>
            <img className="picture" src={this.props.picture} alt="profile" />
            <div className="texts">
              <h1>{this.props.name}</h1>
              <p>{this.props.profession}</p>
            </div>
          </div>
          <div className="lower-profile">
            <h2>PROFILE</h2>
            <p>{this.props.about}</p>
          </div>
        </div>
      );
    }
    return <div>{personalView}</div>;
  }
}

export default Personal;
