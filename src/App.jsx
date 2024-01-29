/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import Project from './GitHub';

function App() {
  const navOptions = ['About Me', 'Portfolio', 'Skills', 'Contact'];
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactData, setContactData] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const contactFormChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const contactFormSubmit = async (e) => {
    e.preventDefault();
    const serviceId = 'service_tjsoedn';
    const templateId = 'template_ly5vrzm';
    try {
      console.log('hi');
      console.log('form data', contactData)
      const response = await emailjs.sendForm(serviceId, templateId, '#contact-form', 'DOsrgnZ-5O0QZj-fu')
      if (response.status === 200) {
        alert('Thank you for your message! I will get back to you shortly.');
        document.getElementById('contact-form').reset();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='app-container'>
      <header>
        {/* HAMBUERGER MENU */}
        <div id='menu'>
          <div id='menu-bars' className={menuOpen ? 'change' : ''} onClick={menuClick}>
            <div id='bar-1' className={`menu-bar ${menuOpen ? 'change' : ''}`}></div>
            <div id='bar-2' className={`menu-bar ${menuOpen ? 'change' : ''}`}></div>
            <div id='bar-3' className={`menu-bar ${menuOpen ? 'change' : ''}`}></div>
          </div>
          {/* NAVIGATION */}
          <nav id='nav' className={menuOpen ? 'change' : ''}>
            <ul style={{ display: menuOpen ? 'block' : 'none' }}>
              {navOptions.map((item) => {
                return <li key={item.split(' ').join('-')}><a href={`/${item.split(' ').join('-').toLowerCase()}`}>{item}</a></li>;
              })}
            </ul>
          </nav>
        </div>
        <div className={`menu-bg ${menuOpen ? 'change-bg' : ''}`}></div>
        {/* HEADER TITLE */}
        <div className='self'>
          <h1>Mia Ciasullo</h1>
          <p>Full Stack Developer</p>
        </div>
      </header>
      <main>
        {/* ABOUT ME */}
        <section id='about-me'>
          <h2 className='section-header'>About Me</h2>
          <div className='my-info'>
            <p>I am a former French teacher and linguist turned full-stack developer! As someone who has always been drawn to creative and artistic outlets, I have found programming to be the perfect avenue for my unique perspective and problem-solving skills. My journey into the world of tech began when I discovered my passion for designing and building projects for my students. The more I learned, the more fascinated I became with the endless possibilities of coding. </p>
            <p>From crafting intuitive user interfaces to optimizing backend functionality, I relish the opportunity to build innovative and efficient solutions. Coming from the education world, I bring a collaborative approach to my work, always striving to understand the needs and goals of my clients and team members. Whether I&apos;m building a custom web application or optimizing existing code, I am committed to delivering quality results that exceed expectations.</p>
            <p>Thank you for taking the time to learn more about me and my work. Please feel free to browse my portfolio and contact me if you have any questions or if you&apos;re interested in working together!</p>
          </div>
        </section>
        {/* PORTFOLIO */}
        <section id='portfolio'>
          <h2 className='section-header'>Portfolio</h2>
          <p>Applications I&apos;ve been building on my own time use a wide variety of technologies, all of which are right here! In addition, I freelance for Setzu LLC, which is currently building an Inventory Management System. If you&apos;d like to get a glimpse of my Setzu LLC work, please schedule a 1:1 demo!</p>
          <div id='project-container'>
            <Project projectName='brew-buddies-v2' featured={true}/>
            {/* <Project projectName='socket-chat' featured={true}/> */}
            <Project projectName='hey-boo-boo' featured={true}/>
            <Project projectName='e-commerce-database' featured={false}/>
            <Project projectName='organigramme' featured={false}/>
            <Project projectName='state-park-excursion' featured={false}/>
            <Project projectName='weather-forecast' featured={false}/>
            {/* SAMPLE PROJECT CARD */}
            {/* <div className='project-card'>
              <div className='project-header'>
                <h3 className='section-header project-name'>Project Name</h3>
                <div className='links-container'>
                  <a href='#' className='project-link' target='_blank'>Deployed</a>
                  <a href='#' className='project-code' target='_blank'>GitHub</a>
                </div>
              </div>
              <div className='project-info'>
                <img className='project-img' src='./assets/images/hey-boo-boo.png'/>
                <div className='project-text'>
                  <p>description here</p>
                  <ul>
                    <li className='topic'>tech stack list</li>
                    <li className='topic'>tech stack list</li>
                    <li className='topic'>tech stack list</li>
                    <li className='topic'>tech stack list</li>
                    <li className='topic'>tech stack list</li>
                    <li className='topic'>tech stack list</li>
                    <li className='topic'>tech stack list</li>
                    <li className='topic'>tech stack list</li>
                  </ul>
                  <p>created date</p>
                  <p>updated date</p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        {/* SKILLS AND RESUME */}
        <section id='skills'>
          <h2 className='section-header'>Tools and Tech</h2>
          {/* SKILLS */}
          <ul id='skills-list'>
            <li><i className="fa-solid fa-code fa-2xl" style={{ color: "#e4728b" }} aria-hidden="true"></i><span className='skillset section-header'>Coding Languages</span>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Markdown</li>
              </ul>
            </li>
            <li><i className="fa-solid fa-box-open fa-2xl" style={{ color: "#e4728b" }} aria-hidden="true"></i><span className='skillset section-header'>Tools & Packages</span>
              <ul>
                <li>Jest</li>
                <li>Node.js, Express.js</li>
                <li>React, Handlebars.js</li>
                <li>Bootstrap, Materialize. Ant Design UI</li>
                <li>Third party and server-side RESTful APIs</li>
                <li>Git, GitHub, GitLab, gh-pages, Heroku</li>
                <li>Insomnia, MongoDB Compass, VS Code</li>
              </ul>
            </li>
            <li><i className="fa-solid fa-database fa-2xl" style={{ color: "#e4728b" }} aria-hidden="true"></i><span className='skillset section-header'>Databases</span>
              <ul>
                <li>SQL: MySQL, Sequelize.js</li>
                <li>NoSQL: MongoDB, Mongoose</li>
              </ul>
            </li>
            <li><i className="fa-solid fa-terminal fa-2xl" style={{ color: "#e4728b" }} aria-hidden="true"></i><span className='skillset section-header'>Coding Skills</span>
              <ul>
                <li>MERN full stack</li>
                <li>MVC framework</li>
                <li>Agile methodologies</li>
                <li>Pair programming</li>
              </ul>
            </li>
          </ul>
          {/* RESUME */}
          <h2 className='section-header'>Resume</h2>
          <div>
            <p>I invite you to learn more about my experience and skills!</p>
            <p id='download-resume'>
              <a href="https://docs.google.com/document/export?format=txt&id=1gwYNMpDvR7mwU4Usuqo5Eq1bl4gdmNCJHpY-1So33Vw">
              Download my resume!
              </a>
            </p>
          </div>
          {windowWidth <= 768 ? (
            <p id='open-resume'>
              <a href='https://docs.google.com/document/d/1gwYNMpDvR7mwU4Usuqo5Eq1bl4gdmNCJHpY-1So33Vw/view' target='_blank'>View my resume!</a>
            </p>
          ) : (
          <div id='iframe-container'>
            <iframe 
              className='resume-embed'
              src="https://docs.google.com/document/d/e/2PACX-1vRZKTDkEFMaIs47oLeMRDUVZU1jaWY_oTowjqWj4hVip4r2nn3UkI5z8vUAX6Ow6EUTMyHfDNz7U8yB/pub?embedded=true" 
              width='850' 
              height='500' 
              title='Mia Ciasullo resume'>Loading Resume…
            </iframe>
          </div>
          )}
        </section>
        {/* CONTACT ME */}
        <section id='contact'>
          <h2 className='section-header'>Contact</h2>
          <div className='contact-container'>
            <form id='contact-form' role='form'
              onSubmit={contactFormSubmit} 
              onChange={contactFormChange}
            >
              <input 
                id='contact-name'
                className='user-input'
                name='name'
                defaultValue=''
                required={true}
                placeholder='NAME'
              />
              <input
                id='contact-email'
                className='user-input'
                name='email'
                defaultValue=''
                required={true}
                placeholder='EMAIL'
              />
              <textarea
                id='contact-msg'
                className='user-input'
                name='message'
                defaultValue=''
                required={true}
                placeholder='MESSAGE'
              />
              <button type='submit'>Send</button>
            </form>
            <div id='direct-contact'>
              <ul id='contact-list'>
                <li>
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                  <span className='contact-text location'>United States</span>
                </li>
                <li>
                  <i className="fa-solid fa-phone-flip" aria-hidden="true"></i>
                  <span className='contact-text phone'><a href='tel:1-215-779-8590' title='call me'>{`(215) 779-8590`}</a></span>
                </li>
                <li>
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  <span className='contact-text email'><a href='mailto:miaciasullo@gmail.com' title='email me'>miaciasullo@gmail.com</a></span>
                </li>
              </ul>
              <hr/>
              <ul id='social-media'>
                <li id='github'>
                  <a href='https://www.github.com/miacias' target='_blank' rel='noreferrer'>
                    <i className="fa-brands fa-github fa-2xl" aria-hidden="true"></i>
                  </a>
                </li>
                <li id='linkedin'>
                  <a href='https://www.linkedin.com/in/miaciasullo/' target='_blank' rel='noreferrer'>
                    <i className="fa-brands fa-linkedin fa-2xl" aria-hidden="true"></i>
                  </a>
                </li>
                {/* <li id='leetcode'><a href='#' target='_blank'>LeetCode icon here</a></li> */}
              </ul>
              <hr/>
              <p>Thank You!</p>
            </div>
          </div>
        </section>
      </main>
      {/* <EmbeddedDocs/> */}
    </div>)}
    

export default App
