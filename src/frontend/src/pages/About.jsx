import { Link } from "react-router-dom"
import { Users, Award, Shield, BookOpen } from "lucide-react"
import "../styles/about.scss"

const About = () => {
  return (
    <div className="about-page">
      <div className="hero-section bg-purple-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Exerminator</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to revolutionize the way exams are created, managed, and taken.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Exerminator was founded in 2023 with a simple goal: to make examination processes more efficient,
              accessible, and fair for everyone involved.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of educators and developers recognized the challenges faced by both examiners and students in
              traditional examination systems. We set out to build a platform that addresses these pain points while
              providing a seamless experience.
            </p>
            <p className="text-gray-600">
              Today, Exerminator is used by educational institutions, training centers, and corporate organizations
              worldwide to streamline their examination processes.
            </p>
          </div>
          <div className="about-image">
            <img src="/images/about-team.png" alt="Exerminator Team" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To empower educators and learners with innovative examination tools that promote fairness, accessibility,
            and meaningful assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="value-card bg-white p-6 rounded-lg shadow-md text-center">
            <div className="icon-wrapper bg-purple-100 p-4 rounded-full inline-flex mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">We believe in the power of working together to create better solutions.</p>
          </div>
          <div className="value-card bg-white p-6 rounded-lg shadow-md text-center">
            <div className="icon-wrapper bg-purple-100 p-4 rounded-full inline-flex mb-4">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in everything we do, from code to customer service.
            </p>
          </div>
          <div className="value-card bg-white p-6 rounded-lg shadow-md text-center">
            <div className="icon-wrapper bg-purple-100 p-4 rounded-full inline-flex mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">We uphold the highest standards of integrity and ethics in our operations.</p>
          </div>
          <div className="value-card bg-white p-6 rounded-lg shadow-md text-center">
            <div className="icon-wrapper bg-purple-100 p-4 rounded-full inline-flex mb-4">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">We continuously innovate to improve the examination experience.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Us Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the future of examinations with Exerminator. Whether you're an educator or a student, our
            platform is designed to meet your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
            >
              Register as Examiner
            </Link>
            <Link
              to="/take-exam"
              className="px-6 py-3 bg-white text-purple-600 font-medium rounded-md border border-purple-600 hover:bg-purple-50 transition-colors"
            >
              Take an Exam
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
