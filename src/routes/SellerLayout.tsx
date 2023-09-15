import { SellEase } from "assets/icons";
import NavBar from "components/nav-bar/NavBar";
import AddProductPage from "pages/AddProductPage";
import SellerDashboard from "pages/Dashboard";
import ProductPage from "pages/ProductPage";
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
  {
    cta: "Products",
    path: "/seller/products",
  },
];

const title = () => <SellEase height={45} width={200} />;
const SellerLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar navBarItems={navBarItems} title={title()} />
      <div className="relative left-60 w-[calc(100%-15rem)] bg-[#F8F8F8] h-screen">
        <Routes>
          <Route path="/dashboard" element={<SellerDashboard />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Suspense>
  );
};
export default SellerLayout;
