import { BillContainer, TipContainer, NumOfPeopleContainer } from "./containers";
import { TipAmount, TotalAmount } from "./Amount";

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
  return (
    <section className="result">
      <TipAmount bill={bill} tip={tip} numPeople={numPeople} />
      <TotalAmount bill={bill} tip={tip} numPeople={numPeople} />
      <button className="reset-btn">Reset</button>
    </section>
  )
}

export {CalcSection, ResultSection};