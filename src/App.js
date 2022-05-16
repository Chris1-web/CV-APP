import React, { Component } from "react";
import Personal from "./components/Personal/Personal.js";
import Education from "./components/Education/Education.js";
import Practical from "./components/Practical/Practical.js";
import Social from "./components/social/Social.js";
import PersonalForm from "./components/Personal/PersonalForm";
import EducationForm from "./components/Education/EducationForm";
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
        name: "Daniel Joel Wilson",
        profession: "Web Developer",
        about: LOREM,
      },
    };
    this.editPersonalView = this.editPersonalView.bind(this);
    this.editEducationView = this.editEducationView.bind(this);
    this.educationDisplayView = this.educationDisplayView.bind(this);
    this.changeName = this.changeName.bind(this);
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
    this.setState({
      personalInfo: {
        name: e.target.value,
      },
    });
    console.log(this.state.personalInfo.name);
  }

  render() {
    const { editPersonal, editEducation, personalInfo } = this.state;
    let personalView, educationView, experienceView, socialView;
    if (editPersonal) {
      personalView = (
        <PersonalForm
          value={personalInfo.name}
          homeView={this.homeView}
          changeName={this.changeName}
          professionText={personalInfo.profession}
          aboutText={personalInfo.about}
        />
      );
    } else {
      personalView = (
        <div>
          <Personal
            picture={face}
            name={personalInfo.name.toUpperCase()}
            profession={personalInfo.profession}
            about={personalInfo.about}
            editPersonalView={this.editPersonalView}
          />
        </div>
      );
    }
    if (editEducation) {
      educationView = (
        <div>
          <EducationForm educationDisplayView={this.educationDisplayView} />
        </div>
      );
    } else {
      educationView = (
        <div>
          <Education
            degree="Electrical Engineer"
            university="Boston University"
            startYear="2014"
            endYear="2022"
            editEducationView={this.editEducationView}
          />
        </div>
      );
    }
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
        {personalView}
        <div className="lower-section">
          {educationView}
          <div className="demarcation"></div>
          {experienceView}
        </div>
        {socialView}
      </div>
    );
  }
}

export default App;
