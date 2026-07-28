import React from 'react';
import './Abdurahmon.css';
import rasm from './rasm.jpg';
import rasm2 from './rasm2.jpg';
import rasm3 from './rasm3.jpg';
import kitob from './kitob.jpg';
import opa from './opa.jpg';

const Abdurahmon = () => {
  return (
    <div className="main-wrapper">

      {/* ===== HERO SECTION ===== */}
      <section id='qwqw' className="section hero-wrapper">
        <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Farzandingiz istedodini kashf etamiz</h1>
              <p className="hero-description">
                Biz har bir bola ilmiy, ijodiy, sport g'alabalariga erishishga, muloqot qilishga,
                do'stlashishga va shunchaki yashashga qiziqadigan maktab yaratmoqdamiz.
              </p>
              <button className="btn-primary">Qabul - 2024</button>
            </div>
        </div>
      </section>

      {/* ===== BIZ HAQIMIZDA ===== */}
      <section className="section">
        <div className="container">
          <p className="section-label">BIZ HAQIMIZDA</p>

          <div className="bizhaqimizda-row">
            <div className="bizhaqimizda-text">
              <h2>New star "School" mustaqil ta'lim maskani</h2>
              <p>
                Bizda o'quvchilarga zamonaviy va mustahkam bilim berish, ularning intellektual salohiyatini
                rivojlantirish uchun barcha shart-sharoitlar yaratilgan. O'quvchilarimiz nafaqat darslik
                bilimlarini, balki hayotiy ko'nikmalarni ham egallaydilar.
              </p>
            </div>
            <div className="bizhaqimizda-img-box">
              <img src={rasm2} alt="Biz haqimizda" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== BIZNING KURSLAR ===== */}
      <section className="section">
        <div className="container">
          <p className="section-label">BIZNING KURSLAR</p>

          <div className="cards-grid">
            <div className="kurs-card">
              <img src={rasm} alt="Mental Aritmetika" />
              <h3>Mental Aritmetika</h3>
              <div className="kurs-line"></div>
            </div>

            <div className="kurs-card">
              <img src={rasm2} alt="Rus tili" />
              <h3>Rus tili</h3>
              <div className="kurs-line"></div>
            </div>

            <div className="kurs-card">
              <img src={rasm3} alt="Shaxmat-Shashka" />
              <h3>Shaxmat-Shashka</h3>
              <div className="kurs-line"></div>
            </div>

            <div className="kurs-card">
              <img src={kitob} alt="Robototexnika" />
              <h3>Robototexnika</h3>
              <div className="kurs-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEGA AYNAN BIZ ===== */}
      <section className="section">
        <div className="container">
          <p className="section-label">NEGA AYNAN BIZ?</p>

          <div className="nega-row">
            <img src={rasm3} alt="Maktab infratuzilmasi" className="nega-img" />
            <div className="nega-text">
              <h2>Maktab infratuzilmasi</h2>
              <p>
                Bizning maktabimizda o'quvchilar uchun barcha zamonaviy sharoitlar yaratilgan bo'lib, ular
                o'z bilim va ko'nikmalarini erkin rivojlantirishlari mumkin.
              </p>
            </div>
          </div><div className="nega-row nega-row-reverse">
            <img src={rasm} alt="Zamonaviy kampus" className="nega-img" />
            <div className="nega-text">
              <h2>Zamonaviy kampus</h2>
              <p>
                Maktab hududi zamonaviy texnologiyalar va qulay infratuzilma bilan jihozlangan bo'lib,
                o'quvchilarning har tomonlama rivojlanishi uchun barcha imkoniyatlar mavjud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO CARD / BANNER ===== */}
      <section className="section">
        <div className="container videoCard-wrapper">
            <div className="videoCard-textbox">
              <p>Dev Mode simplifies handoff, speeds up inspection, and integrates with tools like VS Code and Storybook.</p>
              <button className="btn-primary request-btn">Request access</button>
            </div>
        </div>
      </section>

      {/* ===== FOTOGALEREYA ===== */}
      <section className="section">
        <div className="container">
          <p className="section-label">FOTOGALEREYA</p>

          <div className="cards-grid">
            <img src={rasm2} alt="galereya 1" className="galereya-img" />
            <img src={rasm} alt="galereya 2" className="galereya-img" />
            <img src={rasm3} alt="galereya 3" className="galereya-img" />
            <img src={kitob} alt="galereya 4" className="galereya-img" />
          </div>
        </div>
      </section>

      {/* ===== BIZNING JAMOA ===== */}
      <section className="section">
        <div className="container">
          <p className="section-label">BIZNING JAMOA</p>

          <div className="cards-grid">
            <div className="jamoa-card">
              <img src={opa} alt="Asila Usmonova" />
              <h3>Asila Usmonova</h3>
              <p>Ta'lim bo'limi boshlig'i</p>
            </div>
            <div className="jamoa-card">
              <img src={opa} alt="Asila Usmonova" />
              <h3>Asila Usmonova</h3>
              <p>Ta'lim bo'limi boshlig'i</p>
            </div>
            <div className="jamoa-card">
              <img src={opa} alt="Asila Usmonova" />
              <h3>Asila Usmonova</h3>
              <p>Ta'lim bo'limi boshlig'i</p>
            </div>
            <div className="jamoa-card">
              <img src={opa} alt="Asila Usmonova" />
              <h3>Asila Usmonova</h3>
              <p>Ta'lim bo'limi boshlig'i</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BIZ BILAN BOG'LANISH ===== */}
      <section className="section">
        <div className="container">
          <p className="section-label">BIZ BILAN BOG'LANISH</p>

          <div className="boglanish-card">
            <h2>QABULGA RO'YXATDAN O'TING</h2>

            <form className="boglanish-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Ismingiz" />
              <input type="text" placeholder="Farzandingiz to'liq ismi" />
              <input type="text" placeholder="Telefon raqamingiz" />
              <input type="text" placeholder="Farzandingiz yoshi" />
              <button type="submit" className="boglanish-btn">Ariza yuborish</button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <p className="footer-logo">New Star School</p>
            <div className="footer-links">
              <p>Bosh sahifa</p>
              <p>Biz haqimizda</p>
              <p>Kurslar</p>
              <p>Bog'lanish</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 New Star School. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};



export default Abdurahmon