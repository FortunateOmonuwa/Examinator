"use client"

import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import toast from "react-hot-toast"
import "../styles/profile.scss"

const Profile = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      setIsDeleting(true)
      try {
        const response = await api.delete(`/api/examiner/${user.id}`)

        if (response.data.response.isSuccessful) {
          logout()
          navigate("/login")
          toast.success("Account deleted successfully")
        } else {
          throw new Error(response.data.response.message || "Failed to delete account")
        }
      } catch (error) {
        console.error("Error deleting account:", error)
        toast.error(error.response?.data?.response?.message || error.message || "Failed to delete account")
        setIsDeleting(false)
      }
    }
  }

  return (
    <div className="profile-page">
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="mr-4 p-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Your Profile</h1>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg profile-card">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Account Information</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and preferences.</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user?.name}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user?.email}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Role</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user?.role || "Examiner"}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-8 danger-zone">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Danger Zone</h3>
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Delete Account</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>Once you delete your account, there is no going back. Please be certain.</p>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleDeleteAccount}
                  disabled={isDeleting}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:opacity-50"
                >
                  {isDeleting ? "Deleting..." : "Delete Account"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
