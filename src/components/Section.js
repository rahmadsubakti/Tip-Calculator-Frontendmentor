import { useContext } from "react";

import { BillContainer, TipContainer, NumOfPeopleContainer } from "./containers";
import { TipAmount, TotalAmount } from "./Amount";
import { handleContext } from "./AppContext";

import './_Section.scss';

const CalcSection = ({handleBill, handleTip, handleNumPeople}) => {
  return (
    <section className="calculator">
      <BillContainer />
      <TipContainer />
      <NumOfPeopleContainer />
    </section>
  )
}

const ResultSection = ({bill, tip, numPeople}) => {
  const {handleReset} = useContext(handleContext);
  return (
    <section className="result">
      <TipAmount bill={bill} tip={tip} numPeople={numPeople} />
      <TotalAmount bill={bill} tip={tip} numPeople={numPeople} />
      <button className="reset-btn" onClick={handleReset}>Reset</button>
    </section>
  )
}

export {CalcSection, ResultSection};