import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicLayout from "./components/PublicLayout";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TakeExam from "./pages/TakeExam";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MyExams from "./pages/MyExams";
import CreateExam from "./pages/CreateExam";
import ViewExam from "./pages/ViewExam";
import EditExam from "./pages/EditExam";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="take-exam" element={<TakeExam />} />
            <Route path="take-exam/:examId" element={<TakeExam />} />
            <Route path="about" element={<About />} />
            <Route path="faqs" element={<FAQs />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Layout />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-exams"
              element={
                <ProtectedRoute>
                  <MyExams />
                </ProtectedRoute>
              }
            />
            <Route
              path="create-exam"
              element={
                <ProtectedRoute>
                  <CreateExam />
                </ProtectedRoute>
              }
            />
            <Route
              path="exams/:examId"
              element={
                <ProtectedRoute>
                  <ViewExam />
                </ProtectedRoute>
              }
            />
            <Route
              path="exams/:examId/edit"
              element={
                <ProtectedRoute>
                  <EditExam />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route
            path="/create-exam"
            element={
              <Layout>
                <ProtectedRoute>
                  <CreateExam />
                </ProtectedRoute>
              </Layout>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
