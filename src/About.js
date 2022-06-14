import { useImperativeHandle, forwardRef, useRef } from 'react';
const About = ({ pageRefs }) => {
  return (
    <div
      className='about'
      ref={(el) => (pageRefs.current = { ...pageRefs.current, about: el })}
    >
      <div className='about_wrapper'>
        <div className='about_para'>
          <h2>
            <img src='assets/img/question_img.png' alt='' />
            Who am I?{' '}
          </h2>
          <p>
            I am a 24 year old self taught developer based in Vilnius. I am
            passionate about UI/UX design and bringing life into websites using
            animation. I am also familiar with backend. when I am not coding I
            like to game, hike and I also love cooking{' '}
          </p>
          <div className='about_tech_list'>
            <div className='tech_list__item'>
              <img src='assets/img/htmlLogo.png' alt='' />
              <h5>HTML</h5>
            </div>
            <div className='tech_list__item'>
              <img src='assets/img/cssLogo.png' alt='' />
              <h5>CSS</h5>
            </div>
            <div className='tech_list__item'>
              <img src='assets/img/jsLogo.png' alt='' />
              <h5>JavaScript</h5>
            </div>
            <div className='tech_list__item'>
              <img src='assets/img/sassLogo.png' alt='' />
              <h5>Sass</h5>
            </div>
            <div className='tech_list__item'>
              <img src='assets/img/reactLogo.png' alt='' />
              <h5>React</h5>
            </div>
            <div className='tech_list__item'>
              <img src='assets/img/nodeLogo.png' alt='' />
              <h5>Node</h5>
            </div>
            <div className='tech_list__item'>
              <img src='assets/img/mongoLogo.png' alt='' />
              <h5>Mongo</h5>
            </div>
            <div className='tech_list__item'>
              <img src='assets/img/herokuLogo.png' alt='' />
              <h5>Heroku</h5>
            </div>
            <div className='tech_list__item'>
              <img src='assets/img/psLogo.png' alt='' />
              <h5>Photoshop</h5>
            </div>
          </div>
          <button class='download-cv'>My Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
