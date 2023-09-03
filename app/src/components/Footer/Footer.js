import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 column-left">
            <ul>
              <li>
                <Link to="">Về chúng tôi</Link>
              </li>
              <li>
                <Link to="">Giới thiệu</Link>
              </li>
              <li>
                <Link to="#">Liên hệ</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 column-center">
            <div class="supportemail">
              <Link
                to="https://vietcodedi.com/user/contactsitesupport.php"
                class="btn contactsitesupport btn-outline-info"
              >
                Contact site support
              </Link>
            </div>

            <div class="logininfo">
              You are not logged in. (
              <Link to="https://vietcodedi.com/login/index.php">Log in</Link>)
            </div>

            <div class="tool_dataprivacy">
              <Link to="https://vietcodedi.com/admin/tool/dataprivacy/summary.php">
                Data retention summary
              </Link>
            </div>
            <Link to="https://download.moodle.org/mobile?version=2022112801.04&amp;lang=en&amp;iosappid=633359593&amp;androidappid=com.moodle.moodlemobile">
              Get the mobile app
            </Link>

            <div class="tool_usertours-resettourcontainer"></div>
          </div>
          <div className="col-md-4 column-right">
            <Link to="https://download.moodle.org/mobile">
              Get the mobile app
            </Link>
            <div class="stores">
              <Link href="https://play.google.com/store/apps/details?id=com.moodle.moodlemobile">
                <img
                  src="https://vietcodedi.com/theme/moove/pix/store_google.svg"
                  alt="Play Store"
                />
              </Link>
              <Link to="mt-1" href="https://apps.apple.com/app/id633359593">
                <img
                  src="https://vietcodedi.com/theme/moove/pix/store_apple.svg"
                  alt="App Store"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
