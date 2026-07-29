import React, { useState, useRef, useEffect } from 'react'
import Asilbek from './Asilbek/Asilbek'
import img from './img.png'
import Samandar from './Samandar/Samandar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Abdurahmon from './Abdurahmon/Abdurahmon'
import Mrizo from './Mrizo/Mrizo'
import Umar from './Umar/Umar'
import Mumar from './Mumar/Mumar'
import Jasurbek from './Jasurbek/Jasurbek'

const TILLAR = [
  { kod: 'uz', nom: 'UZ' },
  { kod: 'ru', nom: 'RU' },
  { kod: 'en', nom: 'EN' },
]

const App = () => {
  const [ochiqmi, setOchiqmi] = useState(false)
  const [tanlanganTil, setTanlanganTil] = useState(TILLAR[0])
  const tilRef = useRef(null)

  useEffect(() => {
    function tashqariniBosish(e) {
      if (tilRef.current && !tilRef.current.contains(e.target)) {
        setOchiqmi(false)
      }
    }
    document.addEventListener('mousedown', tashqariniBosish)
    return () => document.removeEventListener('mousedown', tashqariniBosish)
  }, [])

  function tilTanlash(til) {
    setTanlanganTil(til)
    setOchiqmi(false)
  }

  return (
    <BrowserRouter>
      <div>
        <div>
          <div className="tepa">
            <div className="bir">
              <div className="chap">
                <h1><i className="fa-solid fa-location-dot"></i> Buxoro shahar, Xo'ja Alovaddin ko'cha 81-uy</h1>
                <h1><i className="fa-solid fa-phone"></i> +998 90 339 80 06</h1>
              </div>
              <div className="ong">
                <a target='_blank' href="https://www.instagram.com/metaitschool/"><i className="fa-brands fa-instagram"></i></a>
                <a target='_blank' href="https://web.telegram.org/a/#-1001539825247"><i className="fa-brands fa-telegram"></i></a>
                <a target='_blank' href="https://facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
            <div className="ikki">
              <Link to="/"><img src={img} alt="" /></Link>
              <div className="navbar">
                <ul>
                  <li>
                    <Link to="Mrizo">Biz haqimizda</Link>
                    <Link to="Umar">Kurslar</Link>
                    <Link to="Mumar">Oromgoh</Link>
                    <Link to="Asilbek">Fotogaleriya</Link>
                    <Link to="Jasurbek">Bog'lanish</Link>
                  </li>
                </ul>
              </div>
              <div className="tugmalar">
                <div className="til-wrapper" ref={tilRef}>
                  <button
                    className="tugma tugma-til"
                    onClick={() => setOchiqmi(!ochiqmi)}
                  >
                    <span className="globus-icon">🌐</span>
                    {tanlanganTil.nom}
                  </button>

                  {ochiqmi && (
                    <div className="til-dropdown">
                      {TILLAR.map((til) => (
                        <div
                          key={til.kod}
                          className={`til-item ${til.kod === tanlanganTil.kod ? 'til-item-faol' : ''}`}
                          onClick={() => tilTanlash(til)}
                        >
                          {til.nom}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <span className="ajratuvchi"></span>

                <button className="tugma tugma-ariza">
                  Ariza yuborish
                </button>
              </div>
            </div>
          </div>
          <Routes>
            <Route path='/' element={<Abdurahmon />}/>
            <Route path='Mrizo' element={<Mrizo />}/>
            <Route path='Umar' element={<Umar />}/>
            <Route path='Mumar' element={<Mumar />}/>
            <Route path='Asilbek' element={<Asilbek />}/>
            <Route path='Jasurbek' element={<Jasurbek />}/>
            <Route path='*' element={<Samandar />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App