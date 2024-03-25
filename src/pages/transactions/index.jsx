import React, { useEffect, useState } from "react";
import {
  ActionContent,
  Badge,
  Button,
  ConfirmAction,
  ModalComponent,
  PageLayout,
} from "../../components";
import { ReactComponent as ActionIcon } from "../../assets/icons/action.svg";
import { ReactComponent as WarningIcon } from "../../assets/icons/warning-icon.svg";
import { FilterItems, transactionKey } from "../../data/transactions";
import {
  useGetAllTransactionsQuery,
  useGetTransactionQuery,
} from "../../api/transactionSlice";
import useDebounce from "../../hooks/useDebounce";
import { capitalizeFirstLetter } from "../../utils";

const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [tableItem, setTableItem] = useState({});
  const [showConfirmStatus, setShowConfirmStatus] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showConfirmAction, setShowConfirmAction] = useState(false);
  const [requestPermission, setRequestPermission] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 700);
  // const [searchQuery, setSearchQuery] = useState("");
  const queryParams = {
    page: currentPage || 1,
    limit: 10,
    q: debouncedValue,
  };
  const { data } = useGetAllTransactionsQuery(queryParams);
  const { metadata, transactions: transactionTableItems } = data?.data || {};
  const { total } = metadata || {};
  const totalPages = Math.ceil(total / 10);

  const { data: selectedTransaction } = useGetTransactionQuery(
    tableItem?.transactionId,
    {
      skip: !tableItem?.transactionId,
    }
  );

  const { data: singleTransaction } = selectedTransaction || {};

  const splittedDate = singleTransaction?.createdAt?.split("T");

  const paymentDetails = [
    {
      name: "Amount",
      value: singleTransaction?.amount?.toLocaleString() || "",
    },
    {
      name: "Transaction Type",
      value: capitalizeFirstLetter(singleTransaction?.transactionType),
    },
    {
      name: "Date",
      value: `${new Date(singleTransaction?.createdAt).toLocaleDateString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )} ${splittedDate?.[1]?.slice(0, 8)}`,
    },
    { name: "Status", value: singleTransaction?.status },
  ];

  console.log(showPaymentModal);

  return (
    <div className="">
      <PageLayout
        pageTitle="Transactions"
        isSearchPresent={true}
        isPrimaryFilterPresent={true}
        placeholder="Search by name, user ID"
        tableData={transactionTableItems}
        tableHeader={transactionKey}
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        currentPage={currentPage}
        setFilterValue={setFilterValue}
        scopedSlots={{
          status: (item) => (
            <td>
              <Badge
                status={capitalizeFirstLetter(item?.status)}
                check="Failed"
              />
            </td>
          ),
          userName: (item) => (
            <td>
              {item?.transactionType === "debit" ? (
                <>
                  {" "}
                  {item?.receiver?.firstName} {item?.receiver?.lastName}
                </>
              ) : (
                <>
                  {" "}
                  {item?.sender?.firstName} {item?.sender?.lastName}
                </>
              )}
            </td>
          ),
          date: (item) => (
            <td>
              {new Date(item?.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </td>
          ),
          amount: (item) => <td>{`N${item?.amount?.toLocaleString()}`}</td>,
          transactionType: (item) => (
            <td>{capitalizeFirstLetter(item?.transactionType)}</td>
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
              {isShowMenu &&
              tableItem?.transactionType === item?.transactionType &&
              tableItem?.transactionId === item?.transactionId ? (
                <div className="absolute w-[186px] py-[4px] right-[30px] z-10 flex flex-col  bg-white border border-gray800 rounded-[8px] shadow-menu">
                  <ActionContent
                    show={
                      isShowMenu &&
                      tableItem?.transactionId === item?.transactionId &&
                      tableItem?.transactionType === item?.transactionType
                    }
                    onClose={() => setIsShowMenu(false)}
                    menuItems={[
                      {
                        name: "View Transaction",
                        click: () => {
                          setShowPaymentModal(true);
                          setIsShowMenu(false);
                        },
                      },
                      {
                        name: item.status === "Pending" ? "Approve" : "Reject",
                        click: () => {
                          setShowConfirmStatus(true);
                          setIsShowMenu(false);
                        },
                      },
                    ]}
                  />
                </div>
              ) : null}
            </td>
          ),
        }}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        filterData={FilterItems}
      />
      {showConfirmStatus && (
        <ModalComponent
          show={showConfirmStatus}
          onClose={() => setShowConfirmStatus(false)}
          title="Transaction Details"
        >
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[12px] items-center justify-center">
              <div className="w-[72px] h-[72px] rounded-full bg-[#F2F5FA] flex items-center justify-center">
                <span className="text-[24px] leading-[32px] font-medium text-center text-[#0E294B]">
                  {tableItem?.transactionType === "debit" ? (
                    <>
                      {" "}
                      {tableItem?.receiver?.firstName?.charAt(0)}
                      {tableItem?.receiver?.lastName?.charAt(0)}
                    </>
                  ) : (
                    <>
                      {" "}
                      {tableItem?.sender?.firstName?.charAt(0)}
                      {tableItem?.sender?.lastName?.charAt(0)}
                    </>
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[18px] leading-[20px] text-center text-black300">
                  {tableItem?.transactionType === "debit" ? (
                    <>
                      {" "}
                      {tableItem?.receiver?.firstName}{" "}
                      {tableItem?.receiver?.lastName}
                    </>
                  ) : (
                    <>
                      {" "}
                      {tableItem?.sender?.firstName}{" "}
                      {tableItem?.sender?.lastName}
                    </>
                  )}
                </span>
                <span className="text-[16px] leading-[20px] text-center text-gray500">
                  {tableItem?.xampId || ""}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] w-[432px]">
              {paymentDetails?.map((item) => (
                <div key={item.name} className="flex items-center gap-[32px]">
                  <span className="text-[16px] leading-[24px] text-gray500 w-[212px]">
                    {item.name}
                  </span>
                  {item.name === "Status" ? (
                    <span className="">
                      <Badge status={item.value} check="Failed" />
                    </span>
                  ) : (
                    <span className="text-[16px] leading-[24px] text-black300 font-medium w-[212px]">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[4px]">
              <Button
                type="button"
                className="text-[16px] leading-[29px] text-[#fff] bg-[#023E8A] border-[#023E8A]"
                btnText="Approve Transaction"
                onClick={() => {
                  setShowConfirmStatus(false);
                  setShowConfirmAction(true);
                }}
              />
              <Button
                type="button"
                onClick={() => {
                  setShowConfirmStatus(false);
                  setShowConfirmAction(true);
                }}
                // containerClass="border border-[]"
                className="text-[16px] leading-[29px] text-[#EA1212] bg-[#fff] border-danger"
                btnText="Reject Transaction"
              />
            </div>
          </div>
        </ModalComponent>
      )}
      {showPaymentModal && (
        <ModalComponent
          show={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          title="Transaction Details"
        >
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[12px] items-center justify-center">
              <div className="w-[72px] h-[72px] rounded-full bg-[#F2F5FA] flex items-center justify-center">
                <span className="text-[24px] leading-[32px] font-medium text-center text-[#0E294B]">
                  {tableItem?.transactionType === "debit" ? (
                    <>
                      {" "}
                      {tableItem?.receiver?.firstName?.charAt(0)}
                      {tableItem?.receiver?.lastName?.charAt(0)}
                    </>
                  ) : (
                    <>
                      {" "}
                      {tableItem?.sender?.firstName?.charAt(0)}
                      {tableItem?.sender?.lastName?.charAt(0)}
                    </>
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[18px] leading-[20px] text-center text-black300">
                  {tableItem?.transactionType === "debit" ? (
                    <>
                      {" "}
                      {tableItem?.receiver?.firstName}{" "}
                      {tableItem?.receiver?.lastName}
                    </>
                  ) : (
                    <>
                      {" "}
                      {tableItem?.sender?.firstName}{" "}
                      {tableItem?.sender?.lastName}
                    </>
                  )}
                </span>
                <span className="text-[16px] leading-[20px] text-center text-gray500">
                  XAMP56873
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] w-[432px]">
              {paymentDetails?.map((item) => (
                <div key={item.name} className="flex items-center gap-[32px]">
                  <span className="text-[16px] leading-[24px] text-gray500 w-[212px]">
                    {item.name}
                  </span>
                  {item.name === "Status" ? (
                    <span className="">
                      <Badge
                        status={capitalizeFirstLetter(item.value)}
                        check="Failed"
                      />
                    </span>
                  ) : (
                    <span className="text-[16px] leading-[24px] text-black300 font-medium w-[212px]">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <Button
              className="text-[16px] leading-[29px] text-[#27292C]"
              onClick={() => {
                setShowPaymentModal(false);
                setRequestPermission(true);
              }}
              btnText="Request Permision"
            />
          </div>
        </ModalComponent>
      )}
      {showConfirmAction && (
        <ModalComponent
          show={showConfirmAction}
          onClose={() => setShowConfirmAction(false)}
        >
          <ConfirmAction nextAction={() => setShowConfirmAction(false)} />
        </ModalComponent>
      )}
      {requestPermission && (
        <ModalComponent
          show={requestPermission}
          onClose={() => setRequestPermission(false)}
        >
          <div className="flex flex-col gap-[4px] items-center justify-center">
            <WarningIcon />
            <h5 className="text-[20px] font-semibold leading-[28px] text-[#101828]">
              You don’t have permission to perform action!
            </h5>
            <p className="text-[#475467] font-normal text-[14px] leading-[20px]">
              Request permission from Admin to continue
            </p>
          </div>
          <Button
            type="button"
            btnText="Request Permission"
            onClick={() => {
              setRequestPermission(false);
            }}
            className="border-primary bg-[#023E8A] text-[16px] text-white leading-[24px] font-medium"
          />
        </ModalComponent>
      )}
    </div>
  );
};

export default Transactions;
