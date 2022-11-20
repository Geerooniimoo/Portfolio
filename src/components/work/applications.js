import img1 from './images/analyticsandwebdevelopment.png';
import img2 from './images/spiritualEngineering1.jpg';
import img3 from './images/dashboard.png';
import img4 from './images/dashboard.png';
import img5 from './images/biodiversityDashboard.png';

const apps = [
  {
    key: 1,
    title: "Analytics And Web Development",
    img: `${img1}`,
    description: "Tutoring Booking Site",
    repo: "https://github.com/Geerooniimoo/geerooniimoo.github.io",
    website: "https://AnalyticsAndWebDevelopment.com"
  },
  {
    key: 2,
    title: "Spiritual Engineering",
    img: `${img2}`,
    description: "Trivia Game",
    repo: "https://Github.com/Geerooniimoo/SpiritualEngineering",
    website: "https://spiritualengineering.herokuapp.com"
  },
  {
    key: 3,
    title: "Biodiversity Dashboard",
    img: `${img5}`,
    description: "Graphs biodiversity information",
    repo: "https://github.com/Geerooniimoo/plotly-challenge",
    website: "https://analyticsandwebdevelopment.com/plotly-challenge/"
  },
  {
    key: 4,
    title: "WeatherForecast",
    img: `${img4}`,
    description: "Get weather forecast from any city",
    repo: "https://github.com/Geerooniimoo/WeatherForecast",
    website: "https://analyticsandwebdevelopment.com/WeatherForecast/"
  },
  {
    key: 5,
    title: "Workday Scheduler",
    img: `${img3}`,
    description: "A discription of the app",
    repo: "#",
    website: "#"
  }
]

export default apps;