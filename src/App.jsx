/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import Project from "./components/GitHub";
import { getCurrentYear } from "./utils/date";
import profilePicture from "./assets/profile-picture.jpg";
import { AlternateUniverses } from "./components/AlternateUniverses";
import { ToolsAndTech } from "./components/ToolsAndTech";

function App() {
  const navOptions = ["About Me", "Portfolio", "Skills", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactData, setContactData] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // ----- resume display/button control -----
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // ----- hamburger menu control -----
  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // ----- contact form controls -----
  const contactFormChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const contactFormSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_tjsoedn";
    const templateId = "template_ly5vrzm";
    try {
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        "#contact-form",
        "DOsrgnZ-5O0QZj-fu"
      );
      if (response.status === 200) {
        alert("Thank you for your message! I will get back to you shortly.");
        document.getElementById("contact-form").reset();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ----- render page -----
  return (
    <div className="app-container">
      <header>
        {/* ----- HAMBURGER MENU ----- */}
        <div id="menu">
          <div
            id="menu-bars"
            className={menuOpen ? "change" : ""}
            onClick={menuClick}
          >
            <div
              id="bar-1"
              className={`menu-bar ${menuOpen ? "change" : ""}`}
            ></div>
            <div
              id="bar-2"
              className={`menu-bar ${menuOpen ? "change" : ""}`}
            ></div>
            <div
              id="bar-3"
              className={`menu-bar ${menuOpen ? "change" : ""}`}
            ></div>
          </div>

          {/* ----- NAVIGATION ----- */}
          <nav id="nav" className={menuOpen ? "change" : ""}>
            <ul style={{ display: menuOpen ? "block" : "none" }}>
              {navOptions.map((item) => {
                return (
                  <li key={item.split(" ").join("-")}>
                    <a href={`#${item.split(" ").join("-").toLowerCase()}`}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className={`menu-bg ${menuOpen ? "change-bg" : ""}`}></div>

        {/* ----- HEADER TITLE ----- */}
        <div className="self">
          <h1>Mia Ciasullo</h1>
          <p>Full Stack Developer</p>
        </div>
      </header>

      <main>
        {/* ----- ABOUT ME ----- */}
        <section id="about-me">
          <h2 className="section-header">About Me</h2>
          <div className="my-info">
            <p>
              As a full stack software engineer, I build and maintain scalable,
              modern web applications across the full development lifecycle.
              After completing the University of Pennsylvania&apos;s Full Stack
              Web Development program, I&apos;ve worked on enterprise
              modernization projects at Concorde, Inc., developed logistical
              applications for the U.S. Navy&apos;s NAVSUP Business Systems
              Center, and delivered custom technical solutions as a freelance
              developer. My work spans technologies like React, Node.js,
              Express, GraphQL, and WordPress, with deployments across Docker,
              AWS, and Azure. I&apos;m passionate about improving performance,
              accessibility, and user experience, and I thrive in collaborative,
              agile environments focused on delivering reliable, maintainable
              software.
            </p>
            <img
              id="profile-picture"
              src={profilePicture}
              alt="Mia at a Japanese temple posing next to a giant lantern"
            />
          </div>
        </section>

        {/* ----- PORTFOLIO ----- */}
        <section id="portfolio">
          <h2 className="section-header">Portfolio</h2>
          <p>
            Applications I&apos;ve developed showcase a wide range of modern web
            technologies and full stack experience. While not all projects are
            available for review by the public, most recently, I completed a
            large project for Alternate Universes LLC, building a headless
            WordPress application powered by React, Next.js, Apollo GraphQL,
            Faust.js, Mantine UI, and PHP on the WP Engine platform. If
            you&apos;d like to get a glimpse of my Alternate Universes LLC work,
            please schedule a 1:1 demo!
          </p>
          <div id="project-container">
            <AlternateUniverses />
            <Project projectName="lees-cleaners" featured={true} />
            <Project projectName="brew-buddies-v2" featured={false} />
            {/* <Project projectName='socket-chat' featured={true}/> */}
            <Project projectName="hey-boo-boo" featured={false} />
            <Project projectName="e-commerce-database" featured={false} />
            <Project projectName="organigramme" featured={false} />
            <Project projectName="state-park-excursion" featured={false} />
            <Project projectName="weather-forecast" featured={false} />
          </div>
        </section>

        {/* ----- SKILLS AND RESUME ----- */}
        <section id="skills">
          <ToolsAndTech />

          {/* ----- RESUME ----- */}
          <h2 className="section-header">Resume</h2>
          <div>
            <p>I invite you to learn more about my experience and skills!</p>
            <p id="download-resume">
              <a href="https://docs.google.com/document/export?format=txt&id=1gwYNMpDvR7mwU4Usuqo5Eq1bl4gdmNCJHpY-1So33Vw">
                Download my resume!
              </a>
            </p>
          </div>
          {windowWidth <= 768 ? (
            <p id="open-resume">
              <a
                href="https://docs.google.com/document/d/1gwYNMpDvR7mwU4Usuqo5Eq1bl4gdmNCJHpY-1So33Vw/view"
                target="_blank"
              >
                View my resume!
              </a>
            </p>
          ) : (
            <div id="iframe-container">
              <iframe
                className="resume-embed"
                src="https://docs.google.com/document/d/e/2PACX-1vRZKTDkEFMaIs47oLeMRDUVZU1jaWY_oTowjqWj4hVip4r2nn3UkI5z8vUAX6Ow6EUTMyHfDNz7U8yB/pub?embedded=true"
                width="850"
                height="500"
                title="Mia Ciasullo resume"
              >
                Loading Resume…
              </iframe>
            </div>
          )}
        </section>

        {/* ----- CONTACT ME ----- */}
        <section id="contact">
          <h2 className="section-header">Contact</h2>
          <p>
            Thank you for taking the time to learn more about me and my work.
          </p>
          <p>
            Please feel free to contact me if you have any questions or if
            you&apos;re interested in working together!
          </p>
          <div className="contact-container">
            <form
              id="contact-form"
              autoComplete="off"
              onSubmit={contactFormSubmit}
              onChange={contactFormChange}
              aria-live="assertive"
            >
              <input
                id="contact-name"
                className="user-input"
                name="name"
                defaultValue=""
                required={true}
                placeholder="NAME"
              />
              <input
                id="contact-email"
                className="user-input"
                name="email"
                defaultValue=""
                required={true}
                placeholder="EMAIL"
              />
              <textarea
                id="contact-msg"
                className="user-input"
                name="message"
                defaultValue=""
                required={true}
                placeholder="MESSAGE"
              />
              <button type="submit">Send</button>
            </form>

            <div id="direct-contact">
              <ul id="contact-list">
                <li>
                  <i
                    className="fa-solid fa-location-dot"
                    aria-hidden="true"
                  ></i>
                  <span className="contact-text location">United States</span>
                </li>
                <li>
                  <i className="fa-solid fa-phone-flip" aria-hidden="true"></i>
                  <span className="contact-text phone">
                    <a
                      href="tel:1-215-779-8590"
                      title="call me"
                    >{`(215) 779-8590`}</a>
                  </span>
                </li>
                <li>
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  <span className="contact-text email">
                    <a href="mailto:miaciasullo@gmail.com" title="email me">
                      miaciasullo@gmail.com
                    </a>
                  </span>
                </li>
              </ul>

              <hr />

              <ul id="social-media">
                <li id="github">
                  <a
                    href="https://www.github.com/miacias"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa-brands fa-github fa-2xl"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li id="linkedin">
                  <a
                    href="https://www.linkedin.com/in/miaciasullo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa-brands fa-linkedin fa-2xl"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                {/* <li id='leetcode'><a href='#' target='_blank'>LeetCode icon here</a></li> */}
              </ul>

              <hr />

              <p>Thank You!</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* ----- COPYRIGHT ----- */}
      <footer>
        <hr />
        <p>
          Copyright &copy; {getCurrentYear()} Mia Ciasullo | All rights
          reserved.
        </p>
      </footer>
      {/* ----- CUSTOM GOOGLE DOC EMBED ----- */}
      {/* <EmbeddedDocs/> */}
    </div>
  );
}

export default App;
