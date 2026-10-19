import { useState } from 'react'

import './App.css'
import { OsztalyVezerlo } from './components/OsztalyVezerlo';
import { OsztalyAdatok } from './components/OsztalyAdatok';

function App() {

  const [jelenlevok, setJelenlevok] = useState(24);
  const [hangulat, setHangulat] = useState("Átlagos");

  const jelenletNovelese = () => {
    if (jelenlevok < 30) {
      setJelenlevok(jelenlevok + 1)
    }
  }
  const jelenletCsokkentese = () => {
    if (jelenlevok >=0) {
      setJelenlevok(jelenlevok - 1)
    }
  }

  const hangulatValtoztatas = () => {
    if (hangulat === "Átlagos") {
      setHangulat("Jó")
    }
    if (hangulat === "Jó") {
      setHangulat("Kiváló")
    }
    if (hangulat === "Kiváló") {
      setHangulat("Átlagos")
    }
  }



  return (
    <>

      <OsztalyAdatok
        jelenlevok={jelenlevok}
        hangulat={hangulat}
      ></OsztalyAdatok>

      <OsztalyVezerlo
        jelenletNovelese={jelenletNovelese}
        jelenletCsokkentese={jelenletCsokkentese}
        hangulatValtoztatas={hangulatValtoztatas}
      ></OsztalyVezerlo>


    </>
  )
}

export default App
