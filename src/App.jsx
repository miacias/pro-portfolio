import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [hideMenu, setHideMenu] = useState(false);
  const [endSwipe, setEndSwipe] = useState();
  const [matchesMobile, setMatchesMobile] = useState(
    window.matchMedia('(max-width: 1024px)').matches
  );

  // hamburger btn open/close menu
  const toggleMenu = () => {
    setHideMenu(!hideMenu);
  }
  
  // handles menu open/close event listeners
  const handleSwipe = (endX) => {
    if (hideMenu) {
      return;
    }
    if (endSwipe !== null && endX) {
      const diff = endX - endSwipe;
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
          // setEndSwipe({ startX: null, endX: null });
          // setEndSwipe((prevendSwipe) => {
          //   return { ...prevendSwipe, startX: event.screenX } 
          // })
          setEndSwipe(event.screenX)
          // let startX = event.screenX;
          // return startX;
          console.log('mouseDown finished', endSwipe)
        }}
        onMouseUp={(event) => {
          // setEndSwipe((prevendSwipe) => { 
          //   return { ...prevendSwipe, endX: event.screenX }
          // })
          let endX = event.screenX
          console.log('RAW END SEND', endX)
          handleSwipe(endX);
          console.log('mouseUp finished', endSwipe)
        }}
        style={{
          transform: `translateX(-${
            hideMenu ?
              matchesMobile ? 98 : 78
              : 0
          }%)`,
          minWidth: matchesMobile ? '800px' : '22%',
          userSelect: 'none',
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
