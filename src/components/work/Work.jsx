import "./work.scss"
import apps from "./applications.js"
import icons from './icons.js'

export default function Work() {

  return (
    <div className="work">
      <div className="header">
        <div className="topBanner">
          <div className="icons">
          {icons.map(({key,title,img}) => <img key={key} className="icon" src={img} />)}
          </div>
        </div>
        <h1>Applications</h1>
        <div className="bottomBanner"></div>
      </div>
      <div className="work-container" id="work">

        {apps.map(({ key, title, img, description, repo, website }) =>

          <div className="application" key={key}>
            <img src={img} alt={title} />
            <div className="description">
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={repo} taget="_blank" className="githubBtn"><button>repo</button></a>
              <a href={website} taget="_blank" className="websiteBtn"><button>website</button></a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}