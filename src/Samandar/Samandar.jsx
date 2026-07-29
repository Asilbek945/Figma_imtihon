import React from 'react'
import './Samandar.css'
import imgA from './img.png'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaFacebookF,
  FaEnvelope,
  FaClock,
  FaGlobe,
} from "react-icons/fa";
import imgO from './tete.png'
const Samandar = () => {
  return (
    <div>
      <div className="m_orta">
        <img src={imgO} alt="" />
        <button>Bosh sahifaga qaytish</button>
      </div>
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-col footer-about">
            <div className="footer-logo-wrap">
              <img className="imgA" src={imgA} alt="" />
              <div>
                <h3 className="h333">
                  NEW START <span>school</span>
                </h3>
                <p className="ppp">
                  “New star School” xususiy ta'lim muassasasi -
                  O‘zbekistonda ta’lim tizimini rivojlantirish yo‘nalishida
                  jadal ish olib bormoqda.
                </p>
              </div>
            </div>

            <div className="footer-socials">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTelegramPlane /></a>
              <a href="#"><FaFacebookF /></a>
            </div>

            <p className="copyright">
              ©2024. Barcha huquqlar himoyalangan.
            </p>
          </div>

          <div className="footer-col footer-contact">
            <div className="footer-contact-item">
              <FaPhoneAlt className="footer-icon" />
              <div>
                <h4>Telefon raqam:</h4>
                <p>+998 90 339 80 06</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <FaMapMarkerAlt className="footer-icon" />
              <div>
                <h4>Manzil:</h4>
                <p>Buxoro shahar, Xo'ja Alovaddin ko'chasi 81-uy</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <FaEnvelope className="footer-icon" />
              <div>
                <h4>Pochta:</h4>
                <p>new-star-school@gmail.com</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <FaClock className="footer-icon" />
              <div>
                <h4>Ish grafigi:</h4>
                <p>Dushanba-Shanba 8:00 dan 18:00 gacha</p>
              </div>
            </div>
          </div>

          <div className="footer-col footer-links">
            <a href="#">Biz haqimizda</a>
            <a href="#">Kurslar</a>
            <a href="#">Fotogaleriya</a>
            <a href="#">Oromgoh</a>
            <a href="#">Bog'lanish</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Samandar