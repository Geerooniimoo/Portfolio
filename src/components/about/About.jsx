import "./about.scss";
import me from './images/pic1.png';

export default function About() {

  return (
    <div className="about" id="about">

      <h1 className="title">Analyst And Web Developer</h1>
      <a href="#about" className="fa-regular"><i className="fa-regular fa-id-badge"></i></a>
      <a href="#work" className="fa-solid"><i className="fa-solid fa-copy"></i></a>
      <a href="#contact" className="fa-solid"><i className="fa-solid fa-mobile-screen-button"></i></a>

      <div className="row">
        <div className="imgContainer">
          <h1>Geronimo</h1>
          <div className="yellow"></div>
          <div className="red"></div>
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
          <p className='one'>
            Veteran with experience as data Analyst, Full-Stack Developer and Network Administrator.
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