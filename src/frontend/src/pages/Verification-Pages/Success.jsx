import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-8 space-y-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
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
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            Verification Successful
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Your account has been successfully verified. Proceed to login
          </p>
        </div>

        <button
          onClick={() => setTimeout(() => navigate("/login"), 2000)}
          className="w-full py-2 px-4 border border-transparent text-sm font-semibold rounded-lg shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Success;
