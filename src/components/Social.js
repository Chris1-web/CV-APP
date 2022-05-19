import React, { Component } from "react";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editSocial: false,
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    !this.state.editSocial
      ? this.setState({
          editSocial: true,
        })
      : this.setState({
          editSocial: false,
        });
  }

  render() {
    const {
      editMode,
      internet,
      phone,
      mail,
      socialContent,
      changeWebsite,
      changePhone,
      changeEmail,
      editSocialForm,
    } = this.props;
    const { editSocial } = this.state;
    return (
      <div>
        {editMode && editSocialForm && (
          <button className="edit-social-btn" onClick={this.toggleForm}>
            {!editSocial && "EDIT"}
            {editSocial && "BACK"}
          </button>
        )}
        <div className="social-links-container">
          <ul className="social-links">
            <li>
              <img src={internet} alt="internet" />
              <p>{socialContent.website}</p>
            </li>
            <li>
              <img src={phone} alt="phone" />
              <p>{socialContent.phone}</p>
            </li>
            <li>
              <img src={mail} alt="internet" />
              <p>{socialContent.email}</p>
            </li>
          </ul>
          {editSocial && editSocialForm && (
            <form className="social-form">
              <div>
                <input
                  type="text"
                  required
                  value={socialContent.website}
                  onChange={changeWebsite}
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  value={socialContent.phone}
                  onChange={changePhone}
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  value={socialContent.email}
                  onChange={changeEmail}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default Social;
