# Examinator

A comprehensive platform for educators to create, manage, and evaluate exams with ease. Examinator streamlines the assessment process from creation to evaluation, providing a modern and intuitive interface for both examiners and students.

## 🚀 Features

- **Exam Creation**: Create comprehensive exams with various question types, time limits, and scoring options
- **Student Management**: Manage student profiles, track progress, and organize classes efficiently
- **Secure Testing**: Ensure exam integrity with secure testing environments and anti-cheating measures
- **Analytics & Insights**: Gain valuable insights with detailed analytics on student performance and exam effectiveness
- **Examiner Registration**: Easy registration process for educators to join the platform
- **Responsive Design**: Modern, mobile-friendly interface built with React and Tailwind CSS

## 🛠️ Technology Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **dotenv** - Environment variables

### Frontend

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Icon library
- **Axios** - HTTP client
- **Vite** - Build tool and dev server

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** database
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Examinator
```

### 2. Install Dependencies

Install dependencies for both frontend and backend:

```bash
npm install
cd src/backend && npm install
cd ../frontend && pnpm install
cd ../..
```

### 3. Environment Setup

Create a `.env` file in the `src/backend` directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/examinator"
JWT_SECRET="your-jwt-secret-key"
PORT=5001
NODE_ENV=development
```

### 4. Database Setup

Set up the database using Prisma:

```bash
cd src/backend
npx prisma generate
npx prisma db push
```

### 5. Run the Application

Start both frontend and backend servers:

```bash
npm run dev
```

This will start:

- Backend server on `http://localhost:5001`
- Frontend server on `http://localhost:5173`

## 📚 API Documentation

### Examiner/Admin Endpoints

- `POST /api/admin/register` - Register admin user
- `POST /api/examiner` - Register examiner
- `GET /api/examiner/:id` - Get examiner details
- `DELETE /api/examiner/:id` - Delete examiner

### Exam Management

- `POST /api/exam/:examinerId` - Create new exam
- `GET /api/exam/:id` - Get exam details
- `DELETE /api/exam/:id` - Delete exam
- `GET /api/exam/exams/:examinerId` - Get all exams created by examiner
- `POST /api/exam/submit` - Submit exam attempt
- `GET /api/exam/attempts/:examId` - Get all exam attempts for an exam
- `GET /api/exam/attempt/:attemptId` - Get exam attempt details

### Authentication

- `POST /api/auth/login` - Login
- `POST /api/auth/refresh` - Refresh access token
- `GET /api/auth/confirm` - Confirm user
- `POST /api/auth/logout/:id` - Logout
- `POST /api/auth/logout/:id` - Logout

## 🧪 Testing

Run the test suite:

```bash
cd src/backend
npm test
```

For test coverage:

```bash
npm run test:coverage
```

## 🎨 Frontend Development

The frontend is built with React and uses modern development practices:

- **Component-based architecture**
- **React Hooks** for state management
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Responsive design** principles

### Key Components

- `Header` - Navigation header with branding
- `Footer` - Site footer with links
- `Home` - Landing page with features showcase
- `ExaminerRegistration` - Registration form for examiners

## 🔧 Backend Development

The backend follows a clean architecture pattern:

- **Controllers** handle HTTP requests/responses
- **Services** contain business logic
- **Models** define data structures
- **Routes** define API endpoints
- **Utilities** provide helper functions

### Database Schema

The application uses PostgreSQL with Prisma ORM. Key entities include:

- **UserProfile** - Base user information
- **Examiner** - Examiner-specific data
- **Student** - Student-specific data
- **Exam** - Exam information
- **Question** - Exam questions
- **Option** - Question options
- **ExamAttempt** - Student exam attempts
- **Answer** - Student answers
- **AuthManager** - Authentication and authorization management
- **StudentExam** - Mapping between students and exams

## 🚀 Deployment

### Backend Deployment

1. Set up PostgreSQL database
2. Configure environment variables
3. Run database migrations
4. Deploy to your preferred platform (Heroku, AWS, etc.)

### Frontend Deployment

1. Build the frontend:

   ```bash
   cd src/frontend
   npm run build
   ```

2. Deploy the build artifacts to your hosting platform (Netlify, Vercel, etc.)

## 🤝 Contributing

We welcome contributions to the Examinator project! To ensure code quality and consistency, please follow these guidelines:

### Development Guidelines

1. **Follow Project Structure** - Maintain the existing project structure and organization patterns. This ensures consistency across the codebase and makes it easier for other developers to understand and maintain the code.

2. **Backend Testing Requirements** - All backend implementations **must** include comprehensive unit tests. This is mandatory for:

   - Controllers
   - Services/Business logic
   - Utility functions
   - API endpoints
   - Database operations

3. **Code Quality Standards**
   - Follow existing naming conventions
   - Use consistent code formatting (Prettier configuration provided)
   - Write clear, descriptive commit messages
   - Document complex functions and business logic

### Contribution Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. **Maintain project structure** - Place files in appropriate directories following existing patterns
4. **Write unit tests** for all backend functionality (see `src/backend/tests/` for examples)
5. Run tests to ensure they pass: `npm test`
6. Run linting: `npm run lint`
7. Commit your changes (`git commit -m 'Add some amazing feature'`)
8. Push to the branch (`git push origin feature/amazing-feature`)
9. Open a Pull Request to the dev branch with:
   - Clear description of changes
   - Test coverage report
   - Screenshots for UI changes (if applicable)

### Testing Requirements

- **Unit Tests**: Required for all backend services, controllers, and utilities
- **Test Coverage**: Aim for at least 80% code coverage
- **Test Structure**: Follow existing test patterns in `src/backend/tests/`
- **Test Commands**:

  ```bash
  npm test              # Run all tests
  npm run test:watch    # Run tests in watch mode
  npm run test:coverage # Generate coverage report
  ```

### Code Review Process

All contributions will be reviewed for:

- Adherence to project structure
- Presence of adequate unit tests
- Code quality and consistency
- Functionality and performance

## 📝 License

This project is licensed under the ISC License.

## 👥 Team

- **Backend Development** - Node.js, Express, Prisma
- **Frontend Development** - React, Tailwind CSS
- **Database Design** - PostgreSQL, Prisma Schema

## 📞 Support

For support and questions, please open an issue in the repository or send a mail to <fortunateomonuwa@outlook.com>.

---
