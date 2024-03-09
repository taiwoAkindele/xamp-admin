import React, { useState } from "react";
import {
  Box,
  Button,
  ConfirmAction,
  ModalComponent,
} from "../../../../components";
import { CDataTable } from "@coreui/react";
import { ReactComponent as EditIcon } from "../../../../assets/icons/edit-pencil.svg";
import { ReactComponent as DeleteIcon2 } from "../../../../assets/icons/freeze-icon.svg";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/delete-icon.svg";
import { teamsTableData, teamsTableHeader } from "../../../../data/settings";

const TeamMembers = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showConfirmAction, setShowConfirmAction] = useState(false);
  return (
    <div>
      <Box>
        <CDataTable
          items={teamsTableData || []}
          fields={teamsTableHeader}
          selectable
          striped
          responsive
          scopedSlots={{
            name: (item) => (
              <td className="">
                <div className="flex items-center gap-[12px] py-[16px] px-[10px]">
                  <img src={item.image} alt={item.name} className="" />
                  <div className="flex flex-col">
                    <span className="text-[14px] leading-[20px] font-medium text-black200">
                      {item.name}
                    </span>
                    <span className="text-[14px] leading-[20px] font-normal text-gray600">
                      {item.email}
                    </span>
                  </div>
                </div>
              </td>
            ),
            level: (item) => (
              <td>
                <div className="py-[16px] px-[10px]">
                  <span className="text-[14px] leading-[20px] font-normal text-gray600">
                    {item.level}
                  </span>
                </div>
              </td>
            ),
            date: (item) => (
              <td>
                <div className="py-[16px] px-[10px]">
                  <span className="text-[14px] leading-[20px] font-normal text-gray600">
                    {item.date}
                  </span>
                </div>
              </td>
            ),
            delete: () => (
              <td>
                <div
                  onClick={() => setShowDeleteModal(true)}
                  className="py-[16px] px-[10px] cursor-pointer"
                >
                  <DeleteIcon />
                </div>
              </td>
            ),
            edit: () => (
              <td>
                <div className="py-[16px] px-[10px]">
                  <EditIcon />
                </div>
              </td>
            ),
          }}
        />
      </Box>
      {showDeleteModal && (
        <ModalComponent
          show={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
        >
          <div className="flex flex-col gap-[4px] items-center justify-center">
            <DeleteIcon2 />
            <h5 className="text-[20px] font-semibold leading-[28px] text-[#101828]">
              Delete member
            </h5>
            <p className="text-[#475467] font-normal text-[14px] leading-[20px]">
              Are you sure you want to remove this members?
            </p>
          </div>
          <div className="flex items-center gap-[12px] pt-[28px]">
            <Button
              type="button"
              btnText="Cancel"
              onClick={() => setShowDeleteModal(false)}
              className="border-[#D0D5DD] bg-[#fff] text-[16px] text-[#344054] leading-[24px] font-medium"
            />

            <Button
              type="button"
              btnText="Continue"
              onClick={() => {
                setShowConfirmAction(true);
                setShowDeleteModal(false);
              }}
              className="border-primary bg-[#F42727] text-[16px] text-white leading-[24px] font-medium"
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
    </div>
  );
};

export default TeamMembers;
