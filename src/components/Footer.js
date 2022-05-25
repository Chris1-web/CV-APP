import github from "../images/github.png";

function Footer() {
  return (
    <footer>
      <p className="footer">
        <span>Copyright &copy; 2022 Christianah</span>
        <a
          href="https://github.com/Chris1-web/CV-APP"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github icon" className="contact-github-icon" src={github} />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
