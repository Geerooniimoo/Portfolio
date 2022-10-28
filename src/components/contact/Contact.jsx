import "./contact.scss"
import github from './images/github.png';
import linkedIn from './images/linkedIn.png';

export default function Contact() {
  return (
    <div className="contact">
      <div className="header">
        <div className="contactTop"></div>
        <h1>Contact</h1>
        <div className="contactBottom"></div>
      </div>
      <div className="contactIcon">
        <a href=""><img src={github} alt="" /></a>
        <a href=""><img src={linkedIn} alt="" /></a>
      </div>
    </div>
  )
}