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
          <div className={isDarkTheme ? 'darkhomesub' : 'lighthomesub'}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
              className="homelightimage"
            />
            <h1 className="darkpara">Home</h1>
          </div>
        </>
      )
      const renderLighthome = () => (
        <>
          <Navbar />
          <div className={isDarkTheme ? 'darkhomesub' : 'lighthomesub'}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
              className="homelightimage"
            />
            <h1 className="lightpara">Home</h1>
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
