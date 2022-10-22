import './_CustomTextBox.scss';

// Only accept positive float numbers;

function CustomTextBox({image, handleChange, initValue, id}) {

  function handleKeyPress(e) {
    if (e.key === '-') {
      e.preventDefault();
    }
  }

  return (
    <div className="text-container">
      {image && <img src={image} alt="" />}
      <input type="number" className={!image && "text"} placeholder={initValue} onChange={handleChange} min={0} onKeyPress={handleKeyPress} />
    </div>
  )
}

export default CustomTextBox;