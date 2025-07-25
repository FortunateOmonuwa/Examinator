import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Verify = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 mb-6">
            <svg
              className="h-8 w-8 text-pink-600"
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
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Verification
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We have sent you a verification email. Please check your inbox and
            click the verification link to verify your account.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Do ensure to check your spam folder if you do not see the email in
            your inbox. The link is valid for 10 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
