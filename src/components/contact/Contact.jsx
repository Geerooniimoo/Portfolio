import "./contact.scss"
import me from '../about/images/pic1.png';
import github from './images/github.png';
import linkedIn from './images/linkedIn.png';

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactIcon" id="contact">

        <a href="mailto:Geronimo.Perez4@gmail.com"><i className="fa fa-square-envelope">Geronimo.Perez4@Gmail.com</i></a>
        <a href="https://github.com/Geerooniimoo"> <i className="fa-brands fa-github">Geerooniimoo</i></a>
        <a href="https://linkedin.com/in/geronimoperez"> <i className="fa-brands fa-linkedin">Geronimo</i></a>
      </div>
      <div className="image"></div>
      <div className="meBottomDiv">
        <img className="meBottom" src={me} alt="" />
      </div>
    </div>
  )
}