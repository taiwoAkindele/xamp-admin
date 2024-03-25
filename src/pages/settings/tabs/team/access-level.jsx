import React from "react";
import { CDataTable } from "@coreui/react";
import { Box } from "../../../../components";
import Checkbox from "../../../../components/inputs/checkbox";
import {
  teamsAccessTableData,
  teamsAccessTableHeader,
} from "../../../../data/settings";
import {
  LEVELONEPERMISSIONS,
  LEVELTHREEPERMISSIONS,
  LEVELTWOPERMISSIONS,
} from "../../../../config/permissions";

const AccessLevel = () => {
  return (
    <div className="flex flex-col gap-[32px]">
      <h1 className="text-[20px] leading-[23px] font-semibold text-black100">
        Access Level
      </h1>
      <Box>
        <CDataTable
          items={teamsAccessTableData || []}
          fields={teamsAccessTableHeader}
          selectable
          responsive
          scopedSlots={{
            action: (item) => (
              <td className="">
                <div className="flex flex-col py-[16px]">
                  <span className="font-medium text-[14px] text-black200">
                    {item.title}
                  </span>
                  {item.subtitle && (
                    <span className="font-normal text-[14px] text-gray600">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </td>
            ),
            level1: (item) => (
              <td>
                <div className="py-[16px]">
                  <Checkbox
                    checked={LEVELONEPERMISSIONS?.includes(item.value)}
                  />
                </div>
              </td>
            ),
            level2: (item) => (
              <td>
                <div className="py-[16px]">
                  <Checkbox
                    checked={LEVELTWOPERMISSIONS?.includes(item.value)}
                  />
                </div>
              </td>
            ),
            level3: (item) => (
              <td>
                <div className="py-[16px]">
                  <Checkbox
                    checked={LEVELTHREEPERMISSIONS?.includes(item.value)}
                  />
                </div>
              </td>
            ),
          }}
        />
      </Box>
    </div>
  );
};

export default AccessLevel;
