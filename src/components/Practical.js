import React, { Component } from "react";

class Practical extends Component {
  render() {
    const {
      editMode,
      editExperience,
      experienceList,
      experienceContent,
      changePosition,
      changeYear,
      changeCompany,
      changeDescription,
      submitExperience,
      editExperienceView,
      editCurrentExperience,
      editChosenExperience,
      deleteExperience,
      addNewExperience,
    } = this.props;
    return (
      <div className="experience">
        {editMode && (
          <button className="edit-experience-btn" onClick={editExperienceView}>
            {!editExperience && "EDIT"}
            {editExperience && "BACK"}
          </button>
        )}
        <h1>EXPERIENCE</h1>
        <ul className="experience-list-container">
          {!editChosenExperience &&
            experienceList.map((experience) => {
              return (
                <li className="experience-list" key={experience.id}>
                  <div className="top">
                    <h2>{experience.position}</h2>
                  </div>
                  <div className="middle">
                    {experience.year} | {experience.company}
                  </div>
                  <div className="bottom">
                    <p className="experience-description">
                      {experience.description}
                    </p>
                  </div>
                  {editExperience && (
                    <div>
                      <button
                        className="edit-education-btn"
                        onClick={editCurrentExperience.bind(
                          this,
                          experience.id
                        )}
                      >
                        edit
                      </button>
                      <button
                        className="delete-education-btn"
                        onClick={deleteExperience.bind(this, experience.id)}
                      >
                        delete
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
          {editChosenExperience && (
            <form className="experience-form" onSubmit={submitExperience}>
              <div>
                <label>Position</label>
                <input
                  type="text"
                  required
                  value={experienceContent.position}
                  onChange={changePosition}
                />
              </div>
              <div>
                <label>Year From</label>
                <input
                  type="number"
                  required
                  value={experienceContent.year}
                  onChange={changeYear}
                />
              </div>
              <div>
                <label>Company</label>
                <input
                  type="text"
                  required
                  value={experienceContent.company}
                  onChange={changeCompany}
                />
              </div>
              <div>
                <label>Description</label>
                <textarea
                  required
                  value={experienceContent.description}
                  onChange={changeDescription}
                ></textarea>
              </div>
              <button>Submit</button>
            </form>
          )}
          {!editChosenExperience && editMode && (
            <button className="add-experience-btn" onClick={addNewExperience}>
              Add
            </button>
          )}
        </ul>
      </div>
    );
  }
}

export default Practical;
