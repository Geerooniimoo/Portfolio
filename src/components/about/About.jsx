import "./about.scss";
import { useEffect } from 'react';

export default function About() {

  useEffect(() => {
    let x = document.querySelector('.imgContainer').getBoundingClientRect().x + 217 + 'px';
    let y = document.querySelector('.imgContainer').getBoundingClientRect().y - 225 + 'px';
    document.querySelector('.me').style.left = x;
    document.querySelector('.me').style.top = y;
    console.log(('Data: ',document.querySelector('.me').getBoundingClientRect()));
  });



  return (
    <div className="about">

      <h1>Full Stack Web Developer</h1>

      <div className="row">
        <div className="imgContainer">
        <h1>Ryanne Bennett</h1>
          <img className="me" src="assets/me3.png" alt="" />
          <div className="topDiv"></div>
          <div className="bottomDiv"></div>
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
}