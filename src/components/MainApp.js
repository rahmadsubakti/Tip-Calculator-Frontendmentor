import { useState } from "react";

import {CalcSection, ResultSection} from "./Section";
import { handleContext, stateContext } from "./AppContext";

import './_MainApp.scss';

const MainApp = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [numPeople, setNumPeople] = useState("");

  const handleBill = e => {
    let value = e.target.value;
    setBill(bill => parseFloat(value));
  }

  const handleTip = e => {
    let typeEl = e.target.getAttribute("type");
    let tipContainer = document.querySelector('.tips');
    let value = e.target.value;

    if (typeEl === "radio") {
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
    
    setTip(tip => parseFloat(value));
  }

  const handleNumPeople = value => {
    setNumPeople(numPeople => parseInt(value));
  }

  const handleReset = () => {
    setBill(bill => 0);
    setTip(tip => 0);
    setNumPeople(numPeople => '');
  }

  const states = {
    "bill": bill,
    "tip": tip,
    "numPeople": numPeople,
  }

  const handlers = {
    "handleBill": handleBill,
    "handleTip": handleTip,
    "handleNumPeople": handleNumPeople,
    "handleReset": handleReset,
  };

  return (
    <div className="main-app">
      <handleContext.Provider value={handlers}>
        <CalcSection />
      </handleContext.Provider>
      <handleContext.Provider value={handlers}>
        <stateContext.Provider value={states}>
          <ResultSection />
        </stateContext.Provider>
      </handleContext.Provider>
    </div>
  )
}

export default MainApp;