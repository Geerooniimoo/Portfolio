import "./skills.scss"

const Skills = ({ topColor, icons, banner, bottomColor }) =>
  <div className="skills" style={{ borderTopColor: topColor, borderBottom: bottomColor }}>
    <div className="skew" style={{borderTopColor:topColor,borderBottomColor:bottomColor}}>
      <div className="icons" style={{ borderTopColor: topColor }}>
        {
          icons.map(
            ({ key, title, img }) =>
              <div className="iconDiv">
                <label htmlFor={title}>{title.toLocaleUpperCase()}</label>
                <img key={key} className="icon" src={img} />
              </div>
          )
        }
      </div>
      <h1 className="banner" style={{ borderBottomColor: bottomColor }}>{banner}</h1>
    </div>
  </div>

export default Skills;