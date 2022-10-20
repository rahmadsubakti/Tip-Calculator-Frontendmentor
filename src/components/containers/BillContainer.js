import { NamedContainer, CustomTextBox } from "../unit";

import dollar from 'assets/images/icon-dollar.svg';

const BillContainer = ({handleChange}) => {
  return (
    <NamedContainer name="Bill" className="">
      <CustomTextBox image={dollar} initValue="0" handleChange={handleChange} />
    </NamedContainer>
  )
}

export default BillContainer;