import React from 'react'
import Asilbek from './Asilbek/Asilbek'
import img from './img.png'
const App = () => {
  return (
    <div>
      <div className="tepa">
        <div className="bir">
        <div className="chap">
          <h1><i class="fa-solid fa-location-dot"></i> Buxoro shahar, Xo’ja Alovaddin ko’cha 81-uy</h1>
          <h1><i class="fa-solid fa-phone"></i> +998 90 339 80 06</h1>
        </div>
        <div className="ong">
          <a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://telegram.me"><i class="fa-brands fa-telegram"></i></a>
          <a href="https://facebook.com"><i class="fa-brands fa-facebook-f"></i></a>
        </div>
        </div>
        <div className="ikki">
          <img src={img} alt="" />
          <div className="navbar">
            <ul>
              <li>
                <a href=""></a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <Asilbek />
    </div>
  )
}

export default App