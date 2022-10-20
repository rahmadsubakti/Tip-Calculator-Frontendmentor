import { useState } from "react";

import { NamedContainer, CustomTextBox } from "../unit";

import person from 'assets/images/icon-person.svg';


function NumOfPeopleContainer({handleValueChange}) {
  const [errZero, setErrZero] = useState(false);

  const handleChange = e => {
    let value = e.target.value;
    if (value == 0) {
      setErrZero(errZero => true);
    } else {
      setErrZero(errZero => false);
      //Remove this if logic
      if (handleValueChange) {
        handleValueChange(value);
      }
    }
  }

  return (
    <NamedContainer name="Number of People" className="with-err">
      {errZero && <p className="err-msg">Can't be zero</p>}
      <CustomTextBox image={person} initValue="0" handleChange={handleChange}/>
    </NamedContainer>
  )
}

export default NumOfPeopleContainer;