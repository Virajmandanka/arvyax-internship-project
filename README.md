# E-Commerce Admin & User Panel

## Description
This project is a simple E-Commerce platform with Authentication using JWT and separate Admin and User sides.

- **Admin Side**: Access the admin dashboard with a secret key. Admin can add, edit, and delete products from here.
- **User Side/publish**: Users can register/login normally and view products added by the admin.

## Features

### Authentication
- Register 
- Login (JWT token generated)
- Protected routes using JWT middleware
- Secret key required for admin access

### Admin Side
- Add new products via a form
- Edit existing products
- Delete products
- Secure dashboard access

### User Side
- View products
- Normal browsing without edit/delete permissions

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT 
- **Other Tools**: dotenv (for managing secret keys), CORS, Mongoose



