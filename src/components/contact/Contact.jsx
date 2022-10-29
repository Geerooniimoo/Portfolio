import "./contact.scss"
import github from './images/github.png';
import linkedIn from './images/linkedIn.png';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="header">
        <div className="contactTop"></div>
        <h1>Contact</h1>
        <div className="contactBottom"></div>
      </div>
      <div className="contactIcon">
      
      <a href="Geronimo.Perez4@gmail.com"><i class="fa fa-square-envelope fa-2x"> geronimo</i></a>
      <a href="https://github.com/Geerooniimoo"> <i class="fa-brands fa-github fa-2x"> Geerooniimoo</i></a>
      <a href="linkedin.com/in/geronimoperez"> <i class="fa-brands fa-linkedin fa-2x"> geronimoperez</i></a>
      </div>
    </div>
  )
}