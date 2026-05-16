# WheelShare - Vehicle Rental Platform

A full-stack vehicle rental platform built with React and Node.js, featuring real-time chat, booking management, and admin dashboard.

## 🚀 Features

- **User Authentication** - JWT-based secure login/registration
- **Vehicle Listings** - Browse and search available vehicles
- **Booking System** - Real-time booking with calendar integration
- **Real-time Chat** - Socket.io powered messaging between users
- **Admin Dashboard** - Comprehensive admin panel for managing users and vehicles
- **KYC Verification** - Document upload and verification system
- **Responsive Design** - Mobile-first design with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Socket.io Client** - Real-time communication
- **Recharts** - Data visualization

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Socket.io** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **Multer** - File upload handling
- **bcryptjs** - Password hashing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aarishshahnawaz/wheel-share.git
   cd wheel-share
   ```

2. **Setup Backend**
   ```bash
   cd wheelshare-server
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../wheelshare-client
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 🌐 Deployment

### Deploy to Render

1. **Fork/Clone this repository**
2. **Connect to Render**
   - Sign up at [render.com](https://render.com)
   - Connect your GitHub repository
   - Use the included `render.yaml` for automatic deployment

3. **Set Environment Variables in Render Dashboard**
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret
   ADMIN_SECRET=your_admin_secret
   ```

4. **Update URLs after deployment**
   - Update `ALLOWED_ORIGINS` in backend service
   - Update `VITE_API_URL` in frontend service

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📁 Project Structure

```
wheel-share/
├── wheelshare-client/          # React frontend
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── admin/             # Admin dashboard
│   │   └── assets/            # Static assets
│   ├── public/                # Public assets
│   └── package.json
├── wheelshare-server/          # Node.js backend
│   ├── models/                # MongoDB models
│   ├── routes/                # API routes
│   ├── middleware/            # Custom middleware
│   └── package.json
├── render.yaml                # Render deployment config
└── README.md
```

## 🔧 Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/wheelshare
JWT_SECRET=your_jwt_secret_here
ADMIN_SECRET=your_admin_secret_here
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you encounter any issues, please create an issue on GitHub with:
- Description of the problem
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

## 📞 Support

For support, email [your-email@example.com] or create an issue on GitHub.