import React, { Component } from "react";
import uniqid from "uniqid";
import Personal from "./components/Personal.js";
import Education from "./components/Education.js";
import Practical from "./components/Practical.js";
import Social from "./components/Social.js";
import face from "./images/face.jpg";
import website from "./images/wifi.png";
import mail from "./images/mail.png";
import phone from "./images/phone.png";
import "./App.css";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPersonal: false,
      editEducation: false,
      editChosenEducation: false,
      newEducationSubmit: false,
      editExperience: false,
      editChosenExperience: false,
      newExperienceSubmit: false,
      editMode: false,
      personalInfo: {
        name: "daniel joel wilson",
        profession: "Web Developer",
        about: LOREM,
        profileImage: face,
      },
      educationContent: {
        id: "",
        course: "",
        university: "",
        yearFrom: "",
        yearTo: "",
      },
      experienceContent: {
        id: "",
        position: "",
        year: "",
        company: "",
        description: "",
      },

      socialContent: {
        website: "mywebsite.com",
        phone: "123-456-789",
        email: "mymail@gmail.com",
      },

      educationArray: [
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
      ],

      experienceArray: [
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
      ],
    };
    this.editPersonalView = this.editPersonalView.bind(this);
    this.editEducationView = this.editEducationView.bind(this);
    this.educationDisplayView = this.educationDisplayView.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeProfession = this.changeProfession.bind(this);
    this.changeAbout = this.changeAbout.bind(this);
    this.editSelectEducation = this.editSelectEducation.bind(this);
    this.changeCourse = this.changeCourse.bind(this);
    this.changeUniversity = this.changeUniversity.bind(this);
    this.changeStartYear = this.changeStartYear.bind(this);
    this.changeYearTo = this.changeYearTo.bind(this);
    this.homeView = this.homeView.bind(this);
    this.createEditEducation = this.createEditEducation.bind(this);
    this.createNewEducation = this.createNewEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.showEditButtons = this.showEditButtons.bind(this);
    this.editCurrentExperience = this.editCurrentExperience.bind(this);
    this.changePosition = this.changePosition.bind(this);
    this.changeCompany = this.changeCompany.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.submitExperience = this.submitExperience.bind(this);
    this.editExperienceView = this.editExperienceView.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.addNewExperience = this.addNewExperience.bind(this);
    this.changeWebsite = this.changeWebsite.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  editPersonalView() {
    this.setState({
      editPersonal: true,
    });
  }

  homeView(e) {
    e.preventDefault();
    this.setState({
      editPersonal: false,
    });
  }

  editEducationView() {
    this.state.editEducation
      ? this.setState({
          editEducation: false,
          editChosenEducation: false,
        })
      : this.setState({
          editEducation: true,
        });
  }

  educationDisplayView() {
    this.setState({
      editEducation: false,
    });
  }

  changeName(e) {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        name: e.target.value,
      },
    });
  }

  changeProfession(e) {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        profession: e.target.value,
      },
    });
  }

  changeAbout(e) {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        about: e.target.value,
      },
    });
  }

  editSelectEducation(id) {
    this.setState({
      editChosenEducation: true,
      educationContent: this.state.educationArray.filter(
        (el) => el.id === id
      )[0],
    });
  }

  changeCourse(e) {
    this.setState({
      educationContent: {
        ...this.state.educationContent,
        course: e.target.value,
      },
    });
  }

  changeUniversity(e) {
    this.setState({
      educationContent: {
        ...this.state.educationContent,
        university: e.target.value,
      },
    });
  }

  changeStartYear(e) {
    this.setState({
      educationContent: {
        ...this.state.educationContent,
        yearFrom: e.target.value,
      },
    });
  }

  changeYearTo(e) {
    this.setState({
      educationContent: {
        ...this.state.educationContent,
        yearTo: e.target.value,
      },
    });
  }

  createEditEducation(e) {
    e.preventDefault();
    !this.state.newEducationSubmit
      ? this.setState({
          educationArray: this.state.educationArray.map((el) => {
            if (el.id === this.state.educationContent.id) {
              return { ...this.state.educationContent };
            }
            return el;
          }),
          editEducation: false,
          editChosenEducation: false,
        })
      : this.setState({
          educationArray: [
            ...this.state.educationArray,
            this.state.educationContent,
          ],
          newEducationSubmit: false,
          editEducation: false,
          editChosenEducation: false,
        });
  }

  createNewEducation() {
    this.setState({
      editChosenEducation: true,
      editEducation: true,
      newEducationSubmit: true,
      educationContent: {
        id: uniqid(),
        course: "",
        university: "",
        yearFrom: "",
        yearTo: "",
      },
    });
  }

  deleteEducation(id) {
    this.setState({
      educationArray: this.state.educationArray.filter((el) => el.id !== id),
    });
  }

  showEditButtons() {
    !this.state.editMode
      ? this.setState({
          editMode: true,
        })
      : this.setState({
          editMode: false,
        });
  }

  editCurrentExperience(id) {
    this.setState({
      editChosenExperience: true,
      experienceContent: this.state.experienceArray.filter(
        (el) => el.id === id
      )[0],
    });
  }

  changePosition(e) {
    this.setState({
      experienceContent: {
        ...this.state.experienceContent,
        position: e.target.value,
      },
    });
  }

  changeYear(e) {
    this.setState({
      experienceContent: {
        ...this.state.experienceContent,
        year: e.target.value,
      },
    });
  }

  changeDescription(e) {
    this.setState({
      experienceContent: {
        ...this.state.experienceContent,
        description: e.target.value,
      },
    });
  }

  changeCompany(e) {
    this.setState({
      experienceContent: {
        ...this.state.experienceContent,
        company: e.target.value,
      },
    });
  }

  submitExperience(e) {
    e.preventDefault();
    !this.state.newExperienceSubmit
      ? this.setState({
          experienceArray: this.state.experienceArray.map((el) => {
            if (el.id === this.state.experienceContent.id) {
              return { ...this.state.experienceContent };
            }
            return el;
          }),
          editExperience: false,
          editChosenExperience: false,
        })
      : this.setState({
          experienceArray: [
            ...this.state.experienceArray,
            this.state.experienceContent,
          ],
          newExperienceSubmit: false,
          editExperience: false,
          editChosenExperience: false,
        });
  }

  editExperienceView() {
    this.state.editExperience
      ? this.setState({
          editExperience: false,
          editChosenExperience: false,
          experienceContent: {
            id: "",
            position: "",
            year: "",
            company: "",
            description: "",
          },
        })
      : this.setState({
          editExperience: true,
        });
  }

  deleteExperience(id) {
    this.setState({
      experienceArray: this.state.experienceArray.filter((el) => el.id !== id),
    });
  }

  addNewExperience() {
    this.setState({
      editChosenExperience: true,
      editExperience: true,
      newExperienceSubmit: true,
      experienceContent: {
        id: uniqid(),
        position: "",
        year: "",
        company: "",
        description: "",
      },
    });
  }

  changeWebsite(e) {
    this.setState({
      socialContent: {
        ...this.state.socialContent,
        website: e.target.value,
      },
    });
  }

  changePhone(e) {
    this.setState({
      socialContent: {
        ...this.state.socialContent,
        phone: e.target.value,
      },
    });
  }

  changeEmail(e) {
    this.setState({
      socialContent: {
        ...this.state.socialContent,
        email: e.target.value,
      },
    });
  }

  onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      this.setState({
        personalInfo: {
          ...this.state.personalInfo,
          profileImage: URL.createObjectURL(img),
        },
      });
    }
  };

  render() {
    const {
      editPersonal,
      editEducation,
      personalInfo,
      educationArray,
      editChosenEducation,
      educationContent,
      editMode,
      experienceArray,
      editExperience,
      experienceContent,
      editChosenExperience,
      socialContent,
    } = this.state;
    return (
      <div className="container">
        <button className="view-mode" onClick={this.showEditButtons}>
          {!editMode && "EDIT MODE"}
          {editMode && "VIEW MODE"}
        </button>
        <Personal
          editPersonal={editPersonal}
          picture={personalInfo.profileImage}
          name={personalInfo.name.toUpperCase()}
          profession={personalInfo.profession}
          about={personalInfo.about}
          editPersonalView={this.editPersonalView}
          nameValue={personalInfo.name}
          professionText={personalInfo.profession}
          aboutText={personalInfo.about}
          changeName={this.changeName}
          changeProfession={this.changeProfession}
          changeAbout={this.changeAbout}
          homeView={this.homeView}
          editMode={editMode}
          onImageChange={this.onImageChange}
        />
        <div className="lower-section">
          <Education
            editEducation={editEducation}
            editEducationView={this.editEducationView}
            educationDisplayView={this.educationDisplayView}
            educationList={educationArray}
            editChosenEducation={editChosenEducation}
            editSelectEducation={this.editSelectEducation}
            chosenEducationInfo={educationContent}
            changeCourse={this.changeCourse}
            changeUniversity={this.changeUniversity}
            changeStartYear={this.changeStartYear}
            changeYearTo={this.changeYearTo}
            createEditEducation={this.createEditEducation}
            deleteEducation={this.deleteEducation}
            createNewEducation={this.createNewEducation}
            editMode={editMode}
          />
          <div className="demarcation"></div>
          <Practical
            editEducation={editEducation}
            editMode={editMode}
            experienceList={experienceArray}
            editExperience={editExperience}
            experienceContent={experienceContent}
            editCurrentExperience={this.editCurrentExperience}
            changePosition={this.changePosition}
            changeYear={this.changeYear}
            changeDescription={this.changeDescription}
            changeCompany={this.changeCompany}
            submitExperience={this.submitExperience}
            editExperienceView={this.editExperienceView}
            editChosenExperience={editChosenExperience}
            deleteExperience={this.deleteExperience}
            addNewExperience={this.addNewExperience}
          />
        </div>
        <Social
          internet={website}
          mail={mail}
          phone={phone}
          editMode={editMode}
          socialContent={socialContent}
          changeWebsite={this.changeWebsite}
          changePhone={this.changePhone}
          changeEmail={this.changeEmail}
        />
      </div>
    );
  }
}

export default App;
