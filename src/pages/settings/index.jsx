import React, { useState } from "react";
import Account from "./tabs/account";
import Password from "./tabs/password";
import TeamSettings from "./tabs/team";
import TransactionSettings from "./tabs/transaction";
import ListingSettings from "./tabs/listing";
import AdvancedSettings from "./tabs/advanced";

const tabHeading = [
  "Account",
  "Password",
  "Team",
  "Transaction Setting",
  "Listing Setting",
  "Advanced Setting",
];

const Settings = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex items-center gap-[4px]">
        {tabHeading.map((item, i) => (
          <div
            key={item}
            onClick={() => setTab(i)}
            className={`${
              tab === i && "rounded-[6px] bg-[#F9FAFB]"
            } py-[8px] px-[12px] cursor-pointer`}
          >
            <span
              className={`${
                tab === i
                  ? "text-black200 font-semibold"
                  : "text-gray700 font-normal"
              } text-[16px] leading-[24px]`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
      <div className="">
        {tab === 0 && <Account />}
        {tab === 1 && <Password />}
        {tab === 2 && <TeamSettings />}
        {tab === 3 && <TransactionSettings />}
        {tab === 4 && <ListingSettings />}
        {tab === 5 && <AdvancedSettings />}
      </div>
    </div>
  );
};

export default Settings;
