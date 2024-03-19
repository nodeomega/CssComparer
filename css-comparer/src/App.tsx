// import { useState } from 'react'
import './App.scss'
import CssTextComparer from './components/cssTextComparer/CssTextComparer'

function App() {
  const defaultText = "The quick brown fox jumped over the lazy dog.";
  const defaultCss = "color:white;\nbackground-color:black;\nfont-family:\"Times New Roman\";"

  return (
    <>
      <div className="text-compare">
        <CssTextComparer heading="CSS Text Test #1" text={defaultText} initialCss={defaultCss} />
        <CssTextComparer heading="CSS Text Test #2" text={defaultText} initialCss={defaultCss} />
      </div>      
    </>
  )
}

export default App
