"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Clock, AlertTriangle, Home } from "lucide-react";

const AccountLocked = () => {
  const location = useLocation();
  const [timeRemaining, setTimeRemaining] = useState("");
  const [lockedUntil, setLockedUntil] = useState(null);

  useEffect(() => {
    // Get locked until time from location state or URL params
    const searchParams = new URLSearchParams(location.search);
    const lockedUntilParam = searchParams.get("lockedUntil");
    const stateLockedUntil = location.state?.lockedUntil;
    
    const lockTime = lockedUntilParam || stateLockedUntil;
    
    if (lockTime) {
      setLockedUntil(new Date(lockTime));
    }
  }, [location]);

  useEffect(() => {
    if (!lockedUntil) return;

    const updateTimeRemaining = () => {
      const now = new Date();
      const timeDiff = lockedUntil.getTime() - now.getTime();

      if (timeDiff <= 0) {
        setTimeRemaining("Account unlocked! You can now try logging in again.");
        return;
      }

      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      if (hours > 0) {
        setTimeRemaining(`${hours} hour${hours !== 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`);
      } else if (minutes > 0) {
        setTimeRemaining(`${minutes} minute${minutes !== 1 ? 's' : ''} and ${seconds} second${seconds !== 1 ? 's' : ''}`);
      } else {
        setTimeRemaining(`${seconds} second${seconds !== 1 ? 's' : ''}`);
      }
    };

    updateTimeRemaining();
    const interval = setInterval(updateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [lockedUntil]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          
          <h1 className="text-center text-3xl font-extrabold text-pink-600 mb-2">
            Examinator
          </h1>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Account Temporarily Locked
          </h2>
          
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-sm font-medium text-red-800">
                  Security Protection Activated
                </h3>
                <p className="mt-1 text-sm text-red-700">
                  Your account has been temporarily locked due to multiple failed login attempts.
                  This is a security measure to protect your account.
                </p>
              </div>
            </div>
          </div>

          {lockedUntil && (
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-sm font-medium text-blue-800">
                  Time Remaining
                </h3>
              </div>
              <p className="text-lg font-semibold text-blue-900">
                {timeRemaining || "Calculating..."}
              </p>
              {!timeRemaining.includes("unlocked") && (
                <p className="text-xs text-blue-600 mt-1">
                  You can try logging in again after this time expires
                </p>
              )}
            </div>
          )}

          <div className="space-y-4">
            <div className="text-left bg-gray-50 rounded-md p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                What you can do:
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Wait for the lockout period to expire</li>
                <li>• Make sure you're using the correct email and password</li>
                <li>• Check if Caps Lock is on</li>
                <li>• Contact support if you continue having issues</li>
              </ul>
            </div>

            <div className="space-y-3">
              <Link
                to="/"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
              >
                <Home className="h-4 w-4 mr-2" />
                Go to Homepage
              </Link>

              {timeRemaining && timeRemaining.includes("unlocked") && (
                <Link
                  to="/login"
                  className="w-full flex justify-center py-3 px-4 border border-pink-600 rounded-md shadow-sm text-sm font-medium text-pink-600 bg-white hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
                >
                  Try Login Again
                </Link>
              )}
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              For security reasons, accounts are automatically locked after 5 failed login attempts.
              The lockout period is 1 hour from the last failed attempt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLocked;
