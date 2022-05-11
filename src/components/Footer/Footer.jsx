function Footer(listItems) {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/micheliseneld/"
        target="_blank"
        rel="noreferrer"
      >
        Code, design and photography by Michel Iseneld
      </a>
      {/* SOCIAL LINKS */}
      <section>
        <a href="https://github.com/iseneld" target="_blank" rel="noreferrer">
          <img
            src="./images/icons/github.png"
            alt="Github logo"
            className="tech-icon"
          />
        </a>
        <a
          href="https://www.instagram.com/micheliseneld"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/icons/instagram.png"
            alt="Instagram logo"
            className="tech-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/micheliseneld/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/icons/linkedin.png"
            alt="Linkedin logo"
            className="tech-icon"
          />
        </a>
        <a
          href="https://www.patreon.com/micheliseneld"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/icons/patreon.png"
            alt="Patreon logo"
            className="tech-icon"
          />
        </a>
        <a
          href="https://twitter.com/micheliseneld"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/icons/twitter.png"
            alt="Twitter logo"
            className="tech-icon"
          />
        </a>
        <a
          href="https://www.facebook.com/micheliseneld/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/icons/facebook.png"
            alt="Facebook logo"
            className="tech-icon"
          />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
