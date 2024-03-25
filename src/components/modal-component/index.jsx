import React from "react";
import { ReactComponent as Close } from "../../assets/icons/x-close.svg";
import { CModal } from "@coreui/react";
const ModalComponent = ({
  children,
  onClose,
  title,
  show,
  width,
  className,
}) => {
  return (
    <CModal
      show={show}
      onClose={onClose}
      centered
      closeOnBackdrop={true}
      backdrop={true}
      color="info"
    >
      <div
        className={`${className} p-[24px] bg-[#fff] rounded-[12px] ${
          width ? width : "w-[480px]"
        } flex flex-col justify-center gap-[20px]`}
      >
        <div
          className="cursor-pointer flex items-center justify-between"
          onClick={onClose}
        >
          <span className="font-semibold text-[18px] leading-[28px] text-black300">
            {title || ""}
          </span>
          <Close />
        </div>

        {children}
      </div>
    </CModal>
  );
};

export default ModalComponent;
