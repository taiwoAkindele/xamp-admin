import React, { useState } from "react";
import { AddAdminForm, Button, ModalComponent } from "../../../../components";
import TeamMembers from "./team-members";
import AccessLevel from "./access-level";
import { useGetAdminTeamQuery } from "../../../../api/settingsSlice";

const TeamSettings = () => {
  const [isAddAdminOpen, setIsAddAdminOpen] = useState(false);
  const { data } = useGetAdminTeamQuery();
  const { data: adminTeam } = data || {};

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-[24px] font-semibold leading-[28px] text-black300">
            Team
          </h1>
          <p className="text-[14px] leading-[20px] font-normal text-gray600">
            Admins can add and remove users and manage organization-level
            settings.
          </p>
        </div>
        <Button
          type="button"
          btnText="Add member"
          onClick={() => setIsAddAdminOpen(true)}
          width="max"
          containerClass="border-primary bg-[#023E8A] w-max text-[16px] text-white leading-[24px] font-medium"
        />
      </div>
      <TeamMembers adminTeamMembers={adminTeam} />
      <AccessLevel />
      {isAddAdminOpen && (
        <ModalComponent
          width="w-[640px]"
          show={isAddAdminOpen}
          onClose={() => setIsAddAdminOpen(false)}
        >
          <AddAdminForm />
        </ModalComponent>
      )}
    </div>
  );
};

export default TeamSettings;
