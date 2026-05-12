import './App.css'
import { Header } from './Components/Header'
import { Body } from './Components/Body'
import { data } from "../src/Elements/CardObj"
import { useState } from 'react'

function App() {
  const [filtered,SetFiltered] = useState(data);
  const [popupCard,SetPopupCard] = useState(false);



  return (
    <> 
      <Header filtered={filtered} SetFiltered={SetFiltered} popupCard={popupCard} SetPopupCard={SetPopupCard} />
      <Body filtered={filtered} SetFiltered={SetFiltered} popupCard={popupCard} SetPopupCard={SetPopupCard} />
    </>
  )
}

export default App
