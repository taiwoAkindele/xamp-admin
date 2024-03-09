import React from "react";
import { ReactComponent as Close } from "../../assets/icons/x-close.svg";
const ModalComponent = ({
  children,
  onClose,
  title,
  show,
  width,
  className,
}) => {
  return (
    <>
      {show && (
        <div
          className="fixed inset-0 z-1 bg-[rgba(0,0,0,0.5)]"
          onClick={onClose}
          show={show}
        ></div>
      )}
      <div className="fixed flex items-center justify-center inset-0 z-[1000]">
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
      </div>
    </>
  );
};

export default ModalComponent;
