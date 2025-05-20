import { Link } from "react-router-dom"
import "../styles/not-found.scss"

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 not-found-page">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-purple-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Page not found</h2>
        <p className="mt-2 text-lg text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
