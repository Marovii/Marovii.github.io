import { useState } from 'react';
const Nav = ({ pageRefs }) => {
  const [navToggle, setToggleState] = useState(false);
  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({ behavior: 'smooth' });
    setToggleState(!navToggle);
  }
  return (
    <div className='nav'>
      <button
        className='nav__toggle'
        onClick={() => setToggleState(!navToggle)}
      >
        <i className='bi bi-list nav_toggle-on'></i>
      </button>
      <div className={navToggle + ' nav_list_wrap'}>
        <button
          className='nav__toggle'
          onClick={() => setToggleState(!navToggle)}
        >
          <i class='bi bi-x'></i>
        </button>
        <ul className='nav_list'>
          <button onClick={() => scrollIntoView('about')}>
            <li>ABOUT</li>
          </button>
          <button onClick={() => scrollIntoView('projects')}>
            <li>PROJECTS</li>
          </button>
          <button onClick={() => scrollIntoView('contact')}>
            <li>CONTACT ME</li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
