"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, X, User } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"
import "../styles/public-header.scss"

const PublicHeader = () => {
  const { user } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="public-header bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-purple-600">Exerminator</h1>
            </Link>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/take-exam" className="nav-link">
                Take Exam
              </Link>
              <Link to={user ? "/create-exam" : "/register"} className="nav-link">
                Create Exam
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/faqs" className="nav-link">
                FAQs
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            {user ? (
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center text-sm px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <User className="h-5 w-5 mr-2" />
                Dashboard
              </button>
            ) : (
              <div className="flex space-x-4">
                <Link to="/login" className="text-sm px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-sm px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700"
                >
                  Register
                </Link>
              </div>
            )}
            <button
              type="button"
              className="md:hidden ml-4 text-gray-500 hover:text-gray-600"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/take-exam"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              Take Exam
            </Link>
            <Link
              to={user ? "/create-exam" : "/register"}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              Create Exam
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="/faqs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              FAQs
            </Link>
            {user ? (
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={toggleMobileMenu}
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-purple-600 text-white hover:bg-purple-700"
                  onClick={toggleMobileMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default PublicHeader
