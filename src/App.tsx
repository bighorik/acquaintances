import './App.css'

import { useState } from 'react'
import heartIcon from './assets/heart.svg'
import journalIcon from './assets/journal.svg'
import logo from './assets/logo.svg'
import searchIcon from './assets/search.svg'

const data = [
  { src: '1.jpg', name: "Алиса, 25 лет", underText: "была в течение недели", goal: "Ищу настоящую любовь и готова к серьёзным отношениям." },

  { src: '2.jpg', name: "Анна, 30 лет", underText: "была вчера", goal: "Энергичная и жизнерадостная, люблю путешествовать и открывать новые места." },
  { src: '3.jpg', name: "Мария, 28 лет", underText: "была в течение недели", goal: "Умна, амбициозна и открыта для новых возможностей." },
  { src: '4.jpg', name: "Екатерина, 23 года", underText: "была в течение недели", goal: "Ищу партнёра, который разделяет мои интересы и увлечения." },
  { src: '5.jpg', name: "Ольга, 35 лет", underText: "была вчера", goal: "Верю в силу дружбы и готова стать лучшим другом для своего избранника." },
  { src: '6.jpg', name: "Светлана, 27 лет", underText: "была в течение недели", goal: "Ищу мужчину, который будет поддерживать меня во всех начинаниях." },
  { src: '7.jpg', name: "Дарья, 29 лет", underText: "была вчера", goal: "Готова к созданию крепкой и гармоничной семьи." },
  { src: '8.jpg', name: "Елена, 32 года", underText: "была вчера", goal: "Ищу мужчину, который будет уважать мои границы и личное пространство." },
  { src: '9.jpg', name: "Юлия, 24 года", underText: "была вчера", goal: "Люблю готовить и создавать уют в доме." },
  { src: '10.jpg', name: "Татьяна, 37 лет", underText: "была в течение недели", goal: "Ищу мужчину, который будет ценить мою независимость и самостоятельность." },
  { src: '11.jpg', name: "Виктория, 26 лет", underText: "была в течение недели", goal: "Уверена в себе и своих силах, готова к любым испытаниям." },
  { src: '12.jpg', name: "Ирина, 39 лет", underText: "была в течение недели", goal: "Ищу мужчину, который будет любить и поддерживать меня в трудные времена." },
  { src: '13.jpg', name: "Анастасия, 21 год", underText: "была в течение недели", goal: "Открыта для новых впечатлений и готова к экспериментам." },
  { src: '14.jpg', name: "Полина, 31 год", underText: "была вчера", goal: "Ищу мужчину, который будет разделять мои взгляды на жизнь." },
  { src: '15.jpg', name: "Валерия, 22 года", underText: "была вчера", goal: "Верю в силу любви и готова отдавать её без остатка." },
  { src: '16.jpg', name: "Софья, 34 года", underText: "была вчера", goal: "Ищу мужчину, который будет моим надёжным спутником на жизненном пути." },
  { src: '17.jpg', name: "Елизавета, 20 лет", underText: "была вчера", goal: "Ищу мужчину, который будет моим лучшим другом и опорой в жизни." },
  { src: '18.jpg', name: "Яна, 36 лет", underText: "была в течение недели", goal: "Готова к долгосрочным отношениям и созданию крепкой семьи." },

]

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <header>
        <img src={logo} alt='' />
        <div className="navItem">
          <img src={heartIcon} alt='' />
          <span>Знакомства</span>
        </div>
        <div className='navItem'>
          <img src={searchIcon} alt='' />
          <span>Поиск</span>
        </div>
        <div className='navItem'>
          <img src={journalIcon} alt='' />
          <span>Журнал</span>
        </div>
        <div className='divider' />
        <div className='navItem person'>
          <img src="" alt='' />
          <span>Вова</span>
          <span>{">"}</span>
        </div>

      </header>

      <div className="content">
        {data.map((e, i, arr) =>
          <div className={`card ${i < selected && "previous"}  `} style={{ zIndex: arr.length - i }}>
            <img src={e.src} />

            <div className="info">
              <h2>{e.name}</h2>
              <span className="underText">Из Санкт-Петербурга, {e.underText}</span>
              <span><b>Цель знакомства:</b> {e.goal}</span>
            </div>

            <div className='next'>
              <svg width="50" height="50" viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd" transform="rotate(90 12 12)">
                  <circle cx="12" cy="12" r="11" stroke="#FFF"></circle>
                  <path fill="#FFF" fillRule="nonzero" stroke="#FFF" d="M17 13.042l-.667.672-4.332-4.37-4.334 4.37L7 13.042 12 8z">
                  </path>
                </g>
              </svg>
            </div>
            <div className="controls">
              <div className={`back ${i !== 0 && "available"}`} onClick={() => { setSelected(i - 1) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fillRule="evenodd" stroke="white" strokeWidth="1.5"><circle cx="20" cy="20" r="19.25"></circle><path strokeLinecap="round" d="M24 12v16l-12-8z"></path></g></svg>
              </div>
              <div className="reject" onClick={() => { setSelected(i + 1) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="none" fillRule="evenodd" stroke="#FFF" strokeWidth="1.5"><circle cx="30" cy="30" r="29.25"></circle><path d="M20.02 19.747l20.54 21.429M40.56 19.747L20.02 41.176"></path></g></svg>
              </div>
              <div className="like" >
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="none" fillRule="evenodd" stroke="#FFF" strokeWidth="1.5"><circle cx="30" cy="30" r="29.25"></circle><path stroke-linecap="round" d="M29.845 23.193S27.504 20 22.922 20A6.92 6.92 0 0 0 16 26.922c0 3.94 2.085 7.185 4.957 9.713 2.592 2.281 5.73 4.135 8.888 5.519 3.162-1.384 6.296-3.238 8.89-5.519 2.874-2.528 4.957-5.774 4.957-9.713 0-3.824-3.1-6.922-6.923-6.922-4.58 0-6.924 3.193-6.924 3.193z"></path></g></svg>
              </div>
              <div className="gift">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.25" stroke="white" strokeWidth="1.5"></circle><rect x="11" y="15" width="18" height="5" stroke="#FFF" strokeWidth="1.5"></rect><rect x="13" y="23" width="14" height="6" stroke="#FFF" strokeWidth="1.5"></rect><path d="M20 15C20 15 21.5641 11 23.9817 11C26.3994 11 25.9706 13.8145 25.9706 15" stroke="#FFF" strokeWidth="1.5"></path><path d="M20 15C20 15 18.4359 11 16.0183 11C13.6006 11 14.0294 13.8145 14.0294 15" stroke="#FFF" strokeWidth="1"></path></svg>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default App
