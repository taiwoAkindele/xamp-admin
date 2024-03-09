import React from "react";
import AccountDetails from "./account-details";
import AccessLevel from "./access-level";

const Account = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-[40px]">
        <h1 className="text-[24px] font-semibold leading-[28px] text-black300">
          Account details
        </h1>
        <AccountDetails />
        <AccessLevel />
      </div>
    </div>
  );
};

export default Account;
