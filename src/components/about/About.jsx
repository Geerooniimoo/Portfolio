import "./about.scss";
import me from './images/me.png';
import { useEffect } from 'react';

export default function About() {

  useEffect(() => {
    let pic = document.querySelector('.me');
    let hole = document.querySelector('.bottomDiv');
    let about = document.getElementById('about');
    let x = hole.getBoundingClientRect().x-25 + 'px';
    let y = hole.getBoundingClientRect().y-550 + 'px';
    pic.style.left = x;
    pic.style.top = y;

    window.addEventListener('resize', () => {
      window.scrollTo(0,0);
      let x = hole.getBoundingClientRect().x + 'px';
      let y = hole.getBoundingClientRect().y + 'px';
      pic.style.left = x;
      pic.style.top = -y;
    });
  });

  return (
    <div className="about" id="about">
      
      <a href="#about"><i class="fa-regular fa-id-badge fa-3x"></i></a>
      <a href="#work"><i class="fa-solid fa-copy fa-3x"></i></a>
      <a href="#contact"><i class="fa-solid fa-mobile-screen-button fa-3x"></i></a>
      <h1>Full Stack Web Developer</h1>

      <div className="row">
        <div className="imgContainer">
          <h1>Ryanne Bennett</h1>
          <img className="me" src={me} alt="" />
          <div className="topDiv"></div>
          <div className="bottomDiv"></div>
          <div className="extend"></div>
        </div>

        <div className="paragraph">
          <h2>About Me</h2>
          <br />
          <p>
            From the world of News Broadcasting production
            where I developed my passion for learning new technology,
            because of the fast pace environment and robotic technology
            slowly taking over live broadcasts.  Whether it’s robotic cameras or web development I’m always up for the challenge to be creative and learn a new skill.
          </p>
          <br />
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