# Suryansh Enterprises - Complete Digital Service Center

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</div>

<div align="center">
  <h3>🌟 Complete Digital Service Platform for CSC/eDistrict/Sahaj Services 🌟</h3>
  <p><strong>Where Innovation Meets Convenience</strong></p>
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Screenshots](#screenshots)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Usage Guide](#usage-guide)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

---

## 🎯 Overview

**Suryansh Enterprises** is a comprehensive digital service platform designed for Common Service Centers (CSC), eDistrict services, and Sahaj digital services. This full-stack web application provides a complete solution for managing government and digital services with bilingual support (English/Hindi).

### 🏢 About Suryansh Enterprises
- **Established**: 2019
- **Services**: CSC, eDistrict, Sahaj digital services
- **Mission**: Making essential government services accessible to everyone
- **Vision**: Transforming digital service delivery in rural and urban areas

### 🎯 Target Audience
- Government service centers
- CSC operators and franchisees
- Citizens seeking government services
- Digital service providers
- Rural and urban service centers

---

## ✨ Features

### 🌐 **Multi-Page Website**
- **10+ Professional Pages**: Homepage, About, Services, Contact, Admin Panel
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Bilingual Support**: Complete English/Hindi interface with seamless switching
- **SEO Optimized**: Search engine friendly URLs and meta tags

### 🏛️ **Government Services**
- **eDistrict Services**: Birth/Death certificates, Income/Caste certificates
- **CSC Services**: Aadhar enrollment, Government schemes, Banking services
- **Sahaj Services**: PAN card, Passport applications, Driving license
- **Document Upload**: Secure file upload with validation
- **Application Tracking**: Unique tracking numbers for all applications

### 👥 **User Management**
- **Multi-Role System**: Admin, Operator, Manager, User roles
- **Secure Authentication**: JWT-based authentication with session management
- **Profile Management**: Complete user profile with preferences
- **Permission System**: Role-based access control

### 📧 **Communication System**
- **Contact Forms**: Professional contact management
- **Email Notifications**: Automated status updates and confirmations
- **SMS Integration**: Ready for SMS notifications
- **Admin Responses**: Built-in response system for customer queries

### 📊 **Admin Dashboard**
- **Application Management**: View, process, and update applications
- **User Management**: Manage users and permissions
- **Analytics**: Business insights and reporting
- **Contact Management**: Handle customer inquiries
- **Service Management**: Manage service catalog and pricing

### 💰 **Business Management**
- **Fee Management**: Configurable service fees and taxes
- **Payment Integration**: Ready for payment gateway integration
- **Revenue Tracking**: Monitor income and transactions
- **Processing Workflow**: Complete application lifecycle management

### 🛡️ **Security & Performance**
- **Data Security**: Encrypted data storage and transmission
- **Rate Limiting**: API abuse protection
- **Input Validation**: Comprehensive validation and sanitization
- **File Security**: Secure file upload with type restrictions
- **Backup Ready**: Database backup and recovery procedures

---

## 🚀 Technology Stack

### **Frontend**
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive functionality and API integration
- **Bootstrap 5**: Responsive UI components
- **Font Awesome**: Professional icons and graphics

### **Backend**
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database with Mongoose ODM
- **JWT**: Secure authentication tokens
- **Bcrypt.js**: Password hashing and security

### **Additional Technologies**
- **Multer**: File upload handling
- **Nodemailer**: Email service integration
- **Winston**: Logging and monitoring
- **Helmet**: Security middleware
- **PM2**: Process management for production

### **Development Tools**
- **Nodemon**: Development server with auto-restart
- **Jest**: Testing framework
- **ESLint**: Code quality and style checking
- **Git**: Version control system

---

## 📸 Screenshots

### Homepage
![Homepage](./screenshots/homepage.png)
*Professional bilingual homepage with service overview*

### Admin Dashboard
![Admin Dashboard](./screenshots/admin-dashboard.png)
*Comprehensive admin panel for managing applications*

### Service Application Form
![Application Form](./screenshots/application-form.png)
*User-friendly application forms with document upload*

### Application Tracking
![Application Tracking](./screenshots/tracking.png)
*Real-time application status tracking*

---

## ⚡ Quick Start

Get the project up and running in 5 minutes:

```bash
# Clone the repository
git clone https://github.com/suryanshenterprises/website.git
cd suryansh-enterprises

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start MongoDB (if using local instance)
mongod

# Run the application
npm run dev

# Open in browser
# Visit: http://localhost:3000
```

**Default Admin Login:**
- Email: `admin@suryanshenterprises.in`
- Password: `admin123`

⚠️ **Important**: Change default credentials immediately after deployment!

---

## 🛠️ Installation

### Prerequisites
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/downloads)

### Step-by-Step Installation

#### 1. Clone Repository
```bash
git clone https://github.com/suryanshenterprises/website.git
cd suryansh-enterprises
```

#### 2. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies (if separate)
cd frontend && npm install
cd ..
```

#### 3. Database Setup
```bash
# Start MongoDB service
# On Windows:
net start MongoDB

# On macOS/Linux:
sudo systemctl start mongod

# Or use MongoDB Atlas (cloud database)
# Get connection string from MongoDB Atlas dashboard
```

#### 4. Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Edit environment variables
nano .env  # or use your preferred editor
```

#### 5. Initialize Database
```bash
# Run database setup (creates indexes and default admin)
npm run setup-db
```

#### 6. Start Application
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

#### 7. Verify Installation
- Open browser and navigate to `http://localhost:3000`
- Check admin panel at `http://localhost:3000/admin-login.html`
- Test API health at `http://localhost:3000/api/v1/health`

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
NODE_ENV=development
PORT=3000
HOST=localhost

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/suryansh_enterprises
DB_NAME=suryansh_enterprises

# JWT Configuration
JWT_SECRET=your_super_secure_jwt_secret_key_minimum_32_characters
JWT_EXPIRE=24h
JWT_REFRESH_EXPIRE=7d

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin@suryanshenterprises.in

# File Upload Configuration
MAX_FILE_SIZE=5242880  # 5MB in bytes
UPLOAD_PATH=./uploads/
ALLOWED_FILE_TYPES=jpg,jpeg,png,pdf,doc,docx

# Admin Configuration
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123  # Change this!
ADMIN_EMAIL=admin@suryanshenterprises.in

# Security Configuration
RATE_LIMIT_WINDOW=900000  # 15 minutes
RATE_LIMIT_MAX=100
BCRYPT_ROUNDS=12

# Application URLs
FRONTEND_URL=http://localhost:3000
API_BASE_URL=/api/v1
```

### Service Configuration

Update service data in `config/services.json`:

```json
{
  "edistrict": {
    "birth_certificate": {
      "name_en": "Birth Certificate",
      "name_hi": "जन्म प्रमाणपत्र",
      "fee": 50,
      "processing_days": 5,
      "required_documents": ["birth_registration", "parent_id", "address_proof"]
    }
  },
  "csc": {
    "aadhar_enrollment": {
      "name_en": "Aadhar Enrollment",
      "name_hi": "आधार नामांकन",
      "fee": 100,
      "processing_days": 3
    }
  }
}
```

---

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "SecurePass123"
}
```

#### Login User
```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

### Application Endpoints

#### Create Application
```http
POST /api/v1/applications/create
Authorization: Bearer <token>
Content-Type: multipart/form-data

{
  "serviceType": "edistrict",
  "serviceName": "Birth Certificate",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "address": "123 Main Street, City",
  "aadhar": "123456789012",
  "documents": [file1, file2]
}
```

#### Track Application
```http
GET /api/v1/applications/status/SE1234567890
```

### Contact Endpoints

#### Submit Contact Form
```http
POST /api/v1/contact/submit
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "subject": "Service Inquiry",
  "message": "I need help with my application",
  "category": "general"
}
```

### Response Format

All API responses follow this format:

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response data here
  },
  "timestamp": "2025-09-14T00:11:00.000Z"
}
```

### Error Response Format

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message",
  "code": "ERROR_CODE",
  "timestamp": "2025-09-14T00:11:00.000Z"
}
```

---

## 🚢 Deployment

### Development Deployment

```bash
# Start in development mode
npm run dev

# Access application
echo "Frontend: http://localhost:3000"
echo "Admin Panel: http://localhost:3000/admin-login.html"
echo "API Health: http://localhost:3000/api/v1/health"
```

### Production Deployment

#### Option 1: VPS/Dedicated Server

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Install PM2 for process management
sudo npm install -g pm2

# Clone and setup application
git clone https://github.com/suryanshenterprises/website.git
cd suryansh-enterprises
npm install --production

# Configure environment
cp .env.example .env
nano .env  # Edit with production values

# Start application with PM2
pm2 start server.js --name "suryansh-enterprises"
pm2 startup
pm2 save

# Configure Nginx reverse proxy
sudo apt install nginx
sudo nano /etc/nginx/sites-available/suryansh-enterprises
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    location /uploads {
        alias /path/to/suryansh-enterprises/uploads;
        expires 1M;
        access_log off;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Option 2: Cloud Platform (Heroku)

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create application
heroku create suryansh-enterprises-api

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your_mongodb_atlas_connection_string
heroku config:set JWT_SECRET=your_secure_secret_key
# Set other environment variables...

# Deploy to Heroku
git push heroku main

# Open application
heroku open
```

#### Option 3: Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

RUN mkdir -p uploads logs

EXPOSE 3000

USER node

CMD ["npm", "start"]
```

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/suryansh_enterprises
    depends_on:
      - mongo
    volumes:
      - ./uploads:/app/uploads
      - ./logs:/app/logs

  mongo:
    image: mongo:5.0
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

```bash
# Deploy with Docker
docker-compose up -d

# Check status
docker-compose ps
```

---

## 📖 Usage Guide

### For Administrators

#### 1. Initial Setup
1. Login to admin panel at `/admin-login.html`
2. Change default password in Profile Settings
3. Configure service catalog and pricing
4. Set up email notifications
5. Add operator/staff accounts

#### 2. Managing Applications
1. **View Applications**: Access all submitted applications
2. **Process Applications**: Update status and add notes
3. **Communication**: Send updates to customers
4. **Documents**: Review uploaded documents
5. **Payments**: Track payment status

#### 3. Customer Support
1. **Contact Management**: Handle customer inquiries
2. **Response System**: Send professional responses
3. **Priority Management**: Handle urgent matters first
4. **Follow-up**: Set reminders for follow-up actions

### For Customers

#### 1. Service Application
1. **Browse Services**: View available services
2. **Select Service**: Choose required service
3. **Fill Form**: Complete application form
4. **Upload Documents**: Attach required documents
5. **Submit**: Get tracking number

#### 2. Track Application
1. **Enter Tracking Number**: Use provided tracking ID
2. **Check Status**: View current application status
3. **Download Receipt**: Get application receipt
4. **Contact Support**: Get help if needed

### For Operators

#### 1. Daily Operations
1. **Process Applications**: Handle assigned applications
2. **Update Status**: Keep applications current
3. **Customer Service**: Handle walk-in customers
4. **Documentation**: Maintain proper records

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test thoroughly**
5. **Commit changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Contribution Guidelines

#### Code Style
- Use consistent indentation (2 spaces)
- Follow ESLint configuration
- Add comments for complex logic
- Use meaningful variable names

#### Commit Messages
- Use conventional commit format
- Example: `feat: add application tracking feature`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

#### Testing
- Write unit tests for new features
- Ensure all tests pass: `npm test`
- Test on multiple devices/browsers
- Include integration tests where applicable

#### Documentation
- Update README for new features
- Add API documentation for new endpoints
- Include inline code comments
- Update configuration examples

### Areas for Contribution
- 🐛 **Bug Fixes**: Fix reported issues
- ✨ **New Features**: Add requested functionality
- 📚 **Documentation**: Improve documentation
- 🎨 **UI/UX**: Enhance user experience
- 🌐 **Localization**: Add language support
- 🔒 **Security**: Improve security measures
- ⚡ **Performance**: Optimize performance

---

## 🆘 Support

### Getting Help

#### 1. Documentation
- **README**: Complete setup and usage guide
- **API Docs**: Detailed API documentation
- **Wiki**: Additional guides and tutorials
- **FAQ**: Common questions and solutions

#### 2. Community Support
- **GitHub Issues**: Report bugs and request features
- **Discussions**: Community Q&A and discussions
- **Discord**: Real-time community chat
- **Forum**: Detailed technical discussions

#### 3. Professional Support
- **Email**: tech@suryanshenterprises.in
- **Phone**: +91 98765 43210
- **Business Hours**: Monday - Saturday, 9:00 AM - 6:00 PM IST
- **Emergency**: Critical issues and downtime support

### Reporting Issues

When reporting issues, please include:
- **Environment**: OS, Node.js version, browser
- **Steps to Reproduce**: Detailed steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: Visual aids if applicable
- **Error Messages**: Complete error logs

### Feature Requests

For feature requests, please provide:
- **Use Case**: Why is this feature needed?
- **Proposed Solution**: How should it work?
- **Alternatives**: Any alternative approaches?
- **Priority**: How important is this feature?

---

## 📄 License

### MIT License

```
MIT License

Copyright (c) 2025 Suryansh Enterprises

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👥 Team

### Core Team
- **Founder & CEO**: [Name] - Vision and Strategy
- **CTO**: [Name] - Technical Leadership
- **Lead Developer**: [Name] - Full-Stack Development
- **UI/UX Designer**: [Name] - User Experience
- **DevOps Engineer**: [Name] - Infrastructure

### Contributors
Thanks to all the amazing contributors who have helped build this project! 🙏

[Contributors will be automatically listed here]

---

## 🗺️ Roadmap

### Version 1.1.0 (Q1 2025)
- [ ] Payment gateway integration
- [ ] SMS notification system
- [ ] Advanced reporting dashboard
- [ ] Mobile app for customers
- [ ] API rate limiting enhancements

### Version 1.2.0 (Q2 2025)
- [ ] Multi-language support (Regional languages)
- [ ] AI-powered chatbot
- [ ] Document verification system
- [ ] Blockchain certificate verification
- [ ] Advanced analytics

### Version 2.0.0 (Q3 2025)
- [ ] Microservices architecture
- [ ] Real-time notifications
- [ ] Mobile operator app
- [ ] Customer portal redesign
- [ ] Advanced security features

---

## 📊 Statistics

<div align="center">
  <img src="https://img.shields.io/github/stars/suryanshenterprises/website?style=social" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/suryanshenterprises/website?style=social" alt="GitHub forks">
  <img src="https://img.shields.io/github/watchers/suryanshenterprises/website?style=social" alt="GitHub watchers">
</div>

<div align="center">
  <img src="https://img.shields.io/github/issues/suryanshenterprises/website" alt="GitHub issues">
  <img src="https://img.shields.io/github/issues-pr/suryanshenterprises/website" alt="GitHub pull requests">
  <img src="https://img.shields.io/github/license/suryanshenterprises/website" alt="License">
  <img src="https://img.shields.io/github/languages/top/suryanshenterprises/website" alt="Top language">
</div>

---

## 🙏 Acknowledgments

### Special Thanks
- **MongoDB**: For excellent database technology
- **Express.js Community**: For the robust web framework
- **Node.js Foundation**: For the runtime environment
- **Bootstrap Team**: For the UI framework
- **Font Awesome**: For beautiful icons
- **Our Users**: For valuable feedback and support

### Inspiration
This project was inspired by the need to digitize government services and make them accessible to everyone, especially in rural areas where technology can bridge the gap between citizens and essential services.

---

<div align="center">
  <h2>🚀 Ready to Get Started?</h2>
  <p>Follow the <a href="#quick-start">Quick Start</a> guide to have the application running in minutes!</p>
  
  <a href="#quick-start" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Get Started Now</a>
</div>

---

<div align="center">
  <p>Made with ❤️ by <strong>Suryansh Enterprises</strong></p>
  <p>© 2025 Suryansh Enterprises. All rights reserved.</p>
</div>