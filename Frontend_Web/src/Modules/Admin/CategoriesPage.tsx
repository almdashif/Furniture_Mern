import React, { useState } from 'react';
import { FiFilter, FiPlus, FiChevronDown, FiMoreVertical, FiEdit, FiTrash2, FiEye, FiTag, FiGift } from 'react-icons/fi';
import './categoriesPage.scss';

const CategoriesPage = () => {
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [selectedCoupons, setSelectedCoupons] = useState<number[]>([]);
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [showAddCoupon, setShowAddCoupon] = useState(false);

    const categories = [
        { 
            id: 1, 
            name: 'Women Cloths', 
            description: 'Fashionable clothing for women',
            productCount: 45,
            status: 'Active',
            image: '/category1.jpg'
        },
        { 
            id: 2, 
            name: 'Man Cloths', 
            description: 'Stylish clothing for men',
            productCount: 38,
            status: 'Active',
            image: '/category2.jpg'
        },
        { 
            id: 3, 
            name: 'Kid Cloths', 
            description: 'Comfortable clothing for children',
            productCount: 32,
            status: 'Active',
            image: '/category3.jpg'
        },
        { 
            id: 4, 
            name: 'Sweater', 
            description: 'Warm and cozy sweaters',
            productCount: 28,
            status: 'Active',
            image: '/category4.jpg'
        },
        { 
            id: 5, 
            name: 'Outerwear', 
            description: 'Jackets and coats for all seasons',
            productCount: 25,
            status: 'Active',
            image: '/category5.jpg'
        },
        { 
            id: 6, 
            name: 'Casual', 
            description: 'Everyday casual wear',
            productCount: 42,
            status: 'Draft',
            image: '/category6.jpg'
        }
    ];

    const coupons = [
        {
            id: 1,
            code: 'WELCOME20',
            discount: '20%',
            type: 'Percentage',
            minAmount: '$50',
            maxDiscount: '$100',
            validFrom: '2024-01-01',
            validTo: '2024-12-31',
            usageLimit: 1000,
            usedCount: 245,
            status: 'Active'
        },
        {
            id: 2,
            code: 'SAVE50',
            discount: '$50',
            type: 'Fixed',
            minAmount: '$200',
            maxDiscount: '$50',
            validFrom: '2024-01-15',
            validTo: '2024-06-30',
            usageLimit: 500,
            usedCount: 189,
            status: 'Active'
        },
        {
            id: 3,
            code: 'SUMMER15',
            discount: '15%',
            type: 'Percentage',
            minAmount: '$75',
            maxDiscount: '$75',
            validFrom: '2024-06-01',
            validTo: '2024-08-31',
            usageLimit: 750,
            usedCount: 0,
            status: 'Scheduled'
        },
        {
            id: 4,
            code: 'FLASH25',
            discount: '25%',
            type: 'Percentage',
            minAmount: '$100',
            maxDiscount: '$150',
            validFrom: '2024-02-01',
            validTo: '2024-02-29',
            usageLimit: 200,
            usedCount: 156,
            status: 'Expired'
        }
    ];

    const handleSelectAllCategories = (checked: boolean) => {
        if (checked) {
            setSelectedCategories(categories.map(c => c.id));
        } else {
            setSelectedCategories([]);
        }
    };

    const handleSelectCategory = (categoryId: number, checked: boolean) => {
        if (checked) {
            setSelectedCategories([...selectedCategories, categoryId]);
        } else {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        }
    };

    const handleSelectAllCoupons = (checked: boolean) => {
        if (checked) {
            setSelectedCoupons(coupons.map(c => c.id));
        } else {
            setSelectedCoupons([]);
        }
    };

    const handleSelectCoupon = (couponId: number, checked: boolean) => {
        if (checked) {
            setSelectedCoupons([...selectedCoupons, couponId]);
        } else {
            setSelectedCoupons(selectedCoupons.filter(id => id !== couponId));
        }
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'active': return 'green';
            case 'scheduled': return 'blue';
            case 'draft': return 'orange';
            case 'expired': return 'red';
            default: return 'gray';
        }
    };

    return (
        <div className="categoriesPage">
            {/* Categories Section */}
            <div className="sectionHeader">
                <div className="headerLeft">
                    <h2>Categories</h2>
                    <p className="categoryCount">Total: {categories.length} categories</p>
                </div>
                <div className="headerRight">
                    <button className="filterBtn">
                        <FiFilter className="filterIcon" />
                        Filter
                    </button>
                    <button className="seeAllBtn">See All</button>
                    <button className="addCategoryBtn" onClick={() => setShowAddCategory(true)}>
                        <FiPlus className="plusIcon" />
                        + Add Category
                    </button>
                </div>
            </div>

            <div className="categoriesTable">
                <table className="dataTable">
                    <thead>
                        <tr>
                            <th>
                                <input 
                                    type="checkbox" 
                                    checked={selectedCategories.length === categories.length}
                                    onChange={(e) => handleSelectAllCategories(e.target.checked)}
                                />
                            </th>
                            <th>
                                Category
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Description
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Products
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Status
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id}>
                                <td>
                                    <input 
                                        type="checkbox" 
                                        checked={selectedCategories.includes(category.id)}
                                        onChange={(e) => handleSelectCategory(category.id, e.target.checked)}
                                    />
                                </td>
                                <td>
                                    <div className="categoryInfo">
                                        <div className="categoryImage">
                                            <div className="imagePlaceholder"></div>
                                        </div>
                                        <span className="categoryName">{category.name}</span>
                                    </div>
                                </td>
                                <td className="description">{category.description}</td>
                                <td className="productCount">{category.productCount}</td>
                                <td>
                                    <span className={`statusBadge ${getStatusColor(category.status)}`}>
                                        {category.status}
                                    </span>
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
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Coupons Section */}
            <div className="sectionHeader">
                <div className="headerLeft">
                    <h2>Coupons</h2>
                    <p className="couponCount">Total: {coupons.length} coupons</p>
                </div>
                <div className="headerRight">
                    <button className="filterBtn">
                        <FiFilter className="filterIcon" />
                        Filter
                    </button>
                    <button className="seeAllBtn">See All</button>
                    <button className="addCouponBtn" onClick={() => setShowAddCoupon(true)}>
                        <FiPlus className="plusIcon" />
                        + Add Coupon
                    </button>
                </div>
            </div>

            <div className="couponsTable">
                <table className="dataTable">
                    <thead>
                        <tr>
                            <th>
                                <input 
                                    type="checkbox" 
                                    checked={selectedCoupons.length === coupons.length}
                                    onChange={(e) => handleSelectAllCoupons(e.target.checked)}
                                />
                            </th>
                            <th>
                                Coupon Code
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Discount
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Validity
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Usage
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Status
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupons.map((coupon) => (
                            <tr key={coupon.id}>
                                <td>
                                    <input 
                                        type="checkbox" 
                                        checked={selectedCoupons.includes(coupon.id)}
                                        onChange={(e) => handleSelectCoupon(coupon.id, e.target.checked)}
                                    />
                                </td>
                                <td>
                                    <div className="couponInfo">
                                        <FiGift className="couponIcon" />
                                        <span className="couponCode">{coupon.code}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="discountInfo">
                                        <span className="discountValue">{coupon.discount}</span>
                                        <span className="discountType">{coupon.type}</span>
                                        <div className="discountDetails">
                                            <small>Min: {coupon.minAmount}</small>
                                            <small>Max: {coupon.maxDiscount}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="validityInfo">
                                        <div>From: {coupon.validFrom}</div>
                                        <div>To: {coupon.validTo}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="usageInfo">
                                        <div className="usageCount">{coupon.usedCount}/{coupon.usageLimit}</div>
                                        <div className="usageProgress">
                                            <div 
                                                className="progressBar" 
                                                style={{width: `${(coupon.usedCount / coupon.usageLimit) * 100}%`}}
                                            ></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className={`statusBadge ${getStatusColor(coupon.status)}`}>
                                        {coupon.status}
                                    </span>
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
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Category Modal */}
            {showAddCategory && (
                <div className="modalOverlay" onClick={() => setShowAddCategory(false)}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <div className="modalHeader">
                            <h3>Add New Category</h3>
                            <button className="closeBtn" onClick={() => setShowAddCategory(false)}>×</button>
                        </div>
                        <div className="modalBody">
                            <form className="addCategoryForm">
                                <div className="formGroup">
                                    <label>Category Name</label>
                                    <input type="text" placeholder="Enter category name" />
                                </div>
                                <div className="formGroup">
                                    <label>Description</label>
                                    <textarea placeholder="Enter category description" rows={3}></textarea>
                                </div>
                                <div className="formGroup">
                                    <label>Category Image</label>
                                    <input type="file" accept="image/*" />
                                </div>
                                <div className="formGroup">
                                    <label>Status</label>
                                    <select>
                                        <option value="active">Active</option>
                                        <option value="draft">Draft</option>
                                        <option value="scheduled">Scheduled</option>
                                    </select>
                                </div>
                                <div className="formActions">
                                    <button type="button" className="cancelBtn" onClick={() => setShowAddCategory(false)}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="saveBtn">
                                        Save Category
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Coupon Modal */}
            {showAddCoupon && (
                <div className="modalOverlay" onClick={() => setShowAddCoupon(false)}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <div className="modalHeader">
                            <h3>Add New Coupon</h3>
                            <button className="closeBtn" onClick={() => setShowAddCoupon(false)}>×</button>
                        </div>
                        <div className="modalBody">
                            <form className="addCouponForm">
                                <div className="formRow">
                                    <div className="formGroup">
                                        <label>Coupon Code</label>
                                        <input type="text" placeholder="Enter coupon code" />
                                    </div>
                                    <div className="formGroup">
                                        <label>Discount Type</label>
                                        <select>
                                            <option value="percentage">Percentage</option>
                                            <option value="fixed">Fixed Amount</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="formRow">
                                    <div className="formGroup">
                                        <label>Discount Value</label>
                                        <input type="text" placeholder="Enter discount value" />
                                    </div>
                                    <div className="formGroup">
                                        <label>Minimum Amount</label>
                                        <input type="text" placeholder="Enter minimum amount" />
                                    </div>
                                </div>
                                <div className="formRow">
                                    <div className="formGroup">
                                        <label>Valid From</label>
                                        <input type="date" />
                                    </div>
                                    <div className="formGroup">
                                        <label>Valid To</label>
                                        <input type="date" />
                                    </div>
                                </div>
                                <div className="formRow">
                                    <div className="formGroup">
                                        <label>Usage Limit</label>
                                        <input type="number" placeholder="Enter usage limit" />
                                    </div>
                                    <div className="formGroup">
                                        <label>Status</label>
                                        <select>
                                            <option value="active">Active</option>
                                            <option value="scheduled">Scheduled</option>
                                            <option value="draft">Draft</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="formActions">
                                    <button type="button" className="cancelBtn" onClick={() => setShowAddCoupon(false)}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="saveBtn">
                                        Save Coupon
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

export default CategoriesPage;
