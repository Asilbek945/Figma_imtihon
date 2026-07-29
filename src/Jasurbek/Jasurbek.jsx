import React from "react";
import "./Jasurbek.css";
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

const Jasurbek = () => {
  return (
    <div className="sayt">

   
    <div className="jasurbek-page">

 
      {/* Main Contact Section */}
      <div className="contact-section">
        <div className="container">
          <div className="section-title">
            <span className="title-line"></span>
            <h2>ALOQA</h2>
          </div>

          <div className="contact-content">
            <div className="map-card">
              <img
                src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
                alt="map"
                className="fake-map"
              />
              <div className="map-overlay">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=Qarshi&z=14&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3>Telefon raqam:</h3>
                  <p>+998 (99) 563 52 35</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3>Manzil:</h3>
                  <p>Islom, Karimov 55-A uy, Qarshi</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Pochta:</h3>
                  <p>new-star.uz@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div>
                  <h3>Ish grafigi:</h3>
                  <p>Dushanba–Juma 8:00 dan 18:00 gacha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* Footer */}
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
     </div>
  );
};

export default Jasurbek;