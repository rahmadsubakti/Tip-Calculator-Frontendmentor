import { useContext } from "react";
import { InfoMoney } from "./unit";

import { stateContext } from "./AppContext";

// someone please suggest a good name
const floatValue = value => (isNaN(value) || !isFinite(value)) ? 0 : Math.floor(value * 100) / 100;

function TipAmount() {
  let {bill, tip, numPeople} = useContext(stateContext);
  let value = bill * (tip / 100) / numPeople
  value = floatValue(value);
  return (
    <InfoMoney value={value}>
      <p>Tip Amount<br/><span>/ person</span></p>
    </InfoMoney>
  )
}

function TotalAmount() {
  let {bill, tip, numPeople} = useContext(stateContext);
  let total = bill + (bill * tip/100);
  let value = total / numPeople;
  value = floatValue(value);
  return (
    <InfoMoney value={value}>
      <p>Total <br/><span>/ person</span></p>
    </InfoMoney>
  )
}

export {TipAmount, TotalAmount};