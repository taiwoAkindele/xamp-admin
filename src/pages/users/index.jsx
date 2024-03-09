import React, { useState } from "react";
import {
  ActionContent,
  Badge,
  Box,
  NoInformation,
  PageLayout,
} from "../../components";
import { ReactComponent as ActionIcon } from "../../assets/icons/action.svg";
import { useNavigate } from "react-router-dom";
import { userBreakdown, userFields, userTableItems } from "../../data/users";

const UsersPage = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(userTableItems.length / 10);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [tableItem, setTableItem] = useState({});

  return (
    <div className="flex flex-col gap-[24px]">
      <h5 className="font-semibold text-[30px] leading-[38px] text-black200 capitalize">
        User management
      </h5>
      <div className="">
        <div className="flex items-center gap-[24px]">
          {userBreakdown.map((item, i) => (
            <Box
              key={i}
              className="flex flex-col gap-[16px] w-[300px] p-[24px]"
            >
              <span className="font-medium text-[16px] leading-[24px] text-black200">
                {item.title}
              </span>
              <span className="font-semibold text-[32px] leading-[37px] text-black100">
                {item.number}
              </span>
            </Box>
          ))}
        </div>
        <PageLayout
          isFilterPresent={true}
          isSearchPresent={true}
          tableData={userTableItems}
          tableHeader={userFields}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          scopedSlots={{
            userStatus: (item) => (
              <td>
                <Badge status={item.userStatus} check="Blocked" />
              </td>
            ),
            verificationStatus: (item) => (
              <td>
                <Badge status={item.verificationStatus} check="Unverified" />
              </td>
            ),
            action: (item) => (
              <td className="">
                <div className="relative flex items-center justify-center">
                  <ActionIcon
                    onClick={() => {
                      setTableItem(item);
                      setIsShowMenu(!isShowMenu);
                    }}
                    className="cursor-pointer"
                  />
                </div>
                {isShowMenu && tableItem.userName === item.userName ? (
                  <div className="absolute w-[186px] py-[4px] right-[30px] z-10 flex flex-col  bg-white border border-gray800 rounded-[8px] shadow-menu">
                    <ActionContent
                      show={isShowMenu && tableItem.userName === item.userName}
                      onClose={() => setIsShowMenu(false)}
                      menuItems={[
                        {
                          name: "View Account",
                          click: () => {
                            console.log(item);
                            navigate(`${item.id}`);
                          },
                        },
                        {
                          name:
                            item.verificationStatus === "Verified"
                              ? "Unverify User"
                              : "Verify User",
                        },
                        {
                          name:
                            item.userStatus === "Blocked"
                              ? "Unblock User"
                              : "Block User",
                        },
                      ]}
                    />
                  </div>
                ) : null}
              </td>
            ),
          }}
        />
      </div>
      {/* <NoInformation /> */}
    </div>
  );
};

export default UsersPage;
