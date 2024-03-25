import React, { useState } from "react";
import { ActionContent, Badge, Box, PageLayout } from "../../components";
import { ReactComponent as ActionIcon } from "../../assets/icons/action.svg";
import { useNavigate } from "react-router-dom";
import { fetchUserType, userFields } from "../../data/users";
import {
  useBlockOrUnblockUserMutation,
  useGetAllUsersQuery,
} from "../../api/userSlice";
import useDebounce from "../../hooks/useDebounce";
import { useSelector } from "react-redux";

const UsersPage = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [tableItem, setTableItem] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 700);
  const queryParams = { page: currentPage || 1, limit: 10, q: debouncedValue };
  const { data, isFetching } = useGetAllUsersQuery(queryParams);
  const { result: userTableData, statistics } = data?.data || {};
  const totalPages = Math.ceil(userTableData?.length / 10);
  const { adminLevel } = useSelector((store) => store.auth);
  const [accountStatusFn, { isLoading: accountStatusLoading }] =
    useBlockOrUnblockUserMutation();

  const userBreakdown = [
    { title: "Number of landlords", number: statistics?.landlordCount || 0 },
    { title: "Number of agents", number: statistics?.guestCount || 0 },
    { title: "Number of tenants", number: statistics?.tenantCount || 0 },
  ];

  const handleAccountStatus = (item) => {
    let payload;
    if (item?.accountStatus === 1) {
      payload = { action: "block" };
    } else {
      payload = { action: "unblock" };
    }
    accountStatusFn({ payload: payload, id: id })
      .unwrap()
      .then((res) => {
        toast.success(res.message);
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <h5 className="font-semibold text-[30px] leading-[38px] text-black200 capitalize">
        User management
      </h5>
      <div className="">
        <div className="flex items-center gap-[24px]">
          {userBreakdown?.map((item, i) => (
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
          searchValue={searchValue}
          onSearchChange={(e) => setSearchValue(e.target.value)}
          isPrimaryFilterPresent={true}
          isSearchPresent={true}
          tableData={userTableData}
          tableHeader={userFields}
          currentPage={currentPage}
          totalPages={totalPages}
          loading={isFetching || accountStatusLoading}
          setCurrentPage={setCurrentPage}
          scopedSlots={{
            userStatus: (item) => (
              <td>
                <Badge
                  status={item?.verifyStatus === 1 ? "Active" : "Blocked"}
                  check="Blocked"
                />
              </td>
            ),
            verificationStatus: (item) => (
              <td>
                <Badge
                  status={item.accountStatus === 1 ? "Verified" : "Unverified"}
                  check="Unverified"
                />
              </td>
            ),
            userName: (item) => (
              <td>
                {item?.lastName} {item?.firstName} {item?.middleName}
              </td>
            ),
            userType: (item) => <td>{fetchUserType(item?.role)?.type}</td>,
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
                {isShowMenu && tableItem?.userId === item?.userId ? (
                  <div className="absolute w-[186px] py-[4px] right-[30px] z-10 flex flex-col  bg-white border border-gray800 rounded-[8px] shadow-menu">
                    <ActionContent
                      show={isShowMenu && tableItem?.userId === item?.userId}
                      onClose={() => setIsShowMenu(false)}
                      menuItems={[
                        {
                          name: "View Account",
                          click: () => {
                            navigate(`${item?.userId}`);
                          },
                        },
                        ...(adminLevel !== 1
                          ? [
                              {
                                name:
                                  item?.verifyStatus === 1
                                    ? "Unverify User"
                                    : "Verify User",
                              },
                            ]
                          : []),
                        {
                          name:
                            item?.accountStatus === 1
                              ? "Unblock User"
                              : "Block User",
                          click: () => handleAccountStatus(item),
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
