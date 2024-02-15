// Write your code he

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
        <Navbar
          className={isDarkTheme ? 'darknavcontainer' : 'lightnavcontainer'}
        >
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="footlogo"
              className="footlogo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="footlogo"
              className="footlogo"
            />
          )}
          <div className="menucontainer">
            <p className={isDarkTheme ? 'darkhome' : 'lighthome'}>Home</p>
            <p className={isDarkTheme ? 'darkabout' : 'lightabout'}>About</p>
          </div>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="themelogo"
              className="footlogo"
              onClick={onChangeTheme}
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="themelogo"
              className="footlogo"
            />
          )}
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
