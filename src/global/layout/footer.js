import React from 'react'
import Logo from '../../assets/images/logo/logo.svg'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="page_width">
          <div className="inner_footer">
            <div className="footer_col_one">
              <img src={Logo} alt="" />
              <p>We make sure that your safety is never compromised. This is why we hire all the staff under the
                roof of Home Comfort, just for your satisfaction.</p>
            </div>
            <div className="footer_col_two">
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
              </ul>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
            <div className="footer_col_three">
              <ul>
                <li>
                  <a href="tel:+971 58 67 47 123"> +971 58 67 47 123</a>
                </li>
                <li>
                  <a href="mailto:info@homecomfort.com"> info@homecomfort.com</a>
                </li>
              </ul>
              <div className="news_letter">
                <input type="text" placeholder="Enter Email" />
                <button>Send</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="outer_footer">@Copyrights reserved by HomeComfort</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
