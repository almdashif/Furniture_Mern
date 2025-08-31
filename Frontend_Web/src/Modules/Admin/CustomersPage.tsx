import React, { useState } from 'react';
import { FiFilter, FiPlus, FiChevronDown, FiMoreVertical, FiEdit, FiTrash2, FiEye, FiMail, FiPhone } from 'react-icons/fi';
import './customersPage.scss';

const CustomersPage = () => {
    const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);
    const [showAddCustomer, setShowAddCustomer] = useState(false);

    const customers = [
        { 
            id: 1, 
            name: 'John Doe', 
            email: 'john.doe@example.com', 
            phone: '+1 (555) 123-4567',
            joinDate: '2024-01-15', 
            status: 'Active',
            totalOrders: 12,
            totalSpent: '$1,234.56',
            avatar: '/avatar1.jpg'
        },
        { 
            id: 2, 
            name: 'Jane Smith', 
            email: 'jane.smith@example.com', 
            phone: '+1 (555) 234-5678',
            joinDate: '2024-01-14', 
            status: 'Active',
            totalOrders: 8,
            totalSpent: '$876.43',
            avatar: '/avatar2.jpg'
        },
        { 
            id: 3, 
            name: 'Mike Johnson', 
            email: 'mike.johnson@example.com', 
            phone: '+1 (555) 345-6789',
            joinDate: '2024-01-13', 
            status: 'Active',
            totalOrders: 15,
            totalSpent: '$2,156.78',
            avatar: '/avatar3.jpg'
        },
        { 
            id: 4, 
            name: 'Sarah Wilson', 
            email: 'sarah.wilson@example.com', 
            phone: '+1 (555) 456-7890',
            joinDate: '2024-01-12', 
            status: 'Inactive',
            totalOrders: 3,
            totalSpent: '$234.12',
            avatar: '/avatar4.jpg'
        },
        { 
            id: 5, 
            name: 'David Brown', 
            email: 'david.brown@example.com', 
            phone: '+1 (555) 567-8901',
            joinDate: '2024-01-11', 
            status: 'Active',
            totalOrders: 22,
            totalSpent: '$3,456.78',
            avatar: '/avatar5.jpg'
        },
        { 
            id: 6, 
            name: 'Emily Davis', 
            email: 'emily.davis@example.com', 
            phone: '+1 (555) 678-9012',
            joinDate: '2024-01-10', 
            status: 'Active',
            totalOrders: 6,
            totalSpent: '$567.89',
            avatar: '/avatar6.jpg'
        }
    ];

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedCustomers(customers.map(c => c.id));
        } else {
            setSelectedCustomers([]);
        }
    };

    const handleSelectCustomer = (customerId: number, checked: boolean) => {
        if (checked) {
            setSelectedCustomers([...selectedCustomers, customerId]);
        } else {
            setSelectedCustomers(selectedCustomers.filter(id => id !== customerId));
        }
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'active': return 'green';
            case 'inactive': return 'red';
            case 'pending': return 'orange';
            default: return 'gray';
        }
    };

    return (
        <div className="customersPage">
            <div className="pageHeader">
                <div className="headerLeft">
                    <h2>Customers</h2>
                    <p className="customerCount">Total: {customers.length} customers</p>
                </div>
                <div className="headerRight">
                    <button className="filterBtn">
                        <FiFilter className="filterIcon" />
                        Filter
                    </button>
                    <button className="seeAllBtn">See All</button>
                    <button className="addCustomerBtn" onClick={() => setShowAddCustomer(true)}>
                        <FiPlus className="plusIcon" />
                        + Add Customer
                    </button>
                </div>
            </div>

            <div className="customersTable">
                <table className="dataTable">
                    <thead>
                        <tr>
                            <th>
                                <input 
                                    type="checkbox" 
                                    checked={selectedCustomers.length === customers.length}
                                    onChange={(e) => handleSelectAll(e.target.checked)}
                                />
                            </th>
                            <th>
                                Customer
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Contact Info
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Join Date
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Status
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Orders
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Total Spent
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td>
                                    <input 
                                        type="checkbox" 
                                        checked={selectedCustomers.includes(customer.id)}
                                        onChange={(e) => handleSelectCustomer(customer.id, e.target.checked)}
                                    />
                                </td>
                                <td>
                                    <div className="customerInfo">
                                        <div className="customerAvatar">
                                            <div className="avatarPlaceholder"></div>
                                        </div>
                                        <div className="customerDetails">
                                            <span className="customerName">{customer.name}</span>
                                            <span className="customerId">ID: {customer.id}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="contactInfo">
                                        <div className="contactItem">
                                            <FiMail className="contactIcon" />
                                            <span>{customer.email}</span>
                                        </div>
                                        <div className="contactItem">
                                            <FiPhone className="contactIcon" />
                                            <span>{customer.phone}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>{customer.joinDate}</td>
                                <td>
                                    <span className={`statusBadge ${getStatusColor(customer.status)}`}>
                                        {customer.status}
                                    </span>
                                </td>
                                <td className="orders">{customer.totalOrders}</td>
                                <td className="totalSpent">{customer.totalSpent}</td>
                                <td>
                                    <div className="actionButtons">
                                        <button className="actionBtn" title="View Details">
                                            <FiEye />
                                        </button>
                                        <button className="actionBtn" title="Edit">
                                            <FiEdit />
                                        </button>
                                        <button className="actionBtn" title="Delete">
                                            <FiTrash2 />
                                        </button>
                                        <button className="actionBtn" title="More">
                                            <FiMoreVertical />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button className="paginationBtn">← Previous</button>
                <div className="pageNumbers">
                    <button className="pageBtn active">1</button>
                    <button className="pageBtn">2</button>
                    <button className="pageBtn">3</button>
                    <span className="pageDots">...</span>
                    <button className="pageBtn">8</button>
                    <button className="pageBtn">9</button>
                    <button className="pageBtn">10</button>
                </div>
                <button className="paginationBtn">Next →</button>
            </div>

            {/* Add Customer Modal */}
            {showAddCustomer && (
                <div className="modalOverlay" onClick={() => setShowAddCustomer(false)}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <div className="modalHeader">
                            <h3>Add New Customer</h3>
                            <button className="closeBtn" onClick={() => setShowAddCustomer(false)}>×</button>
                        </div>
                        <div className="modalBody">
                            <form className="addCustomerForm">
                                <div className="formRow">
                                    <div className="formGroup">
                                        <label>First Name</label>
                                        <input type="text" placeholder="Enter first name" />
                                    </div>
                                    <div className="formGroup">
                                        <label>Last Name</label>
                                        <input type="text" placeholder="Enter last name" />
                                    </div>
                                </div>
                                <div className="formRow">
                                    <div className="formGroup">
                                        <label>Email</label>
                                        <input type="email" placeholder="Enter email address" />
                                    </div>
                                    <div className="formGroup">
                                        <label>Phone</label>
                                        <input type="tel" placeholder="Enter phone number" />
                                    </div>
                                </div>
                                <div className="formGroup">
                                    <label>Address</label>
                                    <textarea placeholder="Enter full address" rows={3}></textarea>
                                </div>
                                <div className="formRow">
                                    <div className="formGroup">
                                        <label>City</label>
                                        <input type="text" placeholder="Enter city" />
                                    </div>
                                    <div className="formGroup">
                                        <label>State</label>
                                        <input type="text" placeholder="Enter state" />
                                    </div>
                                    <div className="formGroup">
                                        <label>ZIP Code</label>
                                        <input type="text" placeholder="Enter ZIP code" />
                                    </div>
                                </div>
                                <div className="formActions">
                                    <button type="button" className="cancelBtn" onClick={() => setShowAddCustomer(false)}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="saveBtn">
                                        Save Customer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomersPage;
