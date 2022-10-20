import { NamedContainer, CustomRadioBtn, CustomTextBox } from "../unit";

import './_TipContainer.scss';

const TipContainer = ({handleChange}) => {
  const tips = [5, 10, 15, 25, 50];
  return (
    <NamedContainer name="Select Tip %" className="tip">
      <div className="tips">
      {tips.map(n => <CustomRadioBtn name="tip" value={n} handleChange={handleChange} />)}
      <CustomTextBox initValue="Custom" handleChange={handleChange} id="custom-tip"/>
      </div>
    </NamedContainer>
  )
}

export default TipContainer;