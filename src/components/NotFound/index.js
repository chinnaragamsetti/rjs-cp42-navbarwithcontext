// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const renderDarkhome = () => (
        <>
          <Navbar />
          <div className="darknotsubcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
              className="notfoundimage"
            />
            <p className="lightlost">Lost You Way?</p>
            <p className="lightseem">
              We cannot seem to find the page you looking for.
            </p>
          </div>
        </>
      )
      const renderLighthome = () => (
        <>
          <Navbar />
          <div className="lightnotsubcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="homelight"
              className="notfoundimage"
            />
            <p className="darklost">Lost Your Way</p>
            <p className="darkseem">
              We cannot seem to find the page you looking for.
            </p>
          </div>
        </>
      )
      return (
        <div className="notfoundmaincontainer">
          {isDarkTheme ? renderDarkhome() : renderLighthome()}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
