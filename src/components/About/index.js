// Write your code here
import {Link} from 'react-router-dom'

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const renderDarkhome = () => (
        <>
          <Navbar />
          <div className={isDarkTheme ? 'darkaboutsub' : 'lightaboutsub'}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
              className="aboutlightimage"
            />
            <h1 className="darktext">About</h1>
          </div>
        </>
      )
      const renderLighthome = () => (
        <>
          <Navbar />
          <div className={isDarkTheme ? 'darkaboutsub' : 'lightaboutsub'}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
              className="aboutlightimage"
            />
            <h1 className="lighttext">About</h1>
          </div>
        </>
      )

      return (
        <Link to="/about">
          <div className="aboutcontainer">
            {isDarkTheme ? renderDarkhome() : renderLighthome()}
          </div>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
