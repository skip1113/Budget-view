import React from 'react';
import Switch from 'react-switch';
import { FaBars } from 'react-icons/fa';
import "../../styles/App.scss";

// import reactLogo from './assets/logo.svg';

const Info = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <h1 id="main-title">
          {/* <img width={80} src={reactLogo} alt="react logo" />  */}
          Info
        </h1>
        <p id="info-para">This project was created to let users view and fill their average income and spendings to see how much they are spending versus their
        earnings. I wanted this application to help users, and create something that would have helped me save money and see what I was spending
        wether it be a necssity and luxury. When building this, I always kept High School, and College students in mind. My vision was to
        build something that would have helped me when I was younger and in need of this kind of support, and keep track of where my money
        it going. I don't guarantee this website will fix all your problems or save you millions of dollars. It's up to you to spend and save
        what you want to save. This was built for you to be able to see what you spent your hard earned money on and what the total outcome is
        after a day, month, year and so on.
        </p>
        <p id="info-para">Having built this site, I wanted to add a tip calculator to simplify calculating tips for your waiter or waitress, wether its your self, a date,
        or a large group that you're eating with.
        </p>
        <h5>DISCLAIMER this information is not stored in any database, nor will other users be able to see what you fill out.</h5>
      </header>
      <div className="block ">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> COLLAPSED</span>
      </div>
      <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleRtlChange}
          checked={rtl}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span>RTL</span>
      </div>
      <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleImageChange}
          checked={image}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> IMAGE</span>
      </div>
      <div className="social-bagdes">
        <a
          href="https://github.com/azouaoui-med/react-pro-sidebar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="GitHub stars"
            src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
          />
        </a>
        <a
          href="https://github.com/azouaoui-med/react-pro-sidebar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="GitHub forks"
            src="https://img.shields.io/github/forks/azouaoui-med/react-pro-sidebar?style=social"
          />
        </a>
      </div>
      <footer>
        <small>
          © 2020 made with by -{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/skip1113">
            Skip Khamvongsa
          </a>
        </small>
        <br />
        <div className="social-bagdes">
          <a href="https://github.com/skip1113/budget-view" target="_blank" rel="noopener noreferrer">
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social"
            />
          </a>
          <a href="https://www.linkedin.com/in/skip-khamvongsa/" target="_blank" rel="noopener noreferrer">
            <img
              alt="Twitter Follow"
              src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
            />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Info;