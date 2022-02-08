import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./pages/Auth/Signin/Signin";
import Signup from "./pages/Auth/Signup/Signup";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import ProtectedAdmin from "./pages/ProtectedAdmin";
import Basket from "./pages/Basket/Basket";
import ErrorPage from "./pages/404/ErrorPage";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <div>
      <Navbar />

      <div id="content">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/basket" element={<Basket />} />
          </Route>
          <Route element={<ProtectedAdmin />}>
            <Route path="/admin/*" element={<Admin />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
