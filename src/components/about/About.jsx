import "./about.scss";
import me from './images/pic1.png';
import { useEffect } from 'react';

export default function About() {
  const setImgLoc = () => {
    window.scrollTo(0, 0);

    let x = 40;
    let y = -700;

    if (document.querySelector('.me').getBoundingClientRect().height < 600) {
      y = -420;
      x = -1;
    };

    if (window.innerHeight < 451) {
      y = -220
    }

    let pic = document.querySelector('.me');
    let hole = document.querySelector('.bottomDiv');
    pic.style.left = hole.getBoundingClientRect().x + x + 'px';
    pic.style.top = hole.getBoundingClientRect().y + y + 'px';
  };

  // useEffect(setImgLoc);
  // window.addEventListener('orientation', setImgLoc);

  return (
    <div className="about" id="about">

      <h1 className="title">Analyst And Web Developer</h1>
      <a href="#about" class="fa-regular"><i class="fa-regular fa-id-badge"></i></a>
      <a href="#work" class="fa-solid"><i class="fa-solid fa-copy"></i></a>
      <a href="#contact" class="fa-solid"><i class="fa-solid fa-mobile-screen-button"></i></a>

      <div className="row">
        <div className="imgContainer">
          <h1>Geronimo</h1>
          <div className="yellow"></div>
          <div className="red"></div>
          <div className="blue"></div>
          <div className="meDiv">
            <img className="me" src={me} alt="" />
          </div>
            <div className="topDiv"></div>
            <div className="bottomDiv"></div>
          <div className="extend"></div>
        </div>

        <div className="paragraph">
          <h2 className="name three">Geronimo</h2>
          <h2 className="aboutMe three">About Me</h2>
          <p class='one'>
            A veteran with experience as data Analyst, Full-Stack Developer and Network Administrator.
          </p>
          <p className="five">
            Proactive team leader with proven ability to spearhead critical projects.
          </p>
          <p className="two">
             Strategic thinker with a record of developing and implementing innovative solutions and increasing efficiency in challenging environments.
          </p>
          <p className="four">
            Coding has been a huge part of my day to day for years now.
          </p>
        </div>
      </div>
    </div>
  )
};