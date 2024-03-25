import React from "react";
import { Box } from "../../../../components";

const AccountDetails = ({ user }) => {
  const userDetails = [
    { name: "Email Address", value: user?.email },
    { name: "Phone Number", value: user?.phoneNumber || "" },
  ];
  return (
    <div>
      <Box className="flex flex-col gap-[24px] p-[24px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[72px] h-[72px] bg-gray900 rounded-[200px] flex items-center justify-center">
            {user?.profileImage ? (
              <img src={user?.profileImage} alt="" className="" />
            ) : (
              <span className="text-[24px] leading-[32px] text-center font-medium text-[#42428E]">
                {user?.lastName?.charAt(0)}
                {user?.firstName?.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="font-semibold text-[22px] leading-[25px] text-black300">
              {user?.lastName} {user?.firstName}
            </span>
            <span className="text-gray500 text-[16px] leading-[20px]">
              Level {user?.level}
            </span>
          </div>
        </div>
        <div className="h-[1px] bg-[#D9D9D9]"></div>
        <div className="grid grid-cols-1 gap-y-[16px]">
          {userDetails.map((user) => (
            <div key={user.name} className="flex items-center">
              <span className="text-[16px] w-[246px] font-normal leading-[24px] text-gray500">
                {`${user.name}:`}
              </span>
              <span className="text-[15px] w-[246px] text-left font-medium leading-[24px] text-black300">
                {user.value}
              </span>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default AccountDetails;
