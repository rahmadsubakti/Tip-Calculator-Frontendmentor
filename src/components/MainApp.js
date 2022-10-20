import { useState } from "react";

import {CalcSection, ResultSection} from "./Section";

import './_MainApp.scss';

const MainApp = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [numPeople, setNumPeople] = useState("");

  const handleBill = e => {
    let value = e.target.value;
    setBill(bill => value);
  }

  const handleTip = e => {
    let typeEl = e.target.getAttribute("type");
    let tipContainer = document.querySelector('.tips');
    let value = e.target.value;

    if (typeEl == "radio") {
      const customTip = tipContainer.querySelector('[type="number"]');
      customTip.value = '';

    } else {
      const radios = tipContainer.querySelectorAll('[type="radio"]');
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          radios[i].checked = false;
        }
      }
    }
    
    setTip(tip => value);
  }

  const handleNumPeople = value => {
    setNumPeople(numPeople => value);
  }

  return (
    <div className="main-app">
      <CalcSection handleBill={handleBill} handleNumPeople={handleNumPeople} handleTip={handleTip} />
      <ResultSection bill={bill} tip={tip} numPeople={numPeople} />
    </div>
  )
}

export default MainApp;