import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Your Data, Our Expertise – Unlocking the Power of Information</h1>
      <p>At Unidata, we provide tailored data analysis that transforms complex information into actionable insights. With cutting-edge techniques, we ensure that every piece of data leads to informed decisions and meaningful impact. Trust us to deliver precision and clarity in every project.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Let’s connect – share your email, and we’ll contact you" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;