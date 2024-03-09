export const userBreakdown = [
  { title: "Number of landlords", number: "2,420" },
  { title: "Number of agents", number: "1,210" },
  { title: "Number of tenants", number: "31,416" },
];

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
    },
  },
];

export const userTableItems = [
  {
    id: 1,
    userName: "Cheynne Dias",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Verified",
    userStatus: "Blocked",
  },
  {
    id: 2,
    userName: "Ruben Dias",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Unverified",
    userStatus: "Active",
  },
  {
    id: 3,
    userName: "Cristiano Ronaldo",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Verified",
    userStatus: "Active",
  },
  {
    id: 4,
    userName: "Lionel Messi",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Verified",
    userStatus: "Blocked",
  },
  {
    id: 5,
    userName: "Virgil van Dijk",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Unverified",
    userStatus: "Active",
  },
  {
    id: 6,
    userName: "Luka Modric",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Verified",
    userStatus: "Blocked",
  },
  {
    id: 7,
    userName: "Marcus Rashford",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Verified",
    userStatus: "Blocked",
  },
  {
    id: 8,
    userName: "David De Gea",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Verified",
    userStatus: "Blocked",
  },
  {
    id: 9,
    userName: "Robert Lewandoski",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Verified",
    userStatus: "Blocked",
  },
  {
    id: 10,
    userName: "Kaka",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Verified",
    userStatus: "Blocked",
  },
  {
    id: 11,
    userName: "Toni Kross",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Verified",
    userStatus: "Blocked",
  },
  {
    id: 12,
    userName: "Wayne Rooney",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Verified",
    userStatus: "Blocked",
  },
  {
    id: 13,
    userName: "David Beckham",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Verified",
    userStatus: "Blocked",
  },
  {
    id: 14,
    userName: "Paul Scholes",
    email: "cheynnedias@gmail.com",
    userType: "Landlord",
    verificationStatus: "Verified",
    userStatus: "Blocked",
  },
];

export const ActionContent = (verificationStatus, userStatus, id) => {
  const menuItems = [
    { name: "View Account", click: `${id}` },
    {
      name: verificationStatus === "Verified" ? "Unverify User" : "Verify User",
    },
    { name: userStatus === "Blocked" ? "Unblock User" : "Block User" },
  ];

  return menuItems;
};

export const userDetails = [
  {
    name: "Account Type",
    value: "Tenants",
  },
  {
    name: "Gender",
    value: "Male",
  },
  {
    name: "Unique ID",
    value: "XAMP56873",
  },
  {
    name: "Phone Number",
    value: "+1 (555) 000-0000",
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
