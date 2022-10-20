import './_CustomTextBox.scss';

function CustomTextBox({image, handleChange, initValue, id}) {
  return (
    <div className="text-container">
      {image && <img src={image} />}
      <input type="number" placeholder={initValue} onChange={handleChange} id={id}/>
    </div>
  )
}

export default CustomTextBox;