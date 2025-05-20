import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"
import "../styles/footer.scss"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-brand">
            <h2 className="text-2xl font-bold mb-4">Exerminator</h2>
            <p className="text-gray-300 mb-4">
              The ultimate examination platform for creating, managing, and taking exams with ease.
            </p>
            <div className="social-links flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:info@exerminator.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/take-exam" className="text-gray-300 hover:text-white transition-colors">
                  Take Exam
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors">
                  Create Exam
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest features and news.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-purple-600 px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Exerminator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
