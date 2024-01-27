// import { useEffect, useState } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const navOptions = ['About Me', 'Portfolio', 'Skills', 'Contact'];
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='app-container'>
      <header>
        <div id='menu'>
          <div id='menu-bars' className={menuOpen ? 'change' : ''} onClick={menuClick}>
            <div id='bar-1' className={`menu-bar ${menuOpen ? 'change' : ''}`}></div>
            <div id='bar-2' className={`menu-bar ${menuOpen ? 'change' : ''}`}></div>
            <div id='bar-3' className={`menu-bar ${menuOpen ? 'change' : ''}`}></div>
          </div>
          <nav id='nav' className={menuOpen ? 'change' : ''}>
            <ul style={{ display: menuOpen ? 'block' : 'none' }}>
              {navOptions.map((item) => {
                return <li key={item.split(' ').join('-')}><a href={`/${item.split(' ').join('-').toLowerCase()}`}>{item}</a></li>;
              })}
            </ul>
          </nav>
        </div>
        <div className={`menu-bg ${menuOpen ? 'change-bg' : ''}`}></div>
        <div className='self'>
          <h1>Mia Ciasullo</h1>
          <p>Full Stack Developer</p>
        </div>
      </header>
      <main>
        <section id='about-me'>
          <h2>About Me</h2>
          <div className='my-info'>
            <p>I am a former French teacher and linguist turned full-stack developer! As someone who has always been drawn to creative and artistic outlets, I have found programming to be the perfect avenue for my unique perspective and problem-solving skills. My journey into the world of tech began when I discovered my passion for designing and building projects for my students. The more I learned, the more fascinated I became with the endless possibilities of coding. </p>
            <p>From crafting intuitive user interfaces to optimizing backend functionality, I relish the opportunity to build innovative and efficient solutions. Coming from the education world, I bring a collaborative approach to my work, always striving to understand the needs and goals of my clients and team members. Whether I&apos;m building a custom web application or optimizing existing code, I am committed to delivering quality results that exceed expectations.</p>
            <p>Thank you for taking the time to learn more about me and my work. Please feel free to browse my portfolio and contact me if you have any questions or if you&apos;re interested in working together!</p>
          </div>
        </section>
        <section id='portfolio'></section>
        <section id='skills'>
          <h3>Resume</h3>
          <div>
            <p>I invite you to learn more about my experience and skills!</p>
            <p id='download-resume'>
              <a href="https://docs.google.com/document/export?format=txt&id=1gwYNMpDvR7mwU4Usuqo5Eq1bl4gdmNCJHpY-1So33Vw">
              Download my resume!
              </a>
            </p>
          </div>
          <iframe 
            className='resume-embed'
            src="https://docs.google.com/document/d/e/2PACX-1vRZKTDkEFMaIs47oLeMRDUVZU1jaWY_oTowjqWj4hVip4r2nn3UkI5z8vUAX6Ow6EUTMyHfDNz7U8yB/pub?embedded=true" 
            width='850' 
            height='400' 
            title='Mia Ciasullo resume'>Loading Resume…</iframe>
        </section>
        <section id='contact'></section>
      </main>
    </div>)}

export default App
