import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../../assets/icons/arrow-left.svg";
import { ReactComponent as LocationIcon } from "../../../assets/icons/location.svg";
import { ReactComponent as FileType } from "../../../assets/icons/file-type.svg";
import { ReactComponent as RightArrow } from "../../../assets/icons/right-direction.svg";
import { ReactComponent as Owner } from "../../../assets/images/owner.svg";
import {
  Box,
  Button,
  ConfirmAction,
  ModalComponent,
} from "../../../components";
import WhiteHouseLodge from "../../../assets/images/white-house-lodge-1.svg";
import WhiteHouseLodge2 from "../../../assets/images/white-house-lodge-2.svg";

const listingDocuments = [
  { icon: <FileType />, name: "Propety Documents.svg" },
  { icon: <FileType />, name: "Propety Documents.svg" },
  { icon: <FileType />, name: "Propety Documents.svg" },
];

const fees_terms = [
  { name: "Rent", fee: "N700, 000" },
  { name: "Agent Fee", fee: "N70, 000" },
  { name: "Caution Fee", fee: "N100, 000" },
  { name: "Legal Fee", fee: "N35, 000" },
  { name: "Service Fee", fee: "N100, 000" },
];

const amenities = [
  "Heater",
  "Ceiling fan",
  "Wardrobe",
  "Cable or Satellite Tv",
  "Air conditioning",
];

const ListingDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [showConfirmAction, setShowConfirmAction] = useState(false);
  return (
    <div className="flex flex-col gap-[20px]">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-[8px] cursor-pointer"
      >
        <ArrowLeft />
        <Link style={{ textDecoration: "none" }}>Back</Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="">
          <h6 className="font-semibold text-[24px] leading-[28px] text-black200 capitalize">
            White House Lodge
          </h6>
          <p className="text-[16px] leading-[20px] font-normal text-black500">
            100 Smith Street Collingwood VIC 3066 AU
          </p>
        </div>
        <Button
          btnText="Request Permission"
          type="button"
          width={100}
          onClick={() => setShowConfirmAction(true)}
          className="text-black400 h-[40px] text-[16px] leading-[24px] font-medium flex items-center gap-[8px]"
        />
      </div>
      <div className="flex gap-[12px]">
        <img
          src={WhiteHouseLodge}
          alt=""
          className="h-[388px] w-[755px] rounded-l-[12px]"
        />
        <div className="flex flex-col gap-[12px]">
          <img
            src={WhiteHouseLodge2}
            alt=""
            className="w-[312px] h-[188px] object-cover rounded-r-[12px]"
          />
          <img
            src={WhiteHouseLodge2}
            alt=""
            className="w-[312px] h-[188px] object-cover rounded-r-[12px]"
          />
        </div>
      </div>
      <div className="flex items-start gap-[32px]">
        <Box className="p-[24px] w-[712px]">
          <div className="flex flex-col gap-[24px] border-b border-b-[#D0D5DD] pb-[32px] ">
            <h6 className="text-[18px] leading-[21px] font-semibold text-black100 capitalize">
              Property details
            </h6>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <div className="font-normal text-[16px] leading-[18px] text-black100">
                  <span className="font-semibold text-[16px] leading-[18px] text-black100">
                    1
                  </span>
                  Bed
                </div>
                <div className="font-normal text-[16px] leading-[18px] text-black100">
                  <span className="font-semibold text-[16px] leading-[18px] text-black100">
                    2
                  </span>
                  Baths
                </div>
              </div>
              <span className="font-semibold text-[20px] leading-[23px] text-black100">
                N1,0000,000
              </span>
            </div>
            <p className="font-normal text-[16px] leading-[26px] text-black400">
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla.
            </p>
            <div className="flex items-center gap-[8px]">
              <LocationIcon />
              <span className="font-medium text-[16px] leading-[18px] text-black100">
                View on map
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-[16px] leading-[18px] text-black100 underline">
                Show more
              </span>
              <RightArrow />
            </div>
          </div>
          <div className="pt-[24px]">
            <h6 className="text-[18px] leading-[22px] font-semibold text-black100 capitalize">
              Amenities
            </h6>
            <ul className="flex flex-col gap-[8px]">
              {amenities.map((item, i) => (
                <li
                  key={i}
                  className="list-disc text-[16px] leading-[20px] ml-[30px] text-subtext"
                >
                  {item}
                </li>
              ))}
            </ul>
            <span className="text-[14px] leading-[16px] font-medium text-black100">
              See more
            </span>
          </div>
          <div className="pt-[24px]">
            <div className="flex flex-col gap-[11px] pb-[24px]">
              <h6 className="text-[18px] leading-[22px] font-semibold text-black100 capitalize">
                Fees & Terms
              </h6>
              {fees_terms.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <span className="font-normal text-[16px] leading-[18px] text-black100">{`${item.name}:`}</span>
                  <span className="font-normal text-[16px] leading-[18px] text-black100">
                    {item.fee}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-[12px] border-t-[0.5px] border-t-gray800">
                <span className="font-normal text-[16px] leading-[18px] text-black100">
                  Total:
                </span>
                <span className="font-semibold text-[16px] leading-[18px] text-black100">
                  N1, 005, 000
                </span>
              </div>
            </div>
          </div>
        </Box>
        <Box className="py-[24px] px-[20px] flex flex-col gap-[20px]">
          <span className="font-semibold text-[16px] leading-[18px] text-black100">
            About Owner
          </span>
          <Owner />
          <div className="flex flex-col gap-[16px]">
            <h6 className="font-semibold text-[16px] leading-[18px] text-black100 capitalize">
              ofunwa okafor
            </h6>
            <p className="font-normal text-[14px] leading-[20px] text-subtext">
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae.{" "}
            </p>
          </div>
          <Button
            btnText="View owner profile"
            className="bg-[#023E8A] font-medium text-[16px] leading-[24px]"
          />
        </Box>
      </div>
      <Box className="flex flex-col gap-[24px] p-[24px]">
        <span className="font-semibold text-[20px] leading-[20px] text-black300">
          Documents
        </span>
        <div className="grid grid-cols-3 gap-[16px]">
          {listingDocuments.map((file, i) => (
            <Box
              key={i}
              className="flex items-center gap-[12px] py-[8px] px-[11px]"
            >
              {file.icon}
              <span className="text-[14px] leading-[20px] font-medium text-black500">
                {file.name}
              </span>
            </Box>
          ))}
        </div>
      </Box>
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

export default ListingDetails;
