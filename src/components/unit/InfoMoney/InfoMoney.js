import './_InfoMoney.scss';

function InfoMoney({value, children}) {
  return (
    <div className="money-info">
      {children}
      <h1 className="value">
        ${value}
      </h1>
    </div>
  )
}

export default InfoMoney;