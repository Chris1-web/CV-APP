function Education(props) {
  const {
    editMode,
    editEducationView,
    editEducation,
    editChosenEducation,
    educationList,
    deleteEducation,
    editSelectEducation,
    chosenEducationInfo,
    changeCourse,
    changeUniversity,
    changeStartYear,
    changeYearTo,
    createNewEducation,
    createEditEducation,
  } = props;
  return (
    <div>
      <div className="education">
        {editMode && (
          <button className="done-education-btn" onClick={editEducationView}>
            {!editEducation && "EDIT"} {editEducation && "BACK"}
          </button>
        )}
        <h1>EDUCATION</h1>
        <ul className="education-list-container">
          {!editChosenEducation &&
            educationList.map((educationInfo) => {
              return (
                <li className="education-list" key={educationInfo.id}>
                  <div className="left">
                    <h2>{educationInfo.course}</h2>
                    <p>{educationInfo.university}</p>
                    {editEducation && (
                      <div>
                        <button
                          className="delete-education-btn"
                          onClick={deleteEducation.bind(this, educationInfo.id)}
                        >
                          delete
                        </button>
                        <button
                          className="edit-education-btn"
                          onClick={editSelectEducation.bind(
                            this,
                            educationInfo.id
                          )}
                        >
                          edit
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="middle"></div>
                  <div className="right">
                    <p>{educationInfo.yearFrom}</p>
                    <p>{educationInfo.yearTo}</p>
                  </div>
                </li>
              );
            })}
          {editChosenEducation && (
            <form className="education-form" onSubmit={createEditEducation}>
              <div>
                <label>Course of Study</label>
                <input
                  type="text"
                  required
                  value={chosenEducationInfo.course}
                  onChange={changeCourse}
                />
              </div>
              <div>
                <label>Unversity</label>
                <input
                  type="text"
                  required
                  value={chosenEducationInfo.university}
                  onChange={changeUniversity}
                />
              </div>
              <div>
                <label>Year From</label>
                <input
                  type="number"
                  required
                  value={chosenEducationInfo.yearFrom}
                  onChange={changeStartYear}
                />
              </div>
              <div>
                <label>Year To</label>
                <input
                  type="number"
                  required
                  value={chosenEducationInfo.yearTo}
                  onChange={changeYearTo}
                />
              </div>
              <button>Submit</button>
            </form>
          )}
        </ul>
        {!editChosenEducation && editMode && (
          <button className="add-education-btn" onClick={createNewEducation}>
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default Education;
