import { InfoMoney } from "./unit";

function TipAmount({bill, tip, numPeople}) {
  let value = bill * (tip / 100) / numPeople;
  value = isNaN(value) ? 0 : Math.floor(value * 100) / 100;
  return (
    <InfoMoney value={value}>
      <p>Tip Amount<br/><span>/ person</span></p>
    </InfoMoney>
  )
}

function TotalAmount({bill, tip, numPeople}) {
  bill = parseInt(bill);
  tip = parseInt(tip);
  numPeople = parseInt(numPeople);
  let total = bill + (bill * tip/100);
  let value = total / numPeople;
  value = isNaN(value) ? 0 : Math.floor(value * 100) / 100;
  return (
    <InfoMoney value={value}>
      <p>Total <br/><span>/ person</span></p>
    </InfoMoney>
  )
}

export {TipAmount, TotalAmount};