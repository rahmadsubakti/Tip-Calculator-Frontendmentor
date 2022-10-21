import { useContext } from "react";

import { NamedContainer, CustomRadioBtn, CustomTextBox } from "../unit";
import { handleContext } from "components/AppContext";

import './_TipContainer.scss';

const TipContainer = () => {
  const handleTip = useContext(handleContext).handleTip;

  const tips = [5, 10, 15, 25, 50];
  return (
    <NamedContainer name="Select Tip %" className="tip">
      <div className="tips">
      {tips.map(n => <CustomRadioBtn name="tip" value={n} handleChange={handleTip} />)}
      <CustomTextBox initValue="Custom" handleChange={handleTip} id="custom-tip"/>
      </div>
    </NamedContainer>
  )
}

export default TipContainer;