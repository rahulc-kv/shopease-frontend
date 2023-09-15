import NavBar from "components/nav-bar/NavBar";
import AddProductPage from "pages/AddProductPage";
import SellerDashboard from "pages/Dashboard";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const navBarItems = [
  {
    cta: "Dashboard",
    path: "/seller/dashboard",
  },
  {
    cta: "Add product",
    path: "/seller/add-product",
  },
];

const SellerLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar navBarItems={navBarItems} />
      <Routes>
        <Route path="/dashboard" element={<SellerDashboard />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </Suspense>
  );
};
export default SellerLayout;
