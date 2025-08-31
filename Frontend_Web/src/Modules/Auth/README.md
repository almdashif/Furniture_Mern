# Authentication Pages

This directory contains standalone authentication pages that maintain the same theme and design as the original login modal.

## Login Page

A standalone login page with the same styling and functionality as the original modal.

## Features

- **Responsive Design**: Works on all device sizes
- **Same Theme**: Uses the exact same color scheme and styling as the original modal
- **Form Validation**: Includes email and password validation
- **Password Toggle**: Eye icon to show/hide password
- **Error Handling**: Displays validation errors below each field
- **Navigation**: Links to registration and forgot password pages

## Usage

### Routes
- **Login page**: `/login`
- **Register page**: `/register`

### Navigation
- Both pages added to main navigation menu (left side)
- Profile icon in navbar links to login page
- Can be accessed directly via URL

## Components

### LoginPage.tsx
Main component that renders the login form with:
- Email/username input
- Password input with toggle
- Login button
- Links to other auth pages

### loginPage.scss
Styling that maintains the original theme:
- Uses CSS variables for consistent colors
- Responsive grid layout
- Hover effects and transitions
- Mobile-first design

### RegisterPage.tsx
Main component that renders the registration form with:
- First name and last name inputs (side by side)
- Email input
- Password and confirm password inputs with toggles
- Terms & conditions checkbox
- Create account button
- Link to login page

### registerPage.scss
Styling that matches the login page theme:
- Same color scheme and design language
- Responsive grid layout with name fields side by side
- Custom checkbox styling
- Hover effects and transitions
- Mobile-first design

## Styling

The page uses the same CSS variables as the rest of the application:
- `--bgLightEnglishBlueColor` for primary buttons
- `--a-text-color` for main text
- `--borderColor` for input borders
- `--redColor` for error messages

## Responsive Breakpoints

- **Desktop**: Two-column layout with decorative right side
- **Tablet**: Single column layout
- **Mobile**: Optimized spacing and typography

## Integration

The login page is fully integrated with:
- React Router for navigation
- TypeScript for type safety
- SCSS for styling
- React Icons for icons
