import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
    FiGrid, 
    FiPackage, 
    FiUsers, 
    FiBell, 
    FiSettings, 
    FiLogOut,
    FiChevronUp,
    FiChevronDown,
    FiSearch,
    FiUser
} from 'react-icons/fi';
import './adminLayout.scss';

const AdminLayout = () => {
    const [isProductsExpanded, setIsProductsExpanded] = useState(true);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Handle logout logic here
        navigate('/login');
    };

    const isActiveRoute = (path: string) => {
        return location.pathname === path;
    };

    const isProductsRoute = (path: string) => {
        return location.pathname.includes('/admin/products') || location.pathname.includes('/admin/categories');
    };

    return (
        <div className="adminLayout">
            {/* Left Sidebar */}
            <div className="adminSidebar">
                <div className="sidebarHeader">
                    <div className="logo">
                        <span className="logoIcon">∞</span>
                        <span className="logoText">Spodut</span>
                    </div>
                </div>

                <nav className="sidebarNav">
                    <ul className="navList">
                        <li className="navItem">
                            <Link to="/admin" className={`navLink ${isActiveRoute('/admin') ? 'active' : ''}`}>
                                <FiGrid className="navIcon" />
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li className="navItem">
                            <div 
                                className={`navLink ${isProductsRoute('/admin/products') ? 'active' : ''}`}
                                onClick={() => setIsProductsExpanded(!isProductsExpanded)}
                            >
                                <FiPackage className="navIcon" />
                                <span>Products</span>
                                {isProductsExpanded ? <FiChevronUp className="chevron" /> : <FiChevronDown className="chevron" />}
                            </div>
                            {isProductsExpanded && (
                                <ul className="subNavList">
                                    <li className="subNavItem">
                                        <Link 
                                            to="/admin/products" 
                                            className={`subNavLink ${isActiveRoute('/admin/products') ? 'active' : ''}`}
                                        >
                                            Product List
                                        </Link>
                                    </li>
                                    <li className="subNavItem">
                                        <Link 
                                            to="/admin/categories" 
                                            className={`subNavLink ${isActiveRoute('/admin/categories') ? 'active' : ''}`}
                                        >
                                            Categories
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="navItem">
                            <Link to="/admin/sales" className={`navLink ${isActiveRoute('/admin/sales') ? 'active' : ''}`}>
                                {/* <FiBarChart3 className="navIcon" /> */}
                                <span>Sales</span>
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to="/admin/customers" className={`navLink ${isActiveRoute('/admin/customers') ? 'active' : ''}`}>
                                <FiUsers className="navIcon" />
                                <span>Customers</span>
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to="/admin/analytics" className={`navLink ${isActiveRoute('/admin/analytics') ? 'active' : ''}`}>
                                {/* <FiBarChart3 className="navIcon" /> */}
                                <span>Analytics</span>
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to="/admin/notifications" className={`navLink ${isActiveRoute('/admin/notifications') ? 'active' : ''}`}>
                                <FiBell className="navIcon" />
                                <span>Notifications</span>
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to="/admin/settings" className={`navLink ${isActiveRoute('/admin/settings') ? 'active' : ''}`}>
                                <FiSettings className="navIcon" />
                                <span>Settings</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="sidebarFooter">
                    <button onClick={handleLogout} className="logoutBtn">
                        <FiLogOut className="logoutIcon" />
                        <span>Log out</span>
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="adminMain">
                <header className="adminHeader">
                    <div className="headerLeft">
                        <h1 className="pageTitle">
                            {location.pathname.includes('/admin/products') && 'Products'}
                            {location.pathname.includes('/admin/customers') && 'Customers'}
                            {location.pathname.includes('/admin/categories') && 'Categories'}
                            {location.pathname === '/admin' && 'Dashboard'}
                            {location.pathname.includes('/admin/sales') && 'Sales'}
                            {location.pathname.includes('/admin/analytics') && 'Analytics'}
                            {location.pathname.includes('/admin/notifications') && 'Notifications'}
                            {location.pathname.includes('/admin/settings') && 'Settings'}
                        </h1>
                    </div>

                    <div className="headerRight">
                        <div className="headerActions">
                            <button className="searchBtn">
                                <FiSearch className="searchIcon" />
                            </button>
                            <button className="notificationBtn">
                                <FiBell className="notificationIcon" />
                            </button>
                            <div className="userDropdown">
                                <button 
                                    className="userBtn"
                                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                                >
                                    <FiUser className="userIcon" />
                                    <FiChevronDown className="chevron" />
                                </button>
                                {isUserDropdownOpen && (
                                    <div className="userDropdownMenu">
                                        <Link to="/admin/profile" className="dropdownItem">Profile</Link>
                                        <Link to="/admin/settings" className="dropdownItem">Settings</Link>
                                        <button onClick={handleLogout} className="dropdownItem">Logout</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                <main className="adminContent">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
