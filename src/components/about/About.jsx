import "./about.scss";
import me from './images/me.png';
import { useEffect } from 'react';

export default function About() {
  const setImgLoc = () => {
    window.scrollTo(0,0);

    let x = 40;
    let y = -700;

    if(document.querySelector('.me').getBoundingClientRect().height<600) {
      y = -430;
      x = -3;
    }
    let pic = document.querySelector('.me');
    let hole = document.querySelector('.bottomDiv');
    pic.style.left = hole.getBoundingClientRect().x + x + 'px';
    pic.style.top = hole.getBoundingClientRect().y + y + 'px';


    
  };

  useEffect(setImgLoc);
  window.addEventListener('resize', setImgLoc);

  return (
    <div className="about" id="about">
      
      <a href="#about"><i class="fa-regular fa-id-badge fa-3x"></i></a>
      <a href="#work"><i class="fa-solid fa-copy fa-3x"></i></a>
      <a href="#contact"><i class="fa-solid fa-mobile-screen-button fa-3x"></i></a>
      <h1>Full Stack Web Developer</h1>

      <div className="row">
        <div className="imgContainer">
          <h1>Ryanne Bennet</h1>
          <img className="me" src={me} alt="" />
          <div className="topDiv"></div>
          <div className="bottomDiv"></div>
          <div className="extend"></div>
        </div>

        <div className="paragraph">
          <h2 className="name">Ryanne Bennet</h2>
          <h2 className="aboutMe">About Me</h2>
          <p>
            From the world of News Broadcasting production
            where I developed my passion for learning new technology,
            because of the fast pace environment and robotic technology
            slowly taking over live broadcasts.  Whether it’s robotic cameras or web development I’m always up for the challenge to be creative and learn a new skill.
          </p>
          <p>
            Coding has been a huge part of my day to day for years now,
            and I have always wondered what more I can do with it.
            I am ready to change up my career path and challenge myself in new ways!
          </p>
        </div>
      </div>
    </div>
  )
};