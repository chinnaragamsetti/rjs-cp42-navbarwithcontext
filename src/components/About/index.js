// Write your code here
import {Link} from 'react-router-dom'

import Header from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const renderDarkhome = () => (
        <>
          <Header />
          <div className={isDarkTheme ? 'darkaboutsub' : 'lighthomesub'}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="homelight"
              className="homelightimage"
            />
          </div>
        </>
      )
      const renderLighthome = () => (
        <>
          <Header />
          <div className={isDarkTheme ? 'darkaboutsub' : 'lighthomesub'}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="homelight"
              className="homelightimage"
            />
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
