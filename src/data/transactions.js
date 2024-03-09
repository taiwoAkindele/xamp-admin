export const transactionKey = [
  {
    label: "Username",
    key: "userName",
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
    label: "Date",
    key: "date",
    _style: {
      backgroundColor: "rgba(190, 207, 231, 0.2)",
      border: "1px",
      borderColor: "rgba(190, 207, 231, 0.2)",
      width: "228px",
    },
  },
  {
    label: "Amount",
    key: "amount",
    _style: {
      backgroundColor: "rgba(190, 207, 231, 0.2)",
      border: "1px",
      borderColor: "rgba(190, 207, 231, 0.2)",
      width: "177px",
    },
  },

  {
    label: "Transaction Type",
    key: "transactionType",
    _style: {
      backgroundColor: "rgba(190, 207, 231, 0.2)",
      border: "1px",
      borderColor: "rgba(190, 207, 231, 0.2)",
      width: "178px",
    },
  },
  {
    label: "Status",
    key: "status",
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

export const transactionTableItems = [
  {
    id: 1,
    userName: "Cristi",
    date: "22 Jan 2022",
    amount: "N1,005,000",
    transactionType: "Withdraw",
    status: "Pending",
  },
  {
    id: 2,
    userName: "Ronaldo",
    date: "22 Jan 2022",
    amount: "N1,005,000",
    transactionType: "Withdraw",
    status: "Pending",
  },
  {
    id: 3,
    userName: "Cristiano",
    date: "22 Jan 2022",
    amount: "N1,005,000",
    transactionType: "Withdraw",
    status: "Pending",
  },
  {
    id: 4,
    userName: "Cristiano Ronaldo",
    date: "22 Jan 2022",
    amount: "N1,005,000",
    transactionType: "Withdraw",
    status: "Pending",
  },
];

export const FilterItems = [
  {
    title: "User Type",
    subFilter: [{ title: "Landlord" }, { title: "Tenant" }],
  },
  {
    title: "Transaction Type",
    subFilter: [
      { title: "Payment" },
      { title: "Deposit" },
      { title: "Withdraw" },
    ],
  },
];
