import React, { useState } from "react";
import { ReactComponent as ArrowLeft } from "../../../assets/icons/arrow-left.svg";
import NinImage from "../../../assets/images/nin.svg";
import { ReactComponent as FileType } from "../../../assets/icons/file-type.svg";
import { ReactComponent as SophiaEstate } from "../../../assets/images/sophia-estate.svg";
import { ReactComponent as OliviaEstate } from "../../../assets/images/olivia-estate.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button, Box, Badge, ConfirmAction } from "../../../components";
import { userDetails, userNextofKin } from "../../../data/users";
import ModalComponent from "../../../components/modal-component";

const userFiles = [
  { icon: <FileType />, name: "National Identity File.svg", image: NinImage },
  { icon: <FileType />, name: "National Identity File.svg", image: NinImage },
  { icon: <FileType />, name: "National Identity File.svg", image: NinImage },
];

const userApartments = [
  {
    image: <SophiaEstate />,
    name: "Sophia Estate",
    location: "100 Smith Street Collingwood VIC 3066 AU",
    landlord: "Cheyenne Dias",
  },
  {
    image: <OliviaEstate />,
    name: "Olivia Estate",
    location: "100 Smith Street Collingwood VIC 3066 AU",
    landlord: "Cheyenne Dias",
  },
];

const UserDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  console.log({ showImage, selectedImage });

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex items-center gap-[8px]">
        <ArrowLeft />
        <Link style={{ textDecoration: "none" }} to={-1}>
          Back
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <h6 className="font-semibold text-[24px] leading-[28px] text-black200 capitalize">
          User Details
        </h6>
        <Button
          btnText="Request Permission"
          onClick={() => setShowModal(true)}
          type="button"
          width={100}
          className="text-black400 h-[40px] text-[16px] leading-[24px] font-medium flex items-center gap-[8px]"
        />
      </div>

      <Box className="flex flex-col gap-[24px] p-[24px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[72px] h-[72px] bg-gray900 rounded-[200px] flex items-center justify-center">
            <span className="text-[24px] leading-[32px] text-center font-medium text-[#42428E]">
              M
            </span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="font-semibold text-[22px] leading-[25px] text-black300">
              Michael Levin
            </span>
            <span className="text-gray500 text-[16px] leading-[20px]">
              Jordynlevin@gmail.com
            </span>
          </div>
          <Badge status="Verified" check="Unverified" />
        </div>
        <div className="h-[1px] bg-[#D9D9D9]"></div>
        <div className="grid grid-cols-2 gap-y-[16px]">
          {userDetails.map((user) => (
            <div className="flex items-center">
              <span className="text-[16px] w-[246px] font-normal leading-[24px] text-gray500">
                {`${user.name}:`}
              </span>
              <span className="text-[15px] w-[246px] text-left font-medium leading-[24px] text-black300">
                {user.value}
              </span>
            </div>
          ))}
        </div>
      </Box>

      <Box className="flex flex-col gap-[24px] p-[24px]">
        <span className="font-semibold text-[20px] leading-[20px] text-black300">
          Next of Kin
        </span>

        <div className="h-[1px] bg-[#D9D9D9]"></div>
        <div className="grid grid-cols-2 gap-y-[16px]">
          {userNextofKin.map((user) => (
            <div className="flex items-center">
              <span className="text-[16px] w-[246px] font-normal leading-[24px] text-gray500">
                {`${user.name}:`}
              </span>
              <span className="text-[15px] w-[246px] text-left font-medium leading-[24px] text-black300">
                {user.value}
              </span>
            </div>
          ))}
        </div>
      </Box>
      <Box className="flex flex-col gap-[24px] p-[24px]">
        <span className="font-semibold text-[20px] leading-[20px] text-black300">
          Documents
        </span>
        <div className="grid grid-cols-3 gap-[16px]">
          {userFiles.map((file, i) => (
            <Box
              key={i}
              className="flex items-center gap-[12px] py-[8px] px-[11px] cursor-pointer"
              onClick={() => {
                setSelectedImage(file.image);
                setShowImage(true);
              }}
            >
              {file.icon}
              <span className="text-[14px] leading-[20px] font-medium text-black500">
                {file.name}
              </span>
            </Box>
          ))}
        </div>
      </Box>
      <Box className="flex flex-col gap-[24px] p-[24px]">
        <span className="font-semibold text-[20px] leading-[20px] text-black300">
          Apartments
        </span>
        <div className="flex items-center gap-[24px]">
          {userApartments.map((appt, i) => (
            <div
              key={i}
              onClick={() => navigate(`/listings/${i}`)}
              className="flex flex-col gap-[12px] cursor-pointer"
            >
              {appt.image}
              <span className="font-semibold text-[18px] leading-[21px] text-black100">
                {appt.name}
              </span>
              <span className="font-normal text-[14px] leading-[16px] text-subtext">
                {appt.location}
              </span>
              <div className="flex items-center gap-[8px]">
                <span className="font-normal text-[14px] leading-[16px] text-subtext">
                  Landlord:
                </span>
                <span className="font-medium text-[14px] leading-[16px] text-black300">
                  {appt.landlord}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Box>
      {showModal && (
        <ModalComponent show={showModal} onClose={() => setShowModal(false)}>
          <ConfirmAction nextAction={() => setShowModal(false)} />
        </ModalComponent>
      )}
      {showImage ? (
        <ModalComponent show={showImage} onClose={() => setShowImage(false)}>
          <img src={selectedImage} alt="user" className="" />
        </ModalComponent>
      ) : null}
    </div>
  );
};

export default UserDetails;
