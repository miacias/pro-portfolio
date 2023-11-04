import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [swipe, setSwipe] = useState(false);
  const [pullWindow, setPullWindow] = useState({
    start: {
      x: null,
      y: null,
    },
    end: {
      start: null,
      end: null,
    }
  });
  const [showMenu, setShowMenu] = useState(false);

  // const handleNav = () => {
  //   if (showMenu === false) {
  //     return 'block';
  //   } else {
  //     return 'none';
  //   }
  // }

  // useEffect(() => {
  //   handleNav()
  // }, [showMenu])

  // useEffect(() => {
  //   console.log(window.scrollY)
  // }, [scrollPosition]);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  //   setScrollPosition(scrollY);
  //   scrollY > 50 ? setShowMenu(true) : setShowMenu(false);
  // };

  useEffect(() => {
    window.addEventListener('mousedown', (event) => {
      let start = {
        x: event.screenX,
        y: event.screenY
      }
      setPullWindow({ ...pullWindow, start });
    });
    window.addEventListener('touchstart', (event) => {
      let start = {
        x: event.screenX,
        y: event.screenY
      }
      setPullWindow({ ...pullWindow, start });
    });
    window.addEventListener('mouseup', (event) => {
      let end = {
        x: event.screenX,
        y: event.screenY
      }
      setPullWindow({ ...pullWindow, end});
    });
    window.addEventListener('touchend', (event) => {
      let end = {
        x: event.screenX,
        y: event.screenY
      }
      setPullWindow({ ...pullWindow, end});
    });
    handleSwipe();
  }, [pullWindow]);

  const handleSwipe = () => {
    let transform = 98;
    if (pullWindow.end.x < pullWindow.start.x) {
      return `${transform}`
    }
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='app-container'>
      <button
        className='menu-icon'
        onClick={toggleMenu}
      >☰</button>
      <div 
        className='fixed-container'
        style={{
          transform: `translateX(-${handleSwipe()}%)`,
          // display: handleNav()
        }}
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
