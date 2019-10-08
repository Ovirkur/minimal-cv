import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-textblock">
        <div className="Header-textblock-title">Árni Þór Busk</div>
        <div className="Header-textblock-subtext">Never skip leg day</div>
      </div>
      <div className="Header-imageblock">
        <img
          className="headshot"
          src="https://www.carvermostardi.com/cmos/wp-content/uploads/2018/05/corporate_headshots_tampa_002.jpg"
          alt="joakim"
        ></img>
      </div>
    </div>
  );
};

export default Header;
