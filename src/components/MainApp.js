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
          break;
        }
      }
    }
    
    setTip(tip => parseFloat(value));
  }

  const handleNumPeople = value => {
    setNumPeople(numPeople => parseInt(value));
  }

  /*This function needs to be refactory since it's ugly*/
  const handleReset = () => {
    // reset bill component
    const billEl = document.querySelector('.bill');
    const input = billEl.children[1].children[1];
    input.value = '';
    setBill(bill => 0);

    // reset tip component
    const tipContainer = document.querySelector('.tips');
    tipContainer.querySelector('[type="number"]').value = '';
    const radios = tipContainer.querySelectorAll('[type="radio"]');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        radios[i].checked = false;
        break;
      }
    }
    setTip(tip => 0);

    // reset numPeople Component
    const numPeopleContainer = document.querySelector('.with-err'); // since i give name it
    const input1 = numPeopleContainer.children[1].children[1];
    input1.value = '';
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