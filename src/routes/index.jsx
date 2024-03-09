import Listings from "../pages/listings";
import ListingDetails from "../pages/listings/listing-details";
import Settings from "../pages/settings";
import Transactions from "../pages/transactions";
import UsersPage from "../pages/users";
import UserDetails from "../pages/users/user-details";

export const protectedRoutes = [
  { path: "/users", element: <UsersPage /> },
  {
    path: "/users/:id",
    element: <UserDetails />,
  },
  { path: "/listings", element: <Listings /> },
  { path: "/listings/:id", element: <ListingDetails /> },
  { path: "/transactions", element: <Transactions /> },
  { path: "/settings", element: <Settings /> },
];
