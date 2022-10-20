import './_CustomRadioBtn.scss';

function CustomRadioBtn({name, value, handleChange}) {
  return (
    <div className="radio-container">
      <input type="radio" name={name} id="" value={value} onChange={handleChange} />
      <label htmlFor="test">{value}%</label>
    </div>
  )
}

export default CustomRadioBtn;