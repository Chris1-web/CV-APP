import React, { Component } from "react";

class Personal extends Component {
  render() {
    const {
      editMode,
      editPersonal,
      editPersonalView,
      picture,
      name,
      profession,
      about,
    } = this.props;
    return (
      <div>
        {editPersonal && (
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
                    required
                    type="text"
                    value={this.props.nameValue}
                    onChange={this.props.changeName}
                  />
                </div>
                <div>
                  <label htmlFor="profession">Profession</label>
                  <input
                    name="profession"
                    required
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
                  required
                  value={this.props.aboutText}
                  onChange={this.props.changeAbout}
                ></textarea>
              </div>
              <div className="image-upload-box">
                <label>Image</label>
                <input type="file" onChange={this.props.onImageChange} />
              </div>
            </form>
          </div>
        )}
        {!editPersonal && (
          <div className="personal">
            <div className="upper-profile">
              {editMode && (
                <button className="edit-btn" onClick={editPersonalView}>
                  EDIT
                </button>
              )}
              <img className="picture" src={picture} alt="profile" />
              <div className="texts">
                <h1>{name}</h1>
                <p>{profession}</p>
              </div>
            </div>
            <div className="lower-profile">
              <h2>PROFILE</h2>
              <p>{about}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Personal;
