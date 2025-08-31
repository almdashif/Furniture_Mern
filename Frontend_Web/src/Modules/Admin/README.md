# Admin Dashboard

A comprehensive admin dashboard for managing your furniture store with a clean, modern interface matching the design you requested.

## Features

### 🎯 **Dashboard Overview**
- **Statistics Cards**: Total products, customers, sales, and growth metrics
- **Recent Products**: Quick view of latest products with status indicators
- **Recent Customers**: Overview of newest customer registrations
- **Responsive Design**: Works perfectly on all device sizes

### 📦 **Product Management**
- **Product List**: Complete table view with sorting and filtering
- **Add Products**: Modal form for adding new products
- **Product Actions**: View, edit, delete, and more options
- **Status Management**: Active, Scheduled, Draft statuses
- **Stock Tracking**: Real-time stock quantity monitoring
- **Image Management**: Product image uploads and thumbnails

### 👥 **Customer Management**
- **Customer List**: Comprehensive customer database
- **Add Customers**: Modal form for customer registration
- **Customer Details**: Contact info, join date, order history
- **Status Tracking**: Active/Inactive customer status
- **Order Analytics**: Total orders and spending per customer
- **Contact Management**: Email, phone, and address information

### 🎨 **Design Features**
- **Modern UI**: Clean, professional interface matching your requirements
- **Color Scheme**: Consistent purple/blue theme (#6366f1)
- **Status Badges**: Color-coded status indicators
- **Hover Effects**: Smooth transitions and interactions
- **Responsive Tables**: Mobile-friendly data presentation
- **Icon Integration**: React Icons for consistent visual language

## Routes

- **`/admin`** - Main dashboard with overview
- **`/admin/products`** - Product management page
- **`/admin/customers`** - Customer management page
- **`/admin/categories`** - Category management (ready for future)
- **`/admin/sales`** - Sales analytics (ready for future)
- **`/admin/analytics`** - Advanced analytics (ready for future)

## Components

### AdminLayout.tsx
- **Sidebar Navigation**: Collapsible menu with icons
- **Header**: Page titles and user actions
- **Responsive Design**: Mobile-friendly navigation
- **User Dropdown**: Profile, settings, logout options

### AdminDashboard.tsx
- **Stats Grid**: 4-column statistics display
- **Data Tables**: Recent products and customers
- **Card Layout**: Clean, organized information display
- **Responsive Grid**: Adapts to screen sizes

### ProductsPage.tsx
- **Product Table**: Sortable columns with checkboxes
- **Add Product Modal**: Comprehensive product form
- **Action Buttons**: View, edit, delete functionality
- **Pagination**: Page navigation for large datasets

### CustomersPage.tsx
- **Customer Table**: Detailed customer information
- **Add Customer Modal**: Complete customer registration form
- **Contact Display**: Email and phone with icons
- **Status Management**: Active/Inactive status tracking

## Styling

### Color Palette
- **Primary**: #6366f1 (Purple/Blue)
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Orange)
- **Error**: #ef4444 (Red)
- **Neutral**: #64748b (Gray)

### Design System
- **Border Radius**: 0.5rem - 0.75rem
- **Shadows**: Subtle depth with rgba shadows
- **Spacing**: Consistent 1rem - 2rem margins
- **Typography**: Poppins font family
- **Icons**: Feather Icons (Fi) for consistency

## Responsive Breakpoints

- **Desktop**: Full sidebar + content layout
- **Tablet**: Compact sidebar + responsive tables
- **Mobile**: Collapsible sidebar + stacked layouts

## Future Enhancements

- **Categories Management**: Product category CRUD operations
- **Sales Analytics**: Revenue charts and reporting
- **User Management**: Admin user roles and permissions
- **Inventory Tracking**: Advanced stock management
- **Order Management**: Customer order processing
- **Notification System**: Real-time alerts and updates

## Integration

The admin dashboard is fully integrated with:
- **React Router**: Navigation and routing
- **TypeScript**: Type safety and development
- **SCSS**: Advanced styling and theming
- **React Icons**: Consistent iconography
- **Responsive Design**: Mobile-first approach
