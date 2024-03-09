import React, { useState } from "react";
import {
  ActionContent,
  Badge,
  Button,
  ConfirmAction,
  ModalComponent,
  PageLayout,
} from "../../components";
import { ReactComponent as FreezeIcon } from "../../assets/icons/freeze-icon.svg";
import { ReactComponent as UnverifiedIcon } from "../../assets/icons/unverified-icon.svg";
import { ReactComponent as ActionIcon } from "../../assets/icons/action.svg";
import { listingFields, listingTableItems } from "../../data/listings";
import { useNavigate } from "react-router-dom";

const Listings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(listingTableItems.length / 10);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [tableItem, setTableItem] = useState({});
  const navigate = useNavigate();
  const [freeze, setFreeze] = useState(false);
  const [flagIsUnverified, setFlagIsUnverified] = useState(false);
  const [showConfirmAction, setShowConfirmAction] = useState(false);

  return (
    <>
      <PageLayout
        pageTitle="Listings"
        isSearchPresent={true}
        isFilterPresent={true}
        placeholder="Search"
        tableData={listingTableItems}
        tableHeader={listingFields}
        currentPage={currentPage}
        scopedSlots={{
          status: (item) => (
            <td>
              <Badge status={item.status} check="Unverified" />
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
              {isShowMenu && tableItem.propertyName === item.propertyName ? (
                <div className="absolute w-[186px] py-[4px] right-[30px] z-10 flex flex-col  bg-white border border-gray800 rounded-[8px] shadow-menu">
                  <ActionContent
                    show={
                      isShowMenu && tableItem.propertyName === item.propertyName
                    }
                    onClose={() => setIsShowMenu(false)}
                    menuItems={[
                      {
                        name: "View Property",
                        click: () => navigate(`${item.id}`, { state: item }),
                      },
                      {
                        name:
                          item.status === "Unapprove" ? "Approve" : "Unapprove",
                        // click: () => setIsClicked("approve"),
                      },
                      {
                        name:
                          item.status === "Verified"
                            ? "Flag As Unverified"
                            : "Verify Property",
                        click: () => {
                          setFlagIsUnverified(true);
                          setIsShowMenu(false);
                        },
                      },
                      {
                        name: item.status === "Freeze" ? "UnFreeze" : "Freeze",
                        click: () => {
                          setFreeze(true);
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
      />
      {freeze && (
        <ModalComponent show={freeze} onClose={() => setFreeze(false)}>
          <div className="flex flex-col gap-[4px] items-center justify-center">
            <FreezeIcon />
            <h5 className="text-[20px] font-semibold leading-[28px] text-[#101828]">
              Freeze Listing!
            </h5>
            <p className="text-[#475467] font-normal text-[14px] leading-[20px]">
              Are you sure you want to freeze this listing?
            </p>
          </div>
          <div className="flex items-center gap-[12px] pt-[28px]">
            <Button
              type="button"
              btnText="Cancel"
              onClick={() => setFreeze(false)}
              className="border-[#D0D5DD] bg-[#fff] text-[16px] text-[#344054] leading-[24px] font-medium"
            />

            <Button
              type="button"
              btnText="Continue"
              onClick={() => {
                setShowConfirmAction(true);
                setFreeze(false);
              }}
              className="border-primary bg-[#023E8A] text-[16px] text-white leading-[24px] font-medium"
            />
          </div>
        </ModalComponent>
      )}
      {flagIsUnverified && (
        <ModalComponent
          show={freeze}
          onClose={() => setFlagIsUnverified(false)}
        >
          <div className="flex flex-col gap-[4px] items-center justify-center">
            <UnverifiedIcon />
            <h5 className="text-[20px] font-semibold leading-[28px] text-[#101828]">
              Flag as unverified!
            </h5>
            <p className="text-[#475467] font-normal text-[14px] leading-[20px]">
              Are you sure you want to flag this listing?
            </p>
          </div>
          <div className="flex items-center gap-[12px] pt-[28px]">
            <Button
              type="button"
              btnText="Cancel"
              onClick={() => setFlagIsUnverified(false)}
              className="border-[#D0D5DD] bg-[#fff] text-[16px] text-[#344054] leading-[24px] font-medium"
            />

            <Button
              type="button"
              btnText="Continue"
              onClick={() => {
                setShowConfirmAction(true);
                setFlagIsUnverified(false);
              }}
              className="border-primary bg-[#023E8A] text-[16px] text-white leading-[24px] font-medium"
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
    </>
  );
};

export default Listings;
