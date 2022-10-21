import { useContext } from "react";

import { NamedContainer, CustomTextBox } from "../unit";
import { handleContext } from "components/AppContext";
import dollar from 'assets/images/icon-dollar.svg';

const BillContainer = () => {
  const handleBill = useContext(handleContext).handleBill;

  return (
    <NamedContainer name="Bill" className="">
      <CustomTextBox image={dollar} initValue="0" handleChange={handleBill} />
    </NamedContainer>
  )
}

export default BillContainer;