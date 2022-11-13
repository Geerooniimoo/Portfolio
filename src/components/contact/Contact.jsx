import "./contact.scss"
import me from '../about/images/pic1.png';
import github from './images/github.png';
import linkedIn from './images/linkedIn.png';

export default function Contact() {
  return (
    <div className="contact">
      <div className="header">
        <div className="contactTop"></div>
        <h1 id="connect">Contact</h1>
        <div className="contactBottom"></div>
      </div>
      <div className="contactIcon" id="contact">

        <a href="Geronimo.Perez4@gmail.com"><i class="fa fa-square-envelope">Geronimo.Perez4@Gmail.com</i></a>
        <a href="https://github.com/Geerooniimoo"> <i class="fa-brands fa-github">Geerooniimoo</i></a>
        <a href="linkedin.com/in/geronimoperez"> <i class="fa-brands fa-linkedin">Geronimo</i></a>
      </div>
      <img className="meBottom" src={me} alt="" />
    </div>
  )
}