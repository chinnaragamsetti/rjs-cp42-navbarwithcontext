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
            <h1 className="lightlost">Lost You Way</h1>
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
              alt="not found"
              className="notfoundimage"
            />
            <h1 className="darklost">Lost Your Way</h1>
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
