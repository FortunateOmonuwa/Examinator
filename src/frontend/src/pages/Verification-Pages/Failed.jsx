import { useNavigate, useLocation, useSearchParams, Link } from "react-router-dom";
import { useState } from "react";
import { SendVerficationToken } from "../../services/Verification";
import { toast } from "react-hot-toast";
import {ArrowLeft} from "lucide-react";
const Failed = () => {
  const [mailStatus, setMailStatus] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();
  const id = searchParam.get("id");
  const location = useLocation();
  //const params = new URLSearchParams(location.search);
  //const id = params.get("id");
  const navigate = useNavigate();
  const resendVerificationMail = async () => {
    try {
      const response = await SendVerficationToken({ id });
      if (response.isSuccessful) {
        setMailStatus(true);
        toast.success("Verification mail sent successfully");
        setTimeout(() => {
          navigate("/verify");
        }, 3000);
      } else {
        toast.error(response.message);
        setTimeout(() => {
          navigate("/verification/error");
        }, 3000);
      }
    } catch (error) {
      toast.error("Error resending verification mail.");
      console.error("Error resending verification mail:", error);
      navigate("/verification/error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
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
            Verification Failed
          </h2>
          <p className="text-sm text-gray-600 text-center mt-1">
            The verification link is either invalid or has expired.
          </p>
        </div>

        <div className="pt-4 text-center">
          <button
            onClick={resendVerificationMail}
            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-pink-600 hover:bg-pink-700 transition-all duration-200"
          >
            {mailStatus ? "Mail Sent ✔" : "Resend Verification Email"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Failed;
