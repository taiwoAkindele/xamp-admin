import React from "react";

const ActionContent = ({ menuItems, onClose, show }) => {
  return (
    <>
      {show && (
        <div className="fixed inset-0 z-1" onClick={onClose} show={show}></div>
      )}
      <div className="z-[1000]">
        {menuItems?.map((item, i) => (
          <div
            onClick={item.click}
            key={`${item}${i}`}
            style={{ textDecoration: "none" }}
            className="font-normal cursor-pointer text-[14px] leading-[20px] text-black300 py-[9px] px-[10px]"
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default ActionContent;
