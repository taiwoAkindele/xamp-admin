import React from "react";
import { ReactComponent as XampLogo } from "../assets/images/xamp-white.svg";
import { ReactComponent as Listings } from "../assets/icons/listings.svg";
import { ReactComponent as ListingsActive } from "../assets/icons/listings-white.svg";
import { ReactComponent as Logout } from "../assets/icons/logout.svg";
import { ReactComponent as Settings } from "../assets/icons/settings.svg";
import { ReactComponent as Transactions } from "../assets/icons/transactions.svg";
import { ReactComponent as SettingsActive } from "../assets/icons/settings-white.svg";
import { ReactComponent as TransactionsActive } from "../assets/icons/transaction-white.svg";
import { ReactComponent as UsersActive } from "../assets/icons/users.svg";
import { ReactComponent as Users } from "../assets/icons/users-normal.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const navigation = [
    { name: "Users", href: "/users", icon: <Users />, active: <UsersActive /> },
    {
      name: "Listings",
      href: "/listings",
      icon: <Listings />,
      active: <ListingsActive />,
    },
    {
      name: "Transactions",
      href: "/transactions",
      icon: <Transactions />,
      active: <TransactionsActive />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <Settings />,
      active: <SettingsActive />,
    },
  ];

  return (
    <div className="relative">
      <div className="bg-sidebar flex flex-col justify-between fixed w-[280px] h-[100vh] pt-[32px] pb-[40px]">
        <div className="flex flex-col gap-[40px]">
          <div className="px-[24px]">
            <XampLogo />
          </div>
          <div className="flex flex-col gap-[12px] px-[16px]">
            {navigation?.map((item, i) => {
              const isActive =
                location.pathname === item.href ||
                (location.pathname
                  .split("/")[1]
                  .startsWith(item.href.split("/")[1]) &&
                  item.href !== "/");
              return (
                <Link
                  style={{
                    textDecoration: "none",
                    color: isActive ? "inherit" : "#BDBDBD",
                  }}
                  to={item.href}
                  key={i}
                  className={`${
                    isActive ? "text-white bg-[#BDBDBD]" : "text-[#BDBDBD]"
                  } flex gap-[8px] py-[8px] px-[12px] text-[16px] leading-[24px] font-medium rounded-[6px]`}
                >
                  {isActive ? item.active : item.icon}
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div
          onClick={() => navigate("/login")}
          className="py-[8px] px-[24px] cursor-pointer flex items-center gap-[8px]"
        >
          <Logout />
          <span className="font-medium text-[16px] leading-[24px] text-[#BDBDBD]">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
