import React, { useState } from 'react';
import { FiFilter, FiPlus, FiChevronDown, FiMoreVertical, FiEdit, FiTrash2, FiEye } from 'react-icons/fi';
import './productsPage.scss';

const ProductsPage = () => {
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
    const [showAddProduct, setShowAddProduct] = useState(false);

    const products = [
        { 
            id: 1, 
            name: 'T-Shirt', 
            category: 'Women Cloths', 
            price: '$79.80', 
            stock: 79, 
            status: 'Scheduled',
            image: '/product1.jpg'
        },
        { 
            id: 2, 
            name: 'Shirt', 
            category: 'Man Cloths', 
            price: '$76.89', 
            stock: 86, 
            status: 'Active',
            image: '/product2.jpg'
        },
        { 
            id: 3, 
            name: 'Pant', 
            category: 'Kid Cloths', 
            price: '$86.65', 
            stock: 74, 
            status: 'Active',
            image: '/product3.jpg'
        },
        { 
            id: 4, 
            name: 'Sweater', 
            category: 'Sweater', 
            price: '$56.07', 
            stock: 69, 
            status: 'Draft',
            image: '/product4.jpg'
        },
        { 
            id: 5, 
            name: 'Light Jacket', 
            category: 'Outerwear', 
            price: '$36.00', 
            stock: 65, 
            status: 'Active',
            image: '/product5.jpg'
        },
        { 
            id: 6, 
            name: 'Half Shirt', 
            category: 'Casual', 
            price: '$46.78', 
            stock: 58, 
            status: 'Active',
            image: '/product6.jpg'
        }
    ];

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedProducts(products.map(p => p.id));
        } else {
            setSelectedProducts([]);
        }
    };

    const handleSelectProduct = (productId: number, checked: boolean) => {
        if (checked) {
            setSelectedProducts([...selectedProducts, productId]);
        } else {
            setSelectedProducts(selectedProducts.filter(id => id !== productId));
        }
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'active': return 'green';
            case 'scheduled': return 'blue';
            case 'draft': return 'orange';
            default: return 'gray';
        }
    };

    return (
        <div className="productsPage">
            <div className="pageHeader">
                <div className="headerLeft">
                    <h2>Products list</h2>
                </div>
                <div className="headerRight">
                    <button className="filterBtn">
                        <FiFilter className="filterIcon" />
                        Filter
                    </button>
                    <button className="seeAllBtn">See All</button>
                    <button className="addProductBtn" onClick={() => setShowAddProduct(true)}>
                        <FiPlus className="plusIcon" />
                        + Add Product
                    </button>
                </div>
            </div>

            <div className="productsTable">
                <table className="dataTable">
                    <thead>
                        <tr>
                            <th>
                                <input 
                                    type="checkbox" 
                                    checked={selectedProducts.length === products.length}
                                    onChange={(e) => handleSelectAll(e.target.checked)}
                                />
                            </th>
                            <th>
                                Product Name
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Category
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Price
                                <FiChevronDown className="sortIcon" />
                            </th>
                            <th>
                                Stock
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
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <input 
                                        type="checkbox" 
                                        checked={selectedProducts.includes(product.id)}
                                        onChange={(e) => handleSelectProduct(product.id, e.target.checked)}
                                    />
                                </td>
                                <td>
                                    <div className="productInfo">
                                        <div className="productImage">
                                            <div className="imagePlaceholder"></div>
                                        </div>
                                        <span className="productName">{product.name}</span>
                                    </div>
                                </td>
                                <td>{product.category}</td>
                                <td className="price">{product.price}</td>
                                <td className="stock">{product.stock}</td>
                                <td>
                                    <span className={`statusBadge ${getStatusColor(product.status)}`}>
                                        {product.status}
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

            {/* Add Product Modal */}
            {showAddProduct && (
                <div className="modalOverlay" onClick={() => setShowAddProduct(false)}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <div className="modalHeader">
                            <h3>Add New Product</h3>
                            <button className="closeBtn" onClick={() => setShowAddProduct(false)}>×</button>
                        </div>
                        <div className="modalBody">
                            <form className="addProductForm">
                                <div className="formRow">
                                    <div className="formGroup">
                                        <label>Product Name</label>
                                        <input type="text" placeholder="Enter product name" />
                                    </div>
                                    <div className="formGroup">
                                        <label>Category</label>
                                        <select>
                                            <option>Select category</option>
                                            <option>Women Cloths</option>
                                            <option>Man Cloths</option>
                                            <option>Kid Cloths</option>
                                            <option>Sweater</option>
                                            <option>Outerwear</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="formRow">
                                    <div className="formGroup">
                                        <label>Price</label>
                                        <input type="number" placeholder="0.00" step="0.01" />
                                    </div>
                                    <div className="formGroup">
                                        <label>Stock</label>
                                        <input type="number" placeholder="0" />
                                    </div>
                                </div>
                                <div className="formGroup">
                                    <label>Description</label>
                                    <textarea placeholder="Enter product description" rows={3}></textarea>
                                </div>
                                <div className="formGroup">
                                    <label>Product Image</label>
                                    <input type="file" accept="image/*" />
                                </div>
                                <div className="formActions">
                                    <button type="button" className="cancelBtn" onClick={() => setShowAddProduct(false)}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="saveBtn">
                                        Save Product
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

export default ProductsPage;
