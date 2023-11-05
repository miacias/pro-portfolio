import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [hideMenu, setHideMenu] = useState(false);
  const [swipeWindow, setSwipeWindow] = useState({
    startX: null,
    endX: null,
  });
  const [matchesMobile, setMatchesMobile] = useState(
    window.matchMedia('(max-width: 1024px)').matches
  );

  // hamburger btn open/close menu
  const toggleMenu = () => {
    setHideMenu(!hideMenu);
  }
  
  // handles menu open/close event listeners
  const handleSwipe = () => {
    console.log('hideMenu', hideMenu)
    console.log('swipeWindow', swipeWindow)
    if (hideMenu) {
      return;
    }
    if (swipeWindow.startX !== null && swipeWindow.endX !== null) {
      const diff = swipeWindow.endX - swipeWindow.startX;
      console.log('diff', diff)
      diff < 0 ? setHideMenu(true) : setHideMenu(false);
    }
  };

  // // creates menu event listeners and media query event listener
  useEffect(() => {
    window
      .matchMedia('(max-width: 1024px)')
      .addEventListener('change', event => setMatchesMobile(event.matches));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // // opens or closes menu
  // useEffect(() => {
  //   handleSwipe()
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [swipeWindow]);

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
        onMouseDown={(event) => setSwipeWindow({ ...swipeWindow, startX: event.screenX })}
        onMouseUp={(event) => {
          setSwipeWindow({ ...swipeWindow, endX: event.screenX })
          handleSwipe();
          // setSwipeWindow({ startX: null, endX: null });
          }
        }
        style={{
          transform: `translateX(-${
            hideMenu ?
              matchesMobile ? 98 : 78
              : 0
          }%)`,
          minWidth: matchesMobile ? '800px' : '22%',
        }}
      >
        {/* <img src='/sj-objio-XFWiZTa2Ub0-unsplash.jpg'/> */}
        <header 
          className='fixed-header'
          style={{
            position: hideMenu ? 'fixed' : '',
            minWidth: '22%',
            left: hideMenu ? '100%' : '50%',
            transform: hideMenu ? 'translateX(-100%)' : 'translateX(0%)',
            transition: hideMenu ? 'transform 0.7s, left 0,7s' : '',
            width: hideMenu ? '12%' : '100%',
            display: matchesMobile ? 'none' : 'block',
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
