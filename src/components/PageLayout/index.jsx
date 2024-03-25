import React, { useState } from "react";
import Box from "../../components/box";
import { CDataTable } from "@coreui/react";
import { Button, NoInformation, SearchInput } from "../../components";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron-right.svg";

const PageLayout = ({
  pageTitle,
  isSearchPresent,
  isPrimaryFilterPresent,
  placeholder,
  tableData,
  tableHeader,
  currentPage,
  scopedSlots,
  totalPages,
  setCurrentPage,
  filterData,
  searchValue,
  onSearchChange,
  loading,
  setFilterValue,
  filterText,
  isSecondaryFilterPresent,
  secondaryFilter,
}) => {
  const [selected, setSelected] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filter, setFilter] = useState(null);

  const buttonTypes = [
    {
      name: "Previous",
      onClick: currentPage !== 1 ? () => setCurrentPage(currentPage - 1) : null,
    },
    {
      name: "Next",
      onClick:
        totalPages !== currentPage
          ? () => setCurrentPage(currentPage + 1)
          : null,
    },
  ];

  const handleClick = (item) => {
    if (openDropdown) {
      setOpenDropdown(false);
      setSelected(null);
      setFilter(null);
    } else {
      setOpenDropdown(true);
      setSelected(item.title);
      setFilter(item);
    }
    setShowFilters(false);
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <h5 className="font-semibold text-[30px] leading-[38px] text-black200 capitalize">
        {pageTitle}
      </h5>
      <Box className="flex flex-col gap-[16px] p-[24px]">
        <div className="flex items-center justify-between">
          {isSearchPresent && (
            <SearchInput
              placeholder={placeholder}
              value={searchValue}
              onChange={onSearchChange}
              containerClass="w-[400px]"
            />
          )}
          <div className="flex items-center gap-[16px]">
            <div className="">
              {isPrimaryFilterPresent && (
                <Button
                  startIcon={<FilterIcon />}
                  btnText={filterText || "Filter"}
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  width={100}
                  className="text-gray700 flex items-center gap-[8px]"
                />
              )}
              {showFilters && filterData?.length > 0 && (
                <div className="absolute z-[1000] w-[186px] right-[20px] rounded-[8px] flex flex-col gap-[16px] border border-[#EAECF0] py-[11px] px-[16px] bg-white text-[14px] leading-[20px] text-black300">
                  {filterData?.map((filter) => (
                    <div key={filter.title} className="">
                      {filter?.subFilter?.length > 0 ? (
                        <>
                          <div
                            onClick={() => handleClick(filter)}
                            className="flex items-center justify-between cursor-pointer"
                          >
                            {filter.title}
                            <ChevronRight />
                          </div>
                        </>
                      ) : (
                        <div
                          className=""
                          onClick={() => setFilterValue(filter?.title)}
                        >
                          {filter.title}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {openDropdown && selected === filter.title && (
                <div className="absolute z-[1000] w-[186px] right-[20px] rounded-[8px] flex flex-col gap-[16px] border border-[#EAECF0] py-[11px] px-[16px] bg-white text-[14px] leading-[20px] text-black300">
                  {filter?.subFilter?.map((item) => (
                    <div
                      key={item.title}
                      onClick={() => {
                        setFilterValue(item?.title);
                        setOpenDropdown(false);
                      }}
                      className="cursor-pointer"
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="">
              {isSecondaryFilterPresent && (
                <div className="">{secondaryFilter}</div>
              )}
            </div>
          </div>
        </div>
        <CDataTable
          items={tableData || []}
          fields={tableHeader}
          hover
          selectable
          responsive
          loading={loading}
          clickableRows
          activePage={currentPage}
          itemsPerPage={10}
          scopedSlots={scopedSlots || {}}
          noItemsViewSlot={<NoInformation />}
        />
        <div className="flex items-center justify-between">
          <span className="font-medium text-[14px] leading-[20px] text-gray700">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-[12px]">
            {buttonTypes.map((btn, i) => (
              <Button
                key={i}
                btnText={btn.name}
                onClick={btn.onClick}
                type="button"
                width={100}
                containerClass="text-gray700 h-[40px] flex items-center gap-[8px]"
              />
            ))}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default PageLayout;
