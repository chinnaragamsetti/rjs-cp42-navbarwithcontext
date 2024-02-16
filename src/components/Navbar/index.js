// Write your code he
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }
      return (
        <>
          {isDarkTheme ? (
            <div className="darknavcontainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="footlogo"
              />
              <ul className="menucontainer">
                <Link to="/">
                  <li className="darkhome">Home</li>
                </Link>
                <Link to="/about">
                  <li className="darkabout">About</li>
                </Link>
              </ul>
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="light"
                className="footlogo"
                onClick={onChangeTheme}
              />
            </div>
          ) : (
            <div className="lightnavcontainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="footlogo"
              />
              <ul className="menucontainer">
                <Link to="/">
                  <li className="lighthome">Home</li>
                </Link>
                <Link to="/about">
                  <li className="lightabout">About</li>
                </Link>
              </ul>
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="dark"
                data-testid="theme"
                className="footlogo"
                onClick={onChangeTheme}
              />
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
