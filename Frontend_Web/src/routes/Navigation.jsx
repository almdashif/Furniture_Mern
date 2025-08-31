import { Route, Routes, } from "react-router-dom";
import AboutUsPage from '../Components/AboutUs/AboutUsPage.tsx';
import NotFoundPage from '../Components/NotFound/NotFoundPage.tsx';
import CartPage from '../Modules/Cart/CartPage.tsx';
import Checkout from '../Modules/Checkout/Checkout.tsx';
import ContactUsPage from '../Modules/ContactUs/ContactUsPage.tsx';
import FaqPage from '../Modules/FAQ/FaqPage.tsx';
import Homepage from '../Modules/Homepage/Homepage.jsx';
import Layout from '../Modules/Layout/Layout.tsx';
import LoginPage from '../Modules/Auth/LoginPage.tsx';
import RegisterPage from '../Modules/Auth/RegisterPage.tsx';
import AdminLayout from '../Modules/Admin/AdminLayout.tsx';
import AdminDashboard from '../Modules/Admin/AdminDashboard.tsx';
import ProductsPage from '../Modules/Admin/ProductsPage.tsx';
import CustomersPage from '../Modules/Admin/CustomersPage.tsx';
import CategoriesPage from '../Modules/Admin/CategoriesPage.tsx';
import SettingsPage from '../Modules/Admin/SettingsPage.tsx';
import NotificationsPage from '../Modules/Admin/NotificationsPage.tsx';
import ShopPage from '../Modules/Shop/ShopPage.tsx';
import SinglePage from '../Modules/SingleProductPage/SinglePage.tsx';
import WishlistPage from '../Modules/Wishlist/WishlistPage.tsx';


function Navigation() {
  return (
    <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="customers" element={<CustomersPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
        </Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<SinglePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
      </Route>
    </Routes>
  );
}
export default Navigation