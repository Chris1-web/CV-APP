import React, { Component } from "react";
import github from "../images/github.png";
class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="footer">
          <span>Copyright &copy; 2022 Christianah</span>
          <a
            href="https://github.com/Chris1-web/CV-APP"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="github icon" class="contact-github-icon" src={github} />
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
