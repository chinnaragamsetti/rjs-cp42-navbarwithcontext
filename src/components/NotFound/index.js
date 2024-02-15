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
          <div className="darknotfoundsubcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
              className="notfoundimage"
            />
          </div>
        </>
      )
      const renderLighthome = () => (
        <>
          <Header />
          <div className="lightnotfoundsubcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="homelight"
              className="notfoundimage"
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
