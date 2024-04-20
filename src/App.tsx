import './App.css'

import heartIcon from './assets/heart.svg'
import journalIcon from './assets/journal.svg'
import logo from './assets/logo.svg'
import searchIcon from './assets/search.svg'
import { useState } from 'react'

const data = [
  { src: 'photoPlaceholder.webp', name: "Настя, 18", underText: "была в течение недели", goal: "Решу, когда встречу" },
  { src: 'photoPlaceholder.webp', name: "Настя, 18", underText: "была в течение недели", goal: "Решу, когда встречу" },
  { src: 'photoPlaceholder.webp', name: "Настя, 18", underText: "была в течение недели", goal: "Решу, когда встречу" },
  { src: 'photoPlaceholder.webp', name: "Настя, 18", underText: "была в течение недели", goal: "Решу, когда встречу" },
  { src: 'photoPlaceholder.webp', name: "Настя, 18", underText: "была в течение недели", goal: "Решу, когда встречу" }
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
