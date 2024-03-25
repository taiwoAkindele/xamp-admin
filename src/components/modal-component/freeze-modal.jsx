import React from "react";

import { ReactComponent as FreezeIcon } from "../../assets/icons/freeze-icon.svg";
import ModalComponent from ".";
import Button from "../button";

const FreezeModal = ({ show, onClose, onContinue }) => {
  return (
    <ModalComponent show={show} onClose={onClose}>
      <div className="flex flex-col gap-[4px] items-center justify-center">
        <FreezeIcon />
        <h5 className="text-[20px] font-semibold leading-[28px] text-[#101828]">
          Freeze Listing!
        </h5>
        <p className="text-[#475467] font-normal text-[14px] leading-[20px]">
          Are you sure you want to freeze this listing?
        </p>
      </div>
      <div className="flex items-center gap-[12px] pt-[28px]">
        <Button
          type="button"
          btnText="Cancel"
          onClick={onClose}
          containerClass="border-[#D0D5DD] bg-[#fff] text-[16px] text-[#344054] leading-[24px] font-medium"
        />

        <Button
          type="button"
          btnText="Continue"
          onClick={onContinue}
          containerClass="border-primary bg-[#023E8A] text-[16px] text-white leading-[24px] font-medium"
        />
      </div>
    </ModalComponent>
  );
};

export default FreezeModal;
