import "./skills.scss"
import icons from './icons.js'

function handleLabel(e) {
  console.log(e)
  // e.target.classList.remove('animate');
  // e.target.classList.add('animate');
}

const Skills = ({topColor, icons, banner,bottomColor }) =>
  <div className="skills" style={{borderTopColor:topColor}}>
      <div className="skillTop">
        <div className="filler" style={{background:topColor}}></div>
        <div className="icons">
          {
            icons.map(
              ({ key, title, img }) =>
                <div className="iconDiv" onClick={handleLabel}>
                  <label htmlFor={title}>{title.toLocaleUpperCase()}</label>
                  <img key={key} className="icon" src={img} />
                </div>
            )
          }
        </div>
          <h1 className="banner" style={{borderBottomColor:bottomColor}}>{ banner }</h1>
      </div>
      c98d1f
      <div className="skillBottom" style={{background:bottomColor}}></div>
  </div>

export default Skills;