import React from 'react';
import { FiPackage, FiUsers, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import './adminDashboard.scss';

const AdminDashboard = () => {
    const stats = [
        {
            title: 'Total Products',
            value: '156',
            change: '+12%',
            changeType: 'positive',
            icon: FiPackage,
            color: '#6366f1'
        },
        {
            title: 'Total Customers',
            value: '2,847',
            change: '+8%',
            changeType: 'positive',
            icon: FiUsers,
            color: '#10b981'
        },
        {
            title: 'Total Sales',
            value: '$45,231',
            change: '+23%',
            changeType: 'positive',
            icon: FiDollarSign,
            color: '#f59e0b'
        },
        {
            title: 'Growth Rate',
            value: '12.5%',
            change: '+2.1%',
            changeType: 'positive',
            icon: FiTrendingUp,
            color: '#ef4444'
        }
    ];

    const recentProducts = [
        { id: 1, name: 'T-Shirt', category: 'Women Cloths', price: '$79.80', stock: 79, status: 'Active' },
        { id: 2, name: 'Shirt', category: 'Man Cloths', price: '$76.89', stock: 86, status: 'Active' },
        { id: 3, name: 'Pant', category: 'Kid Cloths', price: '$86.65', stock: 74, status: 'Active' },
        { id: 4, name: 'Sweater', category: 'Sweater', price: '$56.07', stock: 69, status: 'Draft' }
    ];

    const recentCustomers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2024-01-15', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2024-01-14', status: 'Active' },
        { id: 3, name: 'Mike Johnson', email: 'mike@example.com', joinDate: '2024-01-13', status: 'Active' },
        { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', joinDate: '2024-01-12', status: 'Inactive' }
    ];

    return (
        <div className="adminDashboard">
            {/* Stats Cards */}
            <div className="statsGrid">
                {stats.map((stat, index) => (
                    <div key={index} className="statCard">
                        <div className="statIcon" style={{ backgroundColor: stat.color + '20', color: stat.color }}>
                            <stat.icon />
                        </div>
                        <div className="statContent">
                            <h3 className="statTitle">{stat.title}</h3>
                            <div className="statValue">{stat.value}</div>
                            <div className={`statChange ${stat.changeType}`}>
                                {stat.change} from last month
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Grid */}
            <div className="dashboardGrid">
                {/* Recent Products */}
                <div className="dashboardCard">
                    <div className="cardHeader">
                        <h3>Recent Products</h3>
                        <button className="viewAllBtn">View All</button>
                    </div>
                    <div className="cardContent">
                        <div className="tableContainer">
                            <table className="dataTable">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentProducts.map((product) => (
                                        <tr key={product.id}>
                                            <td>
                                                <div className="productInfo">
                                                    <div className="productImage">
                                                        <div className="imagePlaceholder"></div>
                                                    </div>
                                                    <span>{product.name}</span>
                                                </div>
                                            </td>
                                            <td>{product.category}</td>
                                            <td>{product.price}</td>
                                            <td>{product.stock}</td>
                                            <td>
                                                <span className={`statusBadge ${product.status.toLowerCase()}`}>
                                                    {product.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Recent Customers */}
                <div className="dashboardCard">
                    <div className="cardHeader">
                        <h3>Recent Customers</h3>
                        <button className="viewAllBtn">View All</button>
                    </div>
                    <div className="cardContent">
                        <div className="tableContainer">
                            <table className="dataTable">
                                <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Email</th>
                                        <th>Join Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentCustomers.map((customer) => (
                                        <tr key={customer.id}>
                                            <td>
                                                <div className="customerInfo">
                                                    <div className="customerAvatar">
                                                        <div className="avatarPlaceholder"></div>
                                                    </div>
                                                    <span>{customer.name}</span>
                                                </div>
                                            </td>
                                            <td>{customer.email}</td>
                                            <td>{customer.joinDate}</td>
                                            <td>
                                                <span className={`statusBadge ${customer.status.toLowerCase()}`}>
                                                    {customer.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
