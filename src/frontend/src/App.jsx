import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { AuthProvider } from "./contexts/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"
import PublicLayout from "./components/PublicLayout"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import TakeExam from "./pages/TakeExam"
import About from "./pages/About"
import FAQs from "./pages/FAQs"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import MyExams from "./pages/MyExams"
import CreateExam from "./pages/CreateExam"
import ViewExam from "./pages/ViewExam"
import EditExam from "./pages/EditExam"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="take-exam" element={<TakeExam />} />
            <Route path="take-exam/:examId" element={<TakeExam />} />
            <Route path="about" element={<About />} />
            <Route path="faqs" element={<FAQs />} />
          </Route>

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="my-exams" element={<MyExams />} />
            <Route path="create-exam" element={<CreateExam />} />
            <Route path="exams/:examId" element={<ViewExam />} />
            <Route path="exams/:examId/edit" element={<EditExam />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Direct access to create exam for convenience */}
          <Route
            path="/create-exam"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<CreateExam />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
