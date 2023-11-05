import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showMenu, setshowMenu] = useState(true);
  const [swipeWindow, setSwipeWindow] = useState({
    start: {
      x: null,
      y: null,
    },
    end: {
      start: null,
      end: null,
    }
  });

  useEffect(() => {
    const mouseDown = (event) => {
      let start = {
        x: event.screenX,
        y: event.screenY
      }
      setSwipeWindow({ ...swipeWindow, start });
    };
    const mouseUp = (event) => {
      let end = {
        x: event.screenX,
        y: event.screenY
      }
      setSwipeWindow({ ...swipeWindow, end });
    };
    const touchStart = (event) => {
      let start = {
        x: event.screenX,
        y: event.screenY
      }
      setSwipeWindow({ ...swipeWindow, start});
    };
    const touchEnd = (event) => {
      let end = {
        x: event.screenX,
        y: event.screenY
      }
      setSwipeWindow({ ...swipeWindow, end});
    };
    const fixedContainer = document.querySelector('.fixed-container');
    fixedContainer.addEventListener('mousedown', mouseDown);
    fixedContainer.addEventListener('mouseup', mouseUp);
    fixedContainer.addEventListener('touchstart', touchStart);
    fixedContainer.addEventListener('touchend', touchEnd);
    handleSwipe();
    return () => {
      fixedContainer.removeEventListener('mousedown', mouseDown);
      fixedContainer.removeEventListener('mouseup', mouseUp);
      fixedContainer.removeEventListener('touchstart', touchStart);
      fixedContainer.removeEventListener('touchend', touchEnd);
    };
  }, [swipeWindow]);


  const toggleMenu = () => {
    setshowMenu(!showMenu);
  }

  const handleSwipe = () => {
    // let transform;
    // if (showMenu === false) {
    //   transform = 0;
    //   return `${transform}`;
    // }
    // if (swipeWindow.end.x < swipeWindow.start.x) {
    //   transform = 98;
    //   return `${transform}`
    // }
    const diff = swipeWindow.end.x - swipeWindow.start.x;
    diff < 0 ? setshowMenu(true) : setshowMenu(false);
    // if (diff < 0) {
    //   setshowMenu(true);
    // }
  }

  return (
    <div className='app-container'>
      <button
        className='menu-icon'
        onClick={toggleMenu}
      >☰</button>
      <div 
        className='fixed-container'
        style={{ transform: `translateX(-${showMenu ? 98 : 0}%)` }}
      >
        <header className='fixed-header'>
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
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </div>
  )
}

export default App
