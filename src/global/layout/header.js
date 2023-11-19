import React from 'react'
import Logo from '../../assets/images/logo/logo.svg'
import CallIcon from '../../assets/images/icons/phone-removebg-preview.png'

const Header = () => {
  return (
    <div>
      <header>
        <div className="page_width">
          <nav>
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="nav_link">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="tel:+92056746506"><img src={CallIcon} alt="" />+92056746506</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
