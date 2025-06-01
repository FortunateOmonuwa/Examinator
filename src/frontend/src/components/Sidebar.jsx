"use client";

import { NavLink } from "react-router-dom";
import { Home, PlusCircle, User, FileText } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import "../styles/sidebar.scss";

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white sidebar">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <NavLink to="/">
                <span className="text-xl font-bold text-purple-600 logo">
                  Examinator
                </span>
              </NavLink>
            </div>
            <div className="mt-8 px-3">
              <p className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {user?.name}
              </p>
              <div className="mt-2 space-y-1">
                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-purple-50 text-purple-700"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }`
                  }
                >
                  <Home className="mr-3 h-5 w-5 text-gray-500" />
                  Dashboard
                </NavLink>
                <NavLink
                  to="/dashboard/my-exams"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-purple-50 text-purple-700"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }`
                  }
                >
                  <FileText className="mr-3 h-5 w-5 text-gray-500" />
                  My Exams
                </NavLink>
                <NavLink
                  to="create-exam"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-purple-50 text-purple-700"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }`
                  }
                >
                  <PlusCircle className="mr-3 h-5 w-5 text-gray-500" />
                  Create Exam
                </NavLink>
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-purple-50 text-purple-700"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }`
                  }
                >
                  <User className="mr-3 h-5 w-5 text-gray-500" />
                  Profile
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
