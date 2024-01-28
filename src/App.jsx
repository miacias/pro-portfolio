// import { useEffect, useState } from 'react';
import { useState } from 'react';
import './App.css';
import EmbeddedDocs from './EmbeddedDocs';

function App() {
  const navOptions = ['About Me', 'Portfolio', 'Skills', 'Contact'];
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactData, setContactData] = useState({});

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const contactFormChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const contactFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('hi');
      console.log('form data', contactData)
      // const response = await emailjs.sendAsync('service_tjsoedn', 'template_ly5vrzm', '#contact-form', 'DOsrgnZ-5O0QZj-fu')
      // if (response.status === 200) alert('Thank you for your message! I will get back to you shortly.');
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
        <section id='portfolio'></section>
        {/* SKILLS AND RESUME */}
        <section id='skills'>
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
          <div id='iframe-container'>
            <iframe 
              className='resume-embed'
              src="https://docs.google.com/document/d/e/2PACX-1vRZKTDkEFMaIs47oLeMRDUVZU1jaWY_oTowjqWj4hVip4r2nn3UkI5z8vUAX6Ow6EUTMyHfDNz7U8yB/pub?embedded=true" 
              width='850' 
              height='500' 
              title='Mia Ciasullo resume'>Loading Resume…
            </iframe>
          </div>
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
                  <i className="fa-solid fa-location-dot"></i>
                  <span className='contact-text location'>United States</span>
                </li>
                <li>
                  <i className="fa-solid fa-phone-flip"></i>
                  <span className='contact-text phone'><a href='tel:1-215-779-8590' title='call me'>{`(215) 779-8590`}</a></span>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
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
      <EmbeddedDocs/>
    </div>)}
    

export default App
