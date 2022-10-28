import "./about.scss";
import me from './images/me.png';
import { useEffect } from 'react';

export default function About() {

  useEffect(() => {
    let pic = document.querySelector('.me');
    let hole = document.querySelector('.bottomDiv');
    let x = hole.getBoundingClientRect().x-25 + 'px';
    let y = hole.getBoundingClientRect().y-550 + 'px';
    pic.style.left = x;
    pic.style.top = y;

    window.addEventListener('resize', () => {
      let x = hole.getBoundingClientRect().x + 'px';
      let y = hole.getBoundingClientRect().y + 'px';
      pic.style.left = x;
      pic.style.top = -y;
    });
  });

  return (
    <div className="about">
      {/* <a href="mailto:test@test.com"> <i class="fa-regular fa-id-badge"></i><br /> test@test.com</a>
      <i class="fa-solid fa-phone-volume"></i>
      <i class="fa-solid fa-copy"></i>
      <i class="fa-thin fa-square-envelope"></i> */}
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