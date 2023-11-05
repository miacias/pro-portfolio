import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [hideMenu, setHideMenu] = useState(false);
  const [swipeWindow, setSwipeWindow] = useState({
    startX: null,
    endX: null,
  });

  const getStartX = (event) => {
    let startX = event.screenX;
    setSwipeWindow({ ...swipeWindow, startX });
    return true;
  };
  const getEndX = (event) => {
    let endX = event.screenX;
    setSwipeWindow({ ...swipeWindow, endX });
    return true;
  };
  
  const handleSwipe = () => {
    if (hideMenu) {
      return;
    } else {
      const diff = swipeWindow.endX - swipeWindow.startX;
      diff < 0 ? setHideMenu(true) : setHideMenu(false);
    }
  };

  useEffect(() => {
    const fixedContainer = document.querySelector('.fixed-container');
    fixedContainer.addEventListener('mousedown', getStartX);
    fixedContainer.addEventListener('mouseup', getEndX);
    fixedContainer.addEventListener('touchstart', getStartX);
    fixedContainer.addEventListener('touchend', getEndX);
    // handleSwipe();
  }, []);

  useEffect(() => {
    handleSwipe()
  }, [swipeWindow])


  const toggleMenu = () => {
    setHideMenu(!hideMenu);
  }

  return (
    <div className='app-container'>
      <button
        className='menu-icon'
        onClick={toggleMenu}
      >☰</button>
      <div 
        className='fixed-container'
        style={{ transform: `translateX(-${hideMenu ? 98 : 0}%)` }}
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
        {/* add page content here! */}
      </main>
    </div>
  )
}

export default App
