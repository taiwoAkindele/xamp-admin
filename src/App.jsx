import { Navigate, Route, Routes } from "react-router-dom";
import {
  ForgotPasswordPage,
  LoginPage,
  OtpPage,
  ResetPasswordPage,
  ResetPasswordSuccessPage,
} from "./pages";
import Layout from "./layout";
import { Suspense } from "react";
import Loader from "./components/loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default App;
