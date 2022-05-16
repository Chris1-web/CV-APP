import React, { Component } from "react";

class Personal extends Component {
  render() {
    return (
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
}

export default Personal;
