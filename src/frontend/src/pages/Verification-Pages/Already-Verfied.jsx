// import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AlreadyVerified = () => {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       navigate("/login");
  //     }, 3000);

  //     return () => clearTimeout(timeout);
  //   }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-8 space-y-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100">
            <svg
              className="h-8 w-8 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
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
            Already Verified
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Your account is already verified.
          </p>
        </div>

        <button
          onClick={() =>
            setTimeout(() => {
              navigate("/login");
            }, 2000)
          }
          className="w-full py-2 px-4 border border-transparent text-sm font-semibold rounded-lg shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
        >
          Proceed to login
        </button>
      </div>
    </div>
  );
};

export default AlreadyVerified;
