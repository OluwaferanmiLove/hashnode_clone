import React from 'react';
import '../css/Navbar.scss';

function Navbar() {
  return (
    <header className="header">
      <div className="header-logo-container">
        <a>
        <svg className="header-logo" viewBox="0 0 200 200" fill="rgb(41, 98, 255)">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.742 66.824c-18.323 18.323-18.323 48.029 0 66.352l53.082 53.082c18.323 18.323 48.029 18.323 66.352 0l53.082-53.082c18.323-18.323 18.323-48.03 0-66.352l-53.082-53.082c-18.323-18.323-48.03-18.323-66.352 0L13.742 66.824zm109.481 56.399c12.826-12.826 12.826-33.62 0-46.446s-33.62-12.826-46.446 0-12.826 33.62 0 46.446 33.62 12.826 46.446 0z"></path>
        </svg>
        </a>
      </div>
      <div className="header-button">
        <button aria-label="Toggle dark mode" title="Toggle dark mode" className="header-btn mb mt pt pb px-4">
          <svg className="header-btn-icon" viewBox="0 0 512 512">
            <path d="M448.964 365.617C348.188 384.809 255.14 307.765 255.14 205.419c0-58.893 31.561-112.832 82.574-141.862 25.83-14.7 19.333-53.859-10.015-59.28A258.114 258.114 0 00280.947 0c-141.334 0-256 114.546-256 256 0 141.334 114.547 256 256 256 78.931 0 151.079-35.924 198.85-94.783 18.846-23.22-1.706-57.149-30.833-51.6zM280.947 480c-123.712 0-224-100.288-224-224s100.288-224 224-224c13.984 0 27.665 1.294 40.94 3.745-58.972 33.56-98.747 96.969-98.747 169.674 0 122.606 111.613 214.523 231.81 191.632C413.881 447.653 351.196 480 280.947 480z"></path>
          </svg>
        </button>
        <div className="withNotif">
          <button aria-label="Toggle dark mode" title="Toggle dark mode" className="header-btn mb pt pb px-4">
            <svg className="header-btn-icon" viewBox="0 0 512 512">
            <path d="M224 480c-17.66 0-32-14.38-32-32.03h-32c0 35.31 28.72 64.03 64 64.03s64-28.72 64-64.03h-32c0 17.65-14.34 32.03-32 32.03zm209.38-145.19c-27.96-26.62-49.34-54.48-49.34-148.91 0-79.59-63.39-144.5-144.04-152.35V16c0-8.84-7.16-16-16-16s-16 7.16-16 16v17.56C127.35 41.41 63.96 106.31 63.96 185.9c0 94.42-21.39 122.29-49.35 148.91-13.97 13.3-18.38 33.41-11.25 51.23C10.64 404.24 28.16 416 48 416h352c19.84 0 37.36-11.77 44.64-29.97 7.13-17.82 2.71-37.92-11.26-51.22zM400 384H48c-14.23 0-21.34-16.47-11.32-26.01 34.86-33.19 59.28-70.34 59.28-172.08C95.96 118.53 153.23 64 224 64c70.76 0 128.04 54.52 128.04 121.9 0 101.35 24.21 138.7 59.28 172.08C421.38 367.57 414.17 384 400 384z"></path>
            </svg>
            <span className="notif"><p>1</p></span>
          </button>
        </div>
        <div className="withProfilePics">
          <button aria-label="Toggle dark mode" title="Toggle dark mode" className="header-btn">
            <img src={require("../assets/userNull.png")} alt="profile pics" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
