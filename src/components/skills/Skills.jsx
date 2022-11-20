import "./skills.scss"

const Skills = ({ topColor, icons, banner, bottomColor, bg }) =>
  <div className="skills" style={{ borderTopColor: topColor, borderBottom: bottomColor, backgroundImage: `url(${bg})`}}>
    <div className="skew" style={{borderTopColor:topColor,borderBottomColor:bottomColor}}>
      <div className="topFill" style={{background:topColor}}></div>
      <div className="icons" style={{ borderTopColor: topColor}}>
        {
          icons.map(
            ({ key, title, img }) =>
              <div key={key} className="iconDiv">
                <label htmlFor={title}>{title.toLocaleUpperCase()}</label>
                <img className="icon" src={img} />
              </div>
          )
        }
      </div>
      <h1 className="banner" style={{ borderBottomColor: bottomColor}}>{banner}</h1>
      <div className="bottomFill" style={{background:bottomColor}}></div>
    </div>
  </div>

export default Skills;