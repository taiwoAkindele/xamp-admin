import Avatar from "../assets/images/Avatar.svg";
import { PERMISSIONS } from "../config/permissions";

export const tableHeader = [
  {
    key: "action",
    label: "Actions",
    _style: {
      backgroundColor: "#F9FAFB",
      width: "894px",
      borderColor: "#EAECF0",
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
    key: "level",
    label: "Level 1",
    _style: {
      backgroundColor: "#F9FAFB",
      width: "202px",
      borderColor: "#EAECF0",
      border: "0px 0px 1px 0px",
      borderRadius: "8px 0px 0px 8px",
      padding: "12px 24px 12px 24px",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#475467",
      fontWeight: 500,
    },
  },
];

export const tableData = [
  {
    title: "View Transactions",
    subtitle: "",
    value: PERMISSIONS?.VIEW_TRANSACTIONS,
  },
  {
    title: "Approve Transactions",
    subtitle: "",
    value: PERMISSIONS?.APPROVE_TRANSACTIONS,
  },
  {
    title: "View User Account",
    subtitle: "",
    value: PERMISSIONS?.VIEW_USER_ACCOUNT,
  },
  {
    title: "Perform action on user account",
    subtitle: "Block and approve user account",
    value: PERMISSIONS?.BLOCK_AND_APPROVE_USER_ACCOUNT,
  },
  { title: "View Listing", subtitle: "", value: PERMISSIONS?.VIEW_LISTINGS },
  {
    title: "Perform action on listings",
    subtitle: "Freeze, flag and approve listings",
    value: PERMISSIONS?.FREEZE_FLAG_APPROVE_LISTINGS,
  },
  {
    title: "Admin",
    subtitle: "View, add, promote and demote admin",
    value: PERMISSIONS?.VIEW_ADD_PROMOTE_DEMOTE_ADMINS,
  },
  {
    title: "Transaction Fees",
    subtitle: "Determine transaction fees and percentages",
    value: PERMISSIONS?.DETERMINE_TRANSACTIONS_FEES,
  },
  {
    title: "Set Timeframe",
    subtitle:
      "Approvals on listings, verifications, rent increment and tenancy termination",
    value: PERMISSIONS?.SET_TIMEFRAME,
  },
];

export const teamsTableHeader = [
  {
    key: "name",
    label: "Name",
    _style: {
      backgroundColor: "#F9FAFB",
      width: "650px",
      borderColor: "#EAECF0",
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
    key: "level",
    label: "Level",
    _style: {
      backgroundColor: "#F9FAFB",
      width: "202px",
      borderColor: "#EAECF0",
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
    key: "date",
    label: "Date Added",
    _style: {
      backgroundColor: "#F9FAFB",
      width: "150px",
      borderColor: "#EAECF0",
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
    key: "delete",
    label: "",
    _style: {
      backgroundColor: "#F9FAFB",
      width: "40px",
      borderColor: "#EAECF0",
      border: "0px 0px 1px 0px",
      borderRadius: "8px 0px 0px 8px",
      padding: "12px 24px 12px 24px",
    },
  },
  {
    key: "edit",
    label: "",
    _style: {
      backgroundColor: "#F9FAFB",
      width: "40px",
      borderColor: "#EAECF0",
      border: "0px 0px 1px 0px",
      borderRadius: "8px 0px 0px 8px",
      padding: "12px 24px 12px 24px",
    },
  },
];

export const teamsAccessTableHeader = [
  {
    key: "action",
    label: "Actions",
    _style: {
      backgroundColor: "#F9FAFB",
      width: "894px",
      borderColor: "#EAECF0",
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
    key: "level1",
    label: "Level 1",
    _style: {
      backgroundColor: "#F9FAFB",
      width: "202px",
      borderColor: "#EAECF0",
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
    key: "level2",
    label: "Level 2",
    _style: {
      backgroundColor: "#F9FAFB",
      width: "202px",
      borderColor: "#EAECF0",
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
    key: "level3",
    label: "Level 3",
    _style: {
      backgroundColor: "#F9FAFB",
      width: "202px",
      borderColor: "#EAECF0",
      border: "0px 0px 1px 0px",
      borderRadius: "8px 0px 0px 8px",
      padding: "12px 24px 12px 24px",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#475467",
      fontWeight: 500,
    },
  },
];

export const teamsAccessTableData = [
  {
    title: "View Transactions",
    subtitle: "",
    value: PERMISSIONS?.VIEW_TRANSACTIONS,
  },
  {
    title: "Approve Transactions",
    subtitle: "",
    value: PERMISSIONS?.APPROVE_TRANSACTIONS,
  },
  {
    title: "View User Account",
    subtitle: "",
    value: PERMISSIONS?.VIEW_USER_ACCOUNT,
  },
  {
    title: "Perform action on user account",
    subtitle: "Block and approve user account",
    value: PERMISSIONS?.BLOCK_AND_APPROVE_USER_ACCOUNT,
  },
  { title: "View Listing", subtitle: "", value: PERMISSIONS?.VIEW_LISTINGS },
  {
    title: "Perform action on listings",
    subtitle: "Freeze, flag and approve listings",
    value: PERMISSIONS?.FREEZE_FLAG_APPROVE_LISTINGS,
  },
  {
    title: "Admin",
    subtitle: "View, add, promote and demote admin",
    value: PERMISSIONS?.VIEW_ADD_PROMOTE_DEMOTE_ADMINS,
  },
  {
    title: "Transaction Fees",
    subtitle: "Determine transaction fees and percentages",
    value: PERMISSIONS?.DETERMINE_TRANSACTIONS_FEES,
  },
  {
    title: "Set Timeframe",
    subtitle:
      "Approvals on listings, verifications, rent increment and tenancy termination",
    value: PERMISSIONS?.SET_TIMEFRAME,
  },
];
