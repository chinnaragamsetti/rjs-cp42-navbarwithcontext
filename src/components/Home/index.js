// Write your code here
import {Link} from 'react-router-dom'

import Header from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const renderDarkhome = () => (
        <>
          <Header />
          <div className={isDarkTheme ? 'darkhomesub' : 'lighthomesub'}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="homelight"
              className="homelightimage"
            />
          </div>
        </>
      )
      const renderLighthome = () => (
        <>
          <Header />
          <div className={isDarkTheme ? 'darkhomesub' : 'lighthomesub'}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="homelight"
              className="homelightimage"
            />
          </div>
        </>
      )

      return (
        <Link to="/">
          <div className="homecontainer">
            {isDarkTheme ? renderDarkhome() : renderLighthome()}
          </div>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
