import React from 'react';
import imgA from './img.png'
import './Mrizo.css';
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
import img1 from './M1.jpg'
import img2 from './M2.jpg'
import img3 from './M3.jpg'

function App() {
  return (
    <div className="main-wrapper">
      
      {/* TEPA BLOKI */}
      <div className="tepa">
        <div className="container">
          <div className="box-content">
            <h1 className="title">BIZ HAQIMIZDA</h1>
            <p className="subtitle">New star School xususiy ta'lim muassasasi - O'zbekistonda ta'lim tizimini rivojlantirish yo'nalishida jadal ish olib bormoqda, unda boshlang'ich maktab ta'limini olish uchun sharoit yaratilgan.</p>
            <p className="desc">Maktab muassasasining asosiy faoliyati yoshlarga ilg'or texnika va texnologiyalar asosida lider sifatida tayyorlash. Maktab muassasasida turli sohalarda muvaffaqiyat va samaradorlikni rag'batlantiradigan noyob muhit yaratilgan.</p>
          </div>
          <div className="box-image img-tepa">
            <div className="play-btn"></div>
          </div>
        </div>
      </div>

      {/* ORTA BLOKI */}
      <div className="orta">
        <div className="container">
          <h1 className="title">NEGA AYNAN BIZ?</h1>
          
          <div className="row">
            <div className="box-image img-orta-1"></div>
            <div className="box-content">
              <h1 className="sub-title">Maktab infratuzilmasi</h1>
              <p className="desc">Maktabimiz hududida uchta asosiy bino mavjud: rus qismi, IB bo'limi va bolalar bog'chasi. Ushbu bo'limlarning har biri o'quv jarayonini samarali olib borish uchun zarur jihozlar bilan jihozlangan. Har bir bo'limda ofislar mavjud laboratoriya tadqiqotlari, kutubxonalar, shuningdek, o'z oshxonalarini o'tkazish. Bundan tashqari, har bir bo'limda dasturlash xonalari mavjud, interaktiv o'tkazish uchun barcha zarur jihozlar bilan ta'minlangan sinflar.</p>
            </div>
          </div>

          <div className="row">
            <div className="box-content">
              <h1 className="sub-title">Zamonaviy kampus</h1>
              <p className="desc">Mazkur o'quv majmuasida zamonaviy talablarga javob beradigan futbol maydoni, basketbol maydoni, ikkita yopiq suzish havzasi va uchta o'yin maydonchasi har tomonlama obodonlashtirmoqda. Bu yerda o'quvchilarning har tomonlama jismoniy rivojlanishi, faol hayot tarzini shakllantirish uchun ideal sharoit yaratilgan.</p>
            </div>
            <div className="box-image img-orta-2"></div>
          </div>
        </div>
      </div>

      {/* PAST BLOKI */}
      <div className="past">
        <div className="container">
          <h1 className="title">KO'P SO'RALADIGAN SAVOLLAR</h1>
          <div className="faq-grid">
            <div className="faq-box"><p>Qabul qachondan boshlanadi?</p></div>
            <div className="faq-box"><p>Qabul qachondan boshlanadi?</p></div>
            <div className="faq-box"><p>Qabul qachondan boshlanadi?</p></div>
            <div className="faq-box"><p>Qabul qachondan boshlanadi?</p></div>
            <div className="faq-box"><p>Qabul qachondan boshlanadi?</p></div>
            <div className="faq-box"><p>Qabul qachondan boshlanadi?</p></div>
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
  );
}

export default App;