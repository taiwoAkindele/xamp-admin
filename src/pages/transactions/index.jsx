import React, { useState } from "react";
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
import {
  FilterItems,
  transactionKey,
  transactionTableItems,
} from "../../data/transactions";

const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(transactionTableItems?.length / 10);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [tableItem, setTableItem] = useState({});
  const [showConfirmStatus, setShowConfirmStatus] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showConfirmAction, setShowConfirmAction] = useState(false);
  const [requestPermission, setRequestPermission] = useState(false);

  const paymentDetails = [
    { name: "Amount", value: "N1,005,000" },
    { name: "Transaction Type", value: "Withdrawal" },
    { name: "Date", value: "22 Jan 2022, 16:09:23" },
    { name: "Status", value: "Pending" },
  ];

  return (
    <div className="">
      <PageLayout
        pageTitle="Transactions"
        isSearchPresent={true}
        isFilterPresent={true}
        placeholder="Search by name, user ID"
        tableData={transactionTableItems}
        tableHeader={transactionKey}
        currentPage={currentPage}
        scopedSlots={{
          status: (item) => (
            <td>
              <Badge status={item.status} check="Pending" />
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
                  CD
                </span>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[18px] leading-[20px] text-center text-black300">
                  Cheyenne Dias
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
                      <Badge status={item.value} check="Pending" />
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
                  CD
                </span>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[18px] leading-[20px] text-center text-black300">
                  Cheyenne Dias
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
                      <Badge status={item.value} check="Pending" />
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
