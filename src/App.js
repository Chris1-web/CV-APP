import React, { useState } from "react";
import uniqid from "uniqid";
import "./App.css";
import Personal from "./components/Personal.js";
import Education from "./components/Education.js";
import face from "./images/face.jpg";
import website from "./images/wifi.png";
import mail from "./images/mail.png";
import phone from "./images/phone.png";
import Practical from "./components/Practical.js";
import Footer from "./components/Footer.js";
import Social from "./components/Social.js";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [editPersonal, setEditPersonal] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editChosenEducation, setEditChosenEducation] = useState(false);
  const [newEducationSubmit, setNewEducationSubmit] = useState(false);
  const [editExperience, setEditExperience] = useState(false);
  const [editChosenExperience, setEditChosenExperience] = useState(false);
  const [newExperienceSubmit, setNewExperienceSubmit] = useState(false);
  const [editSocialForm, setEditSocialForm] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: "daniel joel wilson",
    profession: "Web Developer",
    about: LOREM,
    profileImage: face,
  });
  const [educationArray, setEducationArray] = useState([
    {
      id: uniqid(),
      course: "Electrical Engineering",
      university: "Harvard University",
      yearFrom: 2015,
      yearTo: 2019,
    },
    {
      id: uniqid(),
      course: "Software Engineering",
      university: "Michigan State University",
      yearFrom: 2014,
      yearTo: 2018,
    },
  ]);

  const [experienceArray, setExperienceArray] = useState([
    {
      id: uniqid(),
      position: "Frontend Web Developer",
      year: 2010,
      company: "Google",
      description: LOREM,
    },
    {
      id: uniqid(),
      position: "Backend Web Developer",
      year: 2012,
      company: "Amazon",
      description: LOREM,
    },
  ]);

  const [educationContent, setEducationContent] = useState({
    id: "",
    course: "",
    university: "",
    yearFrom: "",
    yearTo: "",
  });

  const [experienceContent, setExperienceContent] = useState({
    id: "",
    position: "",
    year: "",
    company: "",
    description: "",
  });

  const [socialContent, setSocialContent] = useState({
    website: "mywebsite.com",
    phone: "123-456-789",
    email: "mymail@gmail.com",
  });

  const showEditButtons = () => {
    if (!editMode) {
      setEditMode(true);
      setEditSocialForm(true);
    } else {
      setEditMode(false);
      setEditPersonal(false);
      setEditEducation(false);
      setEditChosenEducation(false);
      setEditExperience(false);
      setEditChosenExperience(false);
      setEditSocialForm(false);
    }
  };

  const homeView = (e) => {
    e.preventDefault();
    setEditPersonal(false);
  };
  const editPersonalView = () => {
    setEditPersonal(true);
  };
  const changeName = (e) => {
    setPersonalInfo({ ...personalInfo, name: e.target.value });
  };
  const changeProfession = (e) => {
    setPersonalInfo({ ...personalInfo, profession: e.target.value });
  };

  const changeAbout = (e) => {
    setPersonalInfo({ ...personalInfo, about: e.target.value });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setPersonalInfo({
        personalInfo,
        profileImage: URL.createObjectURL(img),
      });
    }
  };

  const editEducationView = () => {
    if (editEducation) {
      setEditEducation(false);
      setEditChosenEducation(false);
    } else {
      setEditEducation(true);
    }
  };

  const educationDisplayView = () => {
    setEditEducation(false);
  };

  const editSelectEducation = (id) => {
    setEditChosenEducation(true);
    setEducationContent(educationArray.filter((el) => el.id === id)[0]);
  };

  const changeCourse = (e) => {
    setEducationContent({ ...educationContent, course: e.target.value });
  };

  const changeUniversity = (e) => {
    setEducationContent({ ...educationContent, university: e.target.value });
  };

  const changeStartYear = (e) => {
    setEducationContent({
      ...educationContent,
      yearFrom: e.target.value,
    });
  };

  const changeYearTo = (e) => {
    setEducationContent({
      ...educationContent,
      yearTo: e.target.value,
    });
  };

  const createNewEducation = () => {
    setEditChosenEducation(true);
    setEditEducation(true);
    setNewEducationSubmit(true);
    setEducationContent({
      id: uniqid(),
      course: "",
      university: "",
      yearFrom: "",
      yearTo: "",
    });
  };

  const createEditEducation = (e) => {
    e.preventDefault();
    if (!newEducationSubmit) {
      setEducationArray(
        educationArray.map((el) => {
          if (el.id === educationContent.id) {
            return { ...educationContent };
          }
          return el;
        }),
        setEditEducation(false),
        setEditChosenEducation(false)
      );
    } else {
      setEducationArray([...educationArray, educationContent]);
      setNewEducationSubmit(false);
      setEditEducation(false);
      setEditChosenEducation(false);
    }
  };

  const deleteEducation = (id) => {
    setEducationArray(educationArray.filter((el) => el.id !== id));
  };

  const editCurrentExperience = (id) => {
    setEditChosenExperience(true);
    setExperienceContent(experienceArray.filter((el) => el.id === id)[0]);
  };

  const changePosition = (e) => {
    setExperienceContent({ ...experienceContent, position: e.target.value });
  };

  const changeYear = (e) => {
    setExperienceContent({
      ...experienceContent,
      year: e.target.value,
    });
  };

  const changeDescription = (e) => {
    setExperienceContent({
      ...experienceContent,
      description: e.target.value,
    });
  };

  const changeCompany = (e) => {
    setExperienceContent({
      ...experienceContent,
      company: e.target.value,
    });
  };

  const submitExperience = (e) => {
    e.preventDefault();
    if (!newExperienceSubmit) {
      setExperienceArray(
        experienceArray.map((el) => {
          if (el.id === experienceContent.id) {
            return { ...experienceContent };
          }
          return el;
        }),
        setEditExperience(false),
        setEditChosenExperience(false)
      );
    } else {
      setExperienceArray([...experienceArray, experienceContent]);
      setNewExperienceSubmit(false);
      setEditExperience(false);
      setEditChosenExperience(false);
    }
  };

  const editExperienceView = () => {
    if (editExperience) {
      setEditExperience(false);
      setEditChosenExperience(false);
      setExperienceContent({
        id: "",
        position: "",
        year: "",
        company: "",
        description: "",
      });
    } else {
      setEditExperience(true);
    }
  };

  const deleteExperience = (id) => {
    setExperienceArray(experienceArray.filter((el) => el.id !== id));
  };

  const addNewExperience = () => {
    setEditChosenExperience(true);
    setEditExperience(true);
    setNewExperienceSubmit(true);
    setExperienceContent({
      id: uniqid(),
      position: "",
      year: "",
      company: "",
      description: "",
    });
  };

  const changeWebsite = (e) => {
    setSocialContent({
      ...socialContent,
      website: e.target.value,
    });
  };

  const changePhone = (e) => {
    setSocialContent({
      ...this.state.socialContent,
      phone: e.target.value,
    });
  };

  const changeEmail = (e) => {
    setSocialContent({
      ...socialContent,
      email: e.target.value,
    });
  };

  return (
    <div className="container">
      <button className="view-mode" onClick={showEditButtons}>
        {!editMode && "EDIT MODE"}
        {editMode && "VIEW MODE"}
      </button>
      <Personal
        picture={personalInfo.profileImage}
        name={personalInfo.name.toUpperCase()}
        profession={personalInfo.profession}
        about={personalInfo.about}
        nameValue={personalInfo.name}
        professionText={personalInfo.profession}
        aboutText={personalInfo.about}
        editMode={editMode}
        editPersonal={editPersonal}
        homeView={homeView}
        editPersonalView={editPersonalView}
        changeName={changeName}
        changeProfession={changeProfession}
        changeAbout={changeAbout}
        onImageChange={onImageChange}
      />
      <div className="lower-section">
        <Education
          editMode={editMode}
          educationList={educationArray}
          editEducation={editEducation}
          editChosenEducation={editChosenEducation}
          chosenEducationInfo={educationContent}
          editEducationView={editEducationView}
          deleteEducation={deleteEducation}
          educationDisplayView={educationDisplayView}
          editSelectEducation={editSelectEducation}
          changeCourse={changeCourse}
          changeUniversity={changeUniversity}
          changeStartYear={changeStartYear}
          changeYearTo={changeYearTo}
          createNewEducation={createNewEducation}
          createEditEducation={createEditEducation}
        />
        <div className="demarcation"></div>
        <Practical
          editEducation={editEducation}
          editMode={editMode}
          experienceList={experienceArray}
          editExperience={editExperience}
          experienceContent={experienceContent}
          editCurrentExperience={editCurrentExperience}
          changePosition={changePosition}
          changeYear={changeYear}
          changeDescription={changeDescription}
          changeCompany={changeCompany}
          submitExperience={submitExperience}
          editExperienceView={editExperienceView}
          editChosenExperience={editChosenExperience}
          deleteExperience={deleteExperience}
          addNewExperience={addNewExperience}
        />
      </div>
      <Social
        internet={website}
        mail={mail}
        phone={phone}
        editMode={editMode}
        socialContent={socialContent}
        changeWebsite={changeWebsite}
        changePhone={changePhone}
        changeEmail={changeEmail}
        editSocialForm={editSocialForm}
      />
      <Footer />
    </div>
  );
}

export default App;
