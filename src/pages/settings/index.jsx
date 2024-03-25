import React, { useState } from "react";
import Account from "./tabs/account";
import Password from "./tabs/password";
import TeamSettings from "./tabs/team";
import TransactionSettings from "./tabs/transaction";
import ListingSettings from "./tabs/listing";
import AdvancedSettings from "./tabs/advanced";
import { useSelector } from "react-redux";
import { useGetAdminProfileQuery } from "../../api/profileSlice";
import Logs from "./tabs/admin-logs";

const tabHeading = [
  { level: 2, tab: "Account" },
  { level: 1, tab: "Password" },
  { level: 3, tab: "Team" },
  { level: 3, tab: "Transaction Setting" },
  { level: 3, tab: "Listing Setting" },
  { level: 3, tab: "Advanced Setting" },
  { level: 3, tab: "Logs" },
];

const Settings = () => {
  const [tab, setTab] = useState(0);
  const { adminLevel } = useSelector((store) => store.auth);
  const { data: response } = useGetAdminProfileQuery();
  const { data: user } = response || {};
  const { permissions } = user || {};

  localStorage.setItem("user", user?.email);

  const filteredTabHeadings =
    adminLevel === 1 || adminLevel === 2
      ? tabHeading?.filter((item) => item?.level <= 2)
      : tabHeading;

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex items-center gap-[4px]">
        {filteredTabHeadings?.map((item, i) => (
          <div
            key={item?.tab}
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
              {item?.tab}
            </span>
          </div>
        ))}
      </div>
      <div className="">
        {tab === 0 && <Account user={user} permissions={permissions} />}
        {tab === 1 && <Password user={user} />}
        {tab === 2 && <TeamSettings />}
        {tab === 3 && <TransactionSettings />}
        {tab === 4 && <ListingSettings />}
        {tab === 5 && <AdvancedSettings />}
        {tab === 6 && <Logs />}
      </div>
    </div>
  );
};

export default Settings;
