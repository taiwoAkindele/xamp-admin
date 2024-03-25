import React, { useState } from "react";
import {
  ActionContent,
  Badge,
  ConfirmAction,
  ModalComponent,
  PageLayout,
} from "../../components";
import { ReactComponent as ActionIcon } from "../../assets/icons/action.svg";
import { listingFields } from "../../data/listings";
import { useNavigate } from "react-router-dom";
import { useGetAllListingsQuery } from "../../api/listingSlice";
import { capitalizeFirstLetter } from "../../utils";
import FreezeModal from "../../components/modal-component/freeze-modal";
import UnverifyModal from "../../components/modal-component/unverify-modal";
import useDebounce from "../../hooks/useDebounce";
import { useSelector } from "react-redux";

const Listings = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 700);
  const queryParams = {
    page: currentPage || 1,
    limit: 10,
    q: debouncedSearchValue,
  };
  const { data, isFetching } = useGetAllListingsQuery(queryParams);
  const { listings: listingTableItems, total } = data?.data || {};

  const totalPages = Math.ceil(total / 10);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [tableItem, setTableItem] = useState({});
  const [freeze, setFreeze] = useState(false);
  const [flagIsUnverified, setFlagIsUnverified] = useState(false);
  const [showConfirmAction, setShowConfirmAction] = useState(false);
  const { adminLevel } = useSelector((store) => store.auth);

  return (
    <>
      <PageLayout
        pageTitle="Listings"
        isSearchPresent={true}
        isPrimaryFilterPresent={true}
        placeholder="Search"
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        loading={isFetching}
        tableData={listingTableItems}
        tableHeader={listingFields}
        currentPage={currentPage}
        scopedSlots={{
          status: (item) => (
            <td>
              <Badge
                status={item.isVerified ? "Verified" : "Unverified"}
                check="Unverified"
              />
            </td>
          ),
          title: (item) => <td>{capitalizeFirstLetter(item?.title)}</td>,
          owner: (item) => <td>{item?.User?.email}</td>,
          propertyType: (item) => (
            <td>{capitalizeFirstLetter(item?.propertyType)}</td>
          ),
          listingType: (item) => (
            <td>{capitalizeFirstLetter(item?.listingType)}</td>
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
              {isShowMenu && tableItem?.listingId === item?.listingId ? (
                <div className="absolute w-[186px] py-[4px] right-[30px] z-10 flex flex-col  bg-white border border-gray800 rounded-[8px] shadow-menu">
                  <ActionContent
                    show={
                      isShowMenu && tableItem?.listingId === item?.listingId
                    }
                    onClose={() => setIsShowMenu(false)}
                    menuItems={[
                      {
                        name: "View Property",
                        click: () =>
                          navigate(`${item?.listingId}`, { state: item }),
                      },
                      ...(adminLevel !== 1
                        ? [
                            {
                              name:
                                item?.isApproved === true
                                  ? "Unapprove"
                                  : "Approve",
                              // click: () => setIsClicked("approve"),
                            },
                          ]
                        : []),
                      ...(adminLevel !== 1
                        ? [
                            {
                              name:
                                item?.isVerified === true
                                  ? "Flag As Unverified"
                                  : "Verify Property",
                              click: () => {
                                setFlagIsUnverified(true);
                                setIsShowMenu(false);
                              },
                            },
                          ]
                        : []),
                      ...(adminLevel !== 1
                        ? [
                            {
                              name:
                                item?.isFrozen === true ? "UnFreeze" : "Freeze",
                              click: () => {
                                setFreeze(true);
                                setIsShowMenu(false);
                              },
                            },
                          ]
                        : []),
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
        <FreezeModal
          show={freeze}
          onClose={() => setFreeze(false)}
          onContinue={() => {
            setShowConfirmAction(true);
            setFreeze(false);
          }}
        />
      )}
      {flagIsUnverified && (
        <UnverifyModal
          show={flagIsUnverified}
          onClose={() => setFlagIsUnverified(false)}
          onContinue={() => {
            setShowConfirmAction(true);
            setFlagIsUnverified(false);
          }}
        />
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
