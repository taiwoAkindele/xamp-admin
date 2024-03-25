export const userFields = [
  {
    key: "userName",
    label: "User's Name",
    _style: {
      backgroundColor: "rgba(190, 207, 231, 0.2)",
      width: "217px",
      borderColor: "rgba(190, 207, 231, 0.2)",
      border: "0px 0px 1px 0px",
      borderRadius: "8px 0px 0px 8px",
      padding: "12px 24px 12px 24px",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#475467",
      fontWeight: 500,
    },
  },
  {
    label: "Email",
    key: "email",
    _style: {
      backgroundColor: "rgba(190, 207, 231, 0.2)",
      border: "1px",
      borderColor: "rgba(190, 207, 231, 0.2)",
      width: "228px",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#475467",
      fontWeight: 500,
    },
  },
  {
    label: "User Type",
    key: "userType",
    _style: {
      backgroundColor: "rgba(190, 207, 231, 0.2)",
      border: "1px",
      borderColor: "rgba(190, 207, 231, 0.2)",
      width: "177px",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#475467",
      fontWeight: 500,
    },
  },

  {
    label: "Verification Status",
    key: "verificationStatus",
    _style: {
      backgroundColor: "rgba(190, 207, 231, 0.2)",
      border: "1px",
      borderColor: "rgba(190, 207, 231, 0.2)",
      width: "178px",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#475467",
      fontWeight: 500,
    },
  },
  {
    label: "User Status",
    key: "userStatus",
    _style: {
      backgroundColor: "rgba(190, 207, 231, 0.2)",
      border: "1px",
      borderColor: "rgba(190, 207, 231, 0.2)",
      width: "178px",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#475467",
      fontWeight: 500,
    },
  },
  {
    label: "Action",
    key: "action",
    _style: {
      backgroundColor: "rgba(190, 207, 231, 0.2)",
      border: "0px 1px 1px 0px",
      borderColor: "rgba(190, 207, 231, 0.2)",
      borderRadius: "0px 8px 8px 0px",
      padding: "12px 24px 12px 24px",
      width: "86px",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#475467",
      fontWeight: 500,
    },
  },
];

export const userNextofKin = [
  {
    name: "Name",
    value: "Cristiano Ronaldo",
  },
  {
    name: "Phone Number",
    value: "+1 (555) 000-0000",
  },
  {
    name: "Email Address",
    value: "ronaldo@gmail.com",
  },
  {
    name: "Relationship",
    value: "Brother",
  },
];

export const fetchUserType = (user) => {
  const userTypes = [
    { value: 1, type: "Guest" },
    { value: 2, type: "Tenant" },
    { value: 3, type: "Landlord" },
  ];

  if (user) return userTypes?.find((item) => item.value === user);
};

// _style: {
//   backgroundColor: "rgba(190, 207, 231, 0.2)",
//   width: "217px",
//   borderColor: "rgba(190, 207, 231, 0.2)",
//   border: "0px 0px 1px 0px",
//   borderRadius: "8px 0px 0px 8px",
//   padding: "12px 24px 12px 24px",

// },
