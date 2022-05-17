import React, { Component } from "react";
import Personal from "./components/Personal.js";
import Education from "./components/Education.js";
import Practical from "./components/Practical/Practical.js";
import Social from "./components/social/Social.js";
import face from "./images/face.jpg";
import website from "./images/website.png";
import "./App.css";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPersonal: false,
      editEducation: false,
      personalInfo: {
        name: "daniel joel wilson",
        profession: "Web Developer",
        about: LOREM,
      },
      educationContent: {
        course: "",
        university: "",
        yearFrom: 2014,
        yearTo: 2018,
      },
      educationArray: [],
    };
    this.editPersonalView = this.editPersonalView.bind(this);
    this.editEducationView = this.editEducationView.bind(this);
    this.educationDisplayView = this.educationDisplayView.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeProfession = this.changeProfession.bind(this);
    this.changeAbout = this.changeAbout.bind(this);
    this.homeView = this.homeView.bind(this);
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
    this.setState({
      editEducation: true,
    });
  }

  educationDisplayView() {
    this.setState({
      editEducation: false,
    });
  }

  changeName(e) {
    console.log();
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

  render() {
    const { editPersonal, editEducation, personalInfo } = this.state;
    let experienceView, socialView;
    experienceView = (
      <div>
        <Practical
          job="Frontend Web Developer"
          year="2022"
          company="Google.com"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
    );
    socialView = (
      <div>
        <Social internet={website} />
      </div>
    );

    return (
      <div className="container">
        <Personal
          editPersonal={editPersonal}
          picture={face}
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
        />
        <div className="lower-section">
          <Education
            editEducation={editEducation}
            degree="Electrical Engineering"
            university="Boston University"
            startYear="2014"
            endYear="2022"
            editEducationView={this.editEducationView}
            educationDisplayView={this.educationDisplayView}
            courseValue="Electrical Engineering"
            universityValue="Boston University"
            beginYear={2015}
            finalYear={2019}
          />
          <div className="demarcation"></div>
          {/* {experienceView} */}
        </div>
        {/* {socialView} */}
      </div>
    );
  }
}

export default App;
