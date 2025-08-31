import React, { useState } from 'react';
import { FiFilter, FiPlus, FiChevronDown, FiMoreVertical, FiEdit, FiTrash2, FiEye, FiBell, FiMail, FiMessageSquare, FiAlertCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';
import './notificationsPage.scss';

const NotificationsPage = () => {
    const [selectedNotifications, setSelectedNotifications] = useState<number[]>([]);
    const [showAddNotification, setShowAddNotification] = useState(false);
    const [activeTab, setActiveTab] = useState('all');

    const notifications = [
        {
            id: 1,
            title: 'New Order Received',
            message: 'Order #ORD-2024-001 has been placed by John Doe',
            type: 'order',
            priority: 'high',
            status: 'unread',
            recipient: 'admin',
            createdAt: '2024-01-15 10:30:00',
            readAt: null,
            icon: FiBell
        },
        {
            id: 2,
            title: 'Low Stock Alert',
            message: 'Product "T-Shirt" is running low on stock (5 items remaining)',
            type: 'inventory',
            priority: 'medium',
            status: 'read',
            recipient: 'admin',
            createdAt: '2024-01-15 09:15:00',
            readAt: '2024-01-15 09:20:00',
            icon: FiAlertCircle
        },
        {
            id: 3,
            title: 'Payment Successful',
            message: 'Payment of $79.80 received for Order #ORD-2024-001',
            type: 'payment',
            priority: 'low',
            status: 'read',
            recipient: 'admin',
            createdAt: '2024-01-15 08:45:00',
            readAt: '2024-01-15 08:50:00',
            icon: FiCheckCircle
        },
        {
            id: 4,
            title: 'New Customer Registration',
            message: 'Jane Smith has registered as a new customer',
            type: 'user',
            priority: 'low',
            status: 'unread',
            recipient: 'admin',
            createdAt: '2024-01-15 08:30:00',
            readAt: null,
            icon: FiInfo
        },
        {
            id: 5,
            title: 'System Maintenance',
            message: 'Scheduled maintenance will begin at 2:00 AM EST',
            type: 'system',
            priority: 'medium',
            status: 'read',
            recipient: 'admin',
            createdAt: '2024-01-15 07:00:00',
            readAt: '2024-01-15 07:05:00',
            icon: FiInfo
        },
        {
            id: 6,
            title: 'Coupon Expiring Soon',
            message: 'Coupon "WELCOME20" will expire in 3 days',
            type: 'promotion',
            priority: 'medium',
            status: 'unread',
            recipient: 'admin',
            createdAt: '2024-01-15 06:30:00',
            readAt: null,
            icon: FiAlertCircle
        },
        {
            id: 7,
            title: 'Review Submitted',
            message: 'New 5-star review submitted for "Sofa Set"',
            type: 'review',
            priority: 'low',
            status: 'read',
            recipient: 'admin',
            createdAt: '2024-01-14 18:20:00',
            readAt: '2024-01-14 18:25:00',
            icon: FiMessageSquare
        },
        {
            id: 8,
            title: 'Inventory Update',
            message: 'Bulk inventory update completed successfully',
            type: 'inventory',
            priority: 'low',
            status: 'read',
            recipient: 'admin',
            createdAt: '2024-01-14 17:00:00',
            readAt: '2024-01-14 17:05:00',
            icon: FiCheckCircle
        }
    ];

    const notificationTypes = [
        { id: 'all', label: 'All', count: notifications.length },
        { id: 'order', label: 'Orders', count: notifications.filter(n => n.type === 'order').length },
        { id: 'inventory', label: 'Inventory', count: notifications.filter(n => n.type === 'inventory').length },
        { id: 'payment', label: 'Payments', count: notifications.filter(n => n.type === 'payment').length },
        { id: 'user', label: 'Users', count: notifications.filter(n => n.type === 'user').length },
        { id: 'system', label: 'System', count: notifications.filter(n => n.type === 'system').length },
        { id: 'promotion', label: 'Promotions', count: notifications.filter(n => n.type === 'promotion').length },
        { id: 'review', label: 'Reviews', count: notifications.filter(n => n.type === 'review').length }
    ];

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedNotifications(notifications.map(n => n.id));
        } else {
            setSelectedNotifications([]);
        }
    };

    const handleSelectNotification = (notificationId: number, checked: boolean) => {
        if (checked) {
            setSelectedNotifications([...selectedNotifications, notificationId]);
        } else {
            setSelectedNotifications(selectedNotifications.filter(id => id !== notificationId));
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority.toLowerCase()) {
            case 'high': return 'red';
            case 'medium': return 'orange';
            case 'low': return 'green';
            default: return 'gray';
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'order': return FiBell;
            case 'inventory': return FiAlertCircle;
            case 'payment': return FiCheckCircle;
            case 'user': return FiInfo;
            case 'system': return FiInfo;
            case 'promotion': return FiAlertCircle;
            case 'review': return FiMessageSquare;
            default: return FiBell;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'order': return '#6366f1';
            case 'inventory': return '#f59e0b';
            case 'payment': return '#10b981';
            case 'user': return '#8b5cf6';
            case 'system': return '#6b7280';
            case 'promotion': return '#ec4899';
            case 'review': return '#06b6d4';
            default: return '#6b7280';
        }
    };

    const filteredNotifications = activeTab === 'all' 
        ? notifications 
        : notifications.filter(n => n.type === activeTab);

    const unreadCount = notifications.filter(n => n.status === 'unread').length;

    return (
        <div className="notificationsPage">
            <div className="pageHeader">
                <div className="headerLeft">
                    <h2>Notifications</h2>
                    <p className="notificationCount">Total: {notifications.length} notifications ({unreadCount} unread)</p>
                </div>
                <div className="headerRight">
                    <button className="filterBtn">
                        <FiFilter className="filterIcon" />
                        Filter
                    </button>
                    <button className="markAllReadBtn">Mark All Read</button>
                    <button className="addNotificationBtn" onClick={() => setShowAddNotification(true)}>
                        <FiPlus className="plusIcon" />
                        + Add Notification
                    </button>
                </div>
            </div>

            <div className="notificationsContainer">
                <div className="notificationsSidebar">
                    <nav className="notificationsNav">
                        {notificationTypes.map((type) => (
                            <button
                                key={type.id}
                                className={`navTab ${activeTab === type.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(type.id)}
                            >
                                <span className="tabLabel">{type.label}</span>
                                <span className="tabCount">{type.count}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="notificationsContent">
                    <div className="notificationsTable">
                        <table className="dataTable">
                            <thead>
                                <tr>
                                    <th>
                                        <input 
                                            type="checkbox" 
                                            checked={selectedNotifications.length === filteredNotifications.length}
                                            onChange={(e) => handleSelectAll(e.target.checked)}
                                        />
                                    </th>
                                    <th>
                                        Notification
                                        <FiChevronDown className="sortIcon" />
                                    </th>
                                    <th>
                                        Type
                                        <FiChevronDown className="sortIcon" />
                                    </th>
                                    <th>
                                        Priority
                                        <FiChevronDown className="sortIcon" />
                                    </th>
                                    <th>
                                        Status
                                        <FiChevronDown className="sortIcon" />
                                    </th>
                                    <th>
                                        Time
                                        <FiChevronDown className="sortIcon" />
                                    </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredNotifications.map((notification) => {
                                    const TypeIcon = getTypeIcon(notification.type);
                                    return (
                                        <tr key={notification.id} className={notification.status === 'unread' ? 'unread' : ''}>
                                            <td>
                                                <input 
                                                    type="checkbox" 
                                                    checked={selectedNotifications.includes(notification.id)}
                                                    onChange={(e) => handleSelectNotification(notification.id, e.target.checked)}
                                                />
                                            </td>
                                            <td>
                                                <div className="notificationInfo">
                                                    <div className="notificationIcon" style={{ color: getTypeColor(notification.type) }}>
                                                        <TypeIcon />
                                                    </div>
                                                    <div className="notificationDetails">
                                                        <span className="notificationTitle">{notification.title}</span>
                                                        <span className="notificationMessage">{notification.message}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="typeBadge" style={{ backgroundColor: getTypeColor(notification.type) + '20', color: getTypeColor(notification.type) }}>
                                                    {notification.type}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`priorityBadge ${getPriorityColor(notification.priority)}`}>
                                                    {notification.priority}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`statusBadge ${notification.status}`}>
                                                    {notification.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="timeInfo">
                                                    <div className="createdTime">{notification.createdAt}</div>
                                                    {notification.readAt && (
                                                        <div className="readTime">Read: {notification.readAt}</div>
                                                    )}
                                                </div>
                                            </td>
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
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {filteredNotifications.length === 0 && (
                        <div className="emptyState">
                            <FiBell className="emptyIcon" />
                            <h3>No notifications found</h3>
                            <p>There are no notifications matching your current filter.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Add Notification Modal */}
            {showAddNotification && (
                <div className="modalOverlay" onClick={() => setShowAddNotification(false)}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <div className="modalHeader">
                            <h3>Add New Notification</h3>
                            <button className="closeBtn" onClick={() => setShowAddNotification(false)}>×</button>
                        </div>
                        <div className="modalBody">
                            <form className="addNotificationForm">
                                <div className="formRow">
                                    <div className="formGroup">
                                        <label>Title</label>
                                        <input type="text" placeholder="Enter notification title" />
                                    </div>
                                    <div className="formGroup">
                                        <label>Type</label>
                                        <select>
                                            <option value="order">Order</option>
                                            <option value="inventory">Inventory</option>
                                            <option value="payment">Payment</option>
                                            <option value="user">User</option>
                                            <option value="system">System</option>
                                            <option value="promotion">Promotion</option>
                                            <option value="review">Review</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="formRow">
                                    <div className="formGroup">
                                        <label>Priority</label>
                                        <select>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>
                                    <div className="formGroup">
                                        <label>Recipient</label>
                                        <select>
                                            <option value="admin">Admin</option>
                                            <option value="all">All Users</option>
                                            <option value="customers">Customers</option>
                                            <option value="vendors">Vendors</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="formGroup">
                                    <label>Message</label>
                                    <textarea placeholder="Enter notification message" rows={4}></textarea>
                                </div>
                                <div className="formGroup">
                                    <label>Schedule (Optional)</label>
                                    <input type="datetime-local" />
                                </div>
                                <div className="formActions">
                                    <button type="button" className="cancelBtn" onClick={() => setShowAddNotification(false)}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="saveBtn">
                                        Send Notification
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

export default NotificationsPage;
