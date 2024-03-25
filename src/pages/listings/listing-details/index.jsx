import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import {
  useGetListingQuery,
  useModifyListingStatusMutation,
} from "../../../api/listingSlice";
import { capitalizeFirstLetter } from "../../../utils";
import UnverifyModal from "../../../components/modal-component/unverify-modal";
import FreezeModal from "../../../components/modal-component/freeze-modal";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useSendOtpMutation } from "../../../api/authSlice";

const listingDocuments = [
  { icon: <FileType />, name: "Propety Documents.svg" },
  { icon: <FileType />, name: "Propety Documents.svg" },
  { icon: <FileType />, name: "Propety Documents.svg" },
];

const ListingDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetListingQuery(id);
  const { data: listing } = data || {};
  const { User: user } = listing || {};

  const [isShowMoreAmenities, setIsShowMoreActivities] = useState(false);
  const [amenities, setAmenities] = useState([]);
  const [freeze, setFreeze] = useState(false);
  const [flagIsUnverified, setFlagIsUnverified] = useState(false);
  const [showConfirmAction, setShowConfirmAction] = useState(false);
  const [changeVerificationStatus, { isLoading }] =
    useModifyListingStatusMutation();
  const [sendOtpToMail] = useSendOtpMutation();
  const { adminLevel } = useSelector((store) => store.auth);

  useEffect(() => {
    if (listing?.tags > 5 && !isShowMoreAmenities) {
      setAmenities(listing?.tags?.slice(0, 5));
    } else {
      setAmenities(listing?.tags);
    }
  }, [listing]);

  const handleVerificationOtp = () => {
    const payload = { email: user?.email };
    sendOtpToMail(payload)
      .unwrap()
      .then(() => {
        setShowConfirmAction(true);
        setFlagIsUnverified(false);
      })
      .catch((error) => {
        toast.error(error?.data?.message || "An error occurred, try again!");
      });
  };

  const handleConfirmAction = () => {
    if (flagIsUnverified) {
      const otp = localStorage.getItem("otp");
      const payload = { otp: otp };
      changeVerificationStatus({ payload: payload, id: id })
        .unwrap()
        .then(() => {
          localStorage.removeItem("otp");
          setShowConfirmAction(false);
        })
        .catch((error) => {
          toast.error(error?.data?.message || "An error occurred, try again!");
        });
    }
  };

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
            {capitalizeFirstLetter(listing?.title)}
          </h6>
          <p className="text-[16px] leading-[20px] font-normal text-black500">
            {capitalizeFirstLetter(listing?.address)}{" "}
            {capitalizeFirstLetter(listing?.city)}{" "}
            {capitalizeFirstLetter(listing?.country)}
          </p>
        </div>
        {adminLevel !== 1 && (
          <div className="flex items-center gap-[8px]">
            <Button
              btnText={listing?.isVerified ? "Flag as unverified" : "Verify"}
              onClick={() => setFlagIsUnverified(true)}
              type="button"
              width={100}
              containerClass="text-[#EA1212] h-[40px] border-[#EA1212] bg-[#fff] text-[16px] leading-[24px] font-medium flex items-center gap-[8px]"
            />

            <Button
              btnText={!listing?.approved ? "Approve" : "Unapprove"}
              // onClick={() => setShowModal(true)}
              type="button"
              width={100}
              containerClass="text-[#fff] border-[#023E8A] bg-[#023E8A] h-[40px] text-[16px] leading-[24px] font-medium flex items-center gap-[8px]"
            />
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-[12px]">
        <img
          src={listing?.images?.[0]}
          alt=""
          className="h-[388px] col-span-2 w-full object-cover rounded-l-[12px]"
        />
        <div className="flex flex-col gap-[12px]">
          <img
            src={listing?.images?.[1]}
            alt=""
            className="w-full h-[188px] object-cover rounded-r-[12px]"
          />
          <img
            src={listing?.images?.[2]}
            alt=""
            className="w-full h-[188px] object-cover rounded-r-[12px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px]">
        <Box className="col-span-2 p-[24px]">
          <div className="flex flex-col gap-[24px] border-b border-b-[#D0D5DD] pb-[32px] ">
            <h6 className="text-[18px] leading-[21px] font-semibold text-black100 capitalize">
              Property details
            </h6>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <div className="font-normal text-[16px] leading-[18px] text-black100">
                  <span className="font-semibold text-[16px] leading-[18px] text-black100">
                    {listing?.bedrooms}
                  </span>
                  Bed
                </div>
                <div className="font-normal text-[16px] leading-[18px] text-black100">
                  <span className="font-semibold text-[16px] leading-[18px] text-black100">
                    {listing?.bathrooms}
                  </span>
                  Baths
                </div>
              </div>
              <span className="font-semibold text-[20px] leading-[23px] text-black100">
                N{listing?.price}
              </span>
            </div>
            <p className="font-normal text-[16px] leading-[26px] text-black400">
              {listing?.description}
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
              {amenities?.map((item, i) => (
                <li
                  key={i}
                  className="list-disc text-[16px] leading-[20px] ml-[30px] text-subtext"
                >
                  {item}
                </li>
              ))}
            </ul>
            {listing?.tags?.length > 5 && (
              <span
                onClick={() => setIsShowMoreActivities(true)}
                className="text-[14px] cursor-pointer leading-[16px] font-medium text-black100"
              >
                {!isShowMoreAmenities ? "Show more" : "Show Less"}
              </span>
            )}
          </div>
          <div className="pt-[24px]">
            <div className="flex flex-col gap-[11px] pb-[24px]">
              <h6 className="text-[18px] leading-[22px] font-semibold text-black100 capitalize">
                Fees & Terms
              </h6>
              {listing?.Fees?.map((item) => (
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
                  N{listing?.price}
                </span>
              </div>
            </div>
          </div>
        </Box>
        <Box className="py-[24px] px-[20px] flex flex-col gap-[20px] h-max">
          <span className="font-semibold text-[16px] leading-[18px] text-black100">
            About Owner
          </span>
          <Owner />
          <div className="flex flex-col gap-[16px]">
            <h6 className="font-semibold text-[16px] leading-[18px] text-black100 capitalize">
              {user?.lastName} {user?.firstName}
            </h6>
            <p className="font-normal text-[14px] leading-[20px] text-subtext">
              {user?.bio || ""}
            </p>
          </div>
          <Button
            btnText="View owner profile"
            onClick={() => navigate(`/users/${user?.userId}`)}
            containerClass="bg-[#023E8A] font-medium text-[16px] leading-[24px]"
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
          onContinue={handleVerificationOtp}
        />
      )}
      {showConfirmAction && (
        <ModalComponent
          show={showConfirmAction}
          onClose={() => setShowConfirmAction(false)}
        >
          <ConfirmAction nextAction={handleConfirmAction} />
        </ModalComponent>
      )}
    </div>
  );
};

export default ListingDetails;
