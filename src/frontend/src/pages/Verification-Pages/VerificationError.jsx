import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ResendVerificationMail } from "../../services/Verification";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
const VerificationError = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleMailSending = async (e) => {
    e.preventDefault();
    try {
      const response = await ResendVerificationMail(email);
      console.log("Response:", response);
      if (response.isSuccessful) {
        toast.success("Verification mail sent successfully");
        setTimeout(() => {
          navigate("/verify");
        }, 3000);
      } else {
        setTimeout(() => {
          toast.error(response.message);
        }, 3000);
      }
    } catch (error) {
      setTimeout(() => {
        toast.error(
          "An error occurred while resending the verification mail. Please try again later."
        );
      }, 3000);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-8 space-y-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
            <svg
              className="h-8 w-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <Link
            to="/"
            className="absolute top-4 left-4 flex items-center text-sm text-pink-600 hover:underline hover:text-pink-700 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home Page
          </Link>
          <h2 className="mt-4 text-2xl font-bold text-gray-800 text-center">
            Request New Link
          </h2>
          <p className="text-sm text-gray-600 text-center">
            Enter your email below to request a new verification link.
          </p>
        </div>

        <form onSubmit={handleMailSending} className="space-y-4">
          <div>
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="e.g. john@example.com"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-semibold rounded-lg shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
          >
            Send Verification Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationError;
