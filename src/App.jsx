import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [hideMenu, setHideMenu] = useState(false);
  const [startSwipe, setStartSwipe] = useState();
  const [mouseDown, setMouseDown] = useState(false);
  const [matchesMobile, setMatchesMobile] = useState(
    window.matchMedia('(max-width: 1024px)').matches
  );

  // hamburger btn open/close menu
  const toggleMenu = () => {
    setHideMenu(!hideMenu);
  }
  
  // handles menu open/close event listeners
  const handleSwipe = (endSwipe) => {
    if (hideMenu) {
      return;
    }
    if (startSwipe && endSwipe) {
      const diff = endSwipe - startSwipe;
      diff < 0 ? setHideMenu(true) : setHideMenu(false);
    }
    setStartSwipe();
  };

  // creates media query event listener
  useEffect(() => {
    window
      .matchMedia('(max-width: 1024px)')
      .addEventListener('change', event => setMatchesMobile(event.matches));
  }, []);

  return (
    <div className='app-container'>
      <button
        className='menu-icon'
        onClick={toggleMenu}
        style={{
          left: matchesMobile ? '3%' : '22%'
        }}
      >☰</button>
      <div 
        className='fixed-container'
        onMouseDown={(event) => {
          setMouseDown(true);
          setStartSwipe(event.screenX)
        }}
        onMouseUp={(event) => {
          handleSwipe(event.screenX)
          setMouseDown(false);
        }}
        onTouchStart={(event) => setStartSwipe(event.changedTouches[0].screenX)}
        onTouchEnd={(event) => handleSwipe(event.changedTouches[0].screenX) }
        style={{
          transform: `translateX(-${
            hideMenu ?
              matchesMobile ? 98 : 78
              : 0
          }%)`,
          minWidth: matchesMobile ? '800px' : '22%',
          maxWidth: '100%',
          cursor: hideMenu ?
            'auto'
            : mouseDown ? 'grabbing' : 'grab'
        }}
      >
        <header 
          className='fixed-header'
          style={{
            position: hideMenu ? 'fixed' : '',
            minWidth: '22%',
            // left: hideMenu ? '100%' : '50%',
            // transform: hideMenu ? 'translateX(-100%)' : 'translateX(0%)',
            // transition: hideMenu ? 'transform 0.7s, left 0,7s' : '',
            // width: hideMenu ? '12%' : '100%',
            left: hideMenu ? '50%' : '0%',
            transform: hideMenu ? 'translateX(-50%)' : 'translateX(0%)',
            width: hideMenu ? '100%' : '22%',
            display: hideMenu && matchesMobile ? 'none' : 'block',
          }}
        >
          <div className='self'>
            <p>Mia Ciasullo</p>
            <p>Full Stack Developer</p>
          </div>
          <nav className='fixed-nav'>
            <ul className='nav-list'>
              <li>About Me</li>
              <li>Portfolio</li>
              <li>Skills</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
      </div>
      <main>
        {/* add page content here! */}
        <div>
          <p>this is text in the main section</p>
        </div>
      </main>
    </div>
  )
}

export default App
