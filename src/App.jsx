import { Navigate, Route, Routes } from "react-router-dom";
import {
  ForgotPasswordPage,
  LoginPage,
  OtpPage,
  ResetPasswordPage,
  ResetPasswordSuccessPage,
} from "./pages";
import Layout from "./layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/verify-otp" element={<OtpPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route
        path="/reset-password-success"
        element={<ResetPasswordSuccessPage />}
      />
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}

export default App;
