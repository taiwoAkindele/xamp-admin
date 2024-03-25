import React, { useState } from "react";
import { Button, PageLayout } from "../../../../components";
import { ReactComponent as DateIcon } from "../../../../assets/icons/date-icon.svg";
import { tableData, tableHeader } from "../../../../data/adminlogs";
import DatePicker from "../../../../components/date-picker";

const Logs = () => {
  const [filterDate, setFilterDate] = useState(null);

  console.log(filterDate);
  return (
    <div>
      <PageLayout
        pageTitle="Logs"
        isSearchPresent={true}
        isPrimaryFilterPresent={true}
        placeholder="Search"
        isSecondaryFilterPresent={true}
        secondaryFilterText="Filter by date"
        secondaryFilter={
          <DatePicker
            date={filterDate}
            onSelectDate={setFilterDate}
            dateRenderProps={({ defaultValue, value, ...props }, ref) => {
              return (
                <div ref={ref}>
                  <Button
                    startIcon={<DateIcon />}
                    btnText={
                      new Date(filterDate).toLocaleDateString() ||
                      "Filter by date"
                    }
                    type="button"
                    // onClick={() => setShowSecondaryFilter(!showSecondaryFilter)}
                    width={100}
                    className="text-gray700 flex items-center gap-[8px]"
                  />
                </div>
              );
            }}
          />
        }
        tableHeader={tableHeader}
        tableData={tableData}
        filterText="Filter by name"
        scopedSlots={{
          action: () => (
            <td>
              <Button
                btnText="View Details"
                containerClass="border-[#023E8A] text-[#023E8A] h-[40px] font-medium text-[14px]"
              />
            </td>
          ),
        }}
      />
    </div>
  );
};

export default Logs;
