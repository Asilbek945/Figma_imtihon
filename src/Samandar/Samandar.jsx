import React from 'react';
import './Samandar.css';

const Menu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="menu-overlay">
      {/* Yopish tugmasi */}
      <button className="close-btn" onClick={onClose} aria-label="Close menu">
        ✕
      </button>

      {/* Menyu ro'yxati */}
      <nav className="menu-nav">
        <a href="#about" className="menu-item active">
          Biz haqimizda
        </a>
        <a href="#courses" className="menu-item">
          Kurslar
        </a>
        <a href="#camp" className="menu-item">
          Oromgoh
        </a>
        <a href="#gallery" className="menu-item">
          Fotogalereya
        </a>
        <a href="#contact" className="menu-item">
          Bog'lanish
        </a>
      </nav>

      {/* Pastki qism: Til tanlash va Ariza yuborish */}
      <div className="menu-footer">
        <button className="lang-btn">
          <span className="globe-icon">🌐</span> UZ
        </button>
        <button className="apply-btn">
          Ariza yuborish
        </button>
      </div>
    </div>
  );
};

export default Menu;