function Personal(props) {
  const {
    editMode,
    editPersonal,
    editPersonalView,
    picture,
    name,
    profession,
    about,
    homeView,
    nameValue,
    changeName,
    professionText,
    changeProfession,
    aboutText,
    changeAbout,
    onImageChange,
  } = props;
  return (
    <div>
      {editPersonal && (
        <div className="personal">
          <form className="personal-form">
            <legend className="personal-heading">
              <span>Personal Information</span>
              <button className="done-btn" onClick={homeView}>
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
                  value={nameValue}
                  onChange={changeName}
                />
              </div>
              <div>
                <label htmlFor="profession">Profession</label>
                <input
                  name="profession"
                  required
                  type="text"
                  value={professionText}
                  onChange={changeProfession}
                />
              </div>
            </div>
            <div className="text-area">
              <label>About Me</label>
              <textarea
                name="about"
                required
                value={aboutText}
                onChange={changeAbout}
              ></textarea>
            </div>
            <div className="image-upload-box">
              <label>Image</label>
              <input type="file" onChange={onImageChange} />
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

export default Personal;
