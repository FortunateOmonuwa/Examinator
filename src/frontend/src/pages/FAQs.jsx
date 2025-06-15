"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "../styles/faqs.scss";

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Exerminator?",
      answer:
        "Exerminator is an online examination platform that allows educators to create, manage, and conduct exams while providing students with a seamless exam-taking experience.",
    },
    {
      question: "How do I create an exam?",
      answer:
        "To create an exam, you need to register as an examiner. Once registered, you can log in to your dashboard, click on 'Create Exam', and follow the step-by-step process to set up your exam questions, options, and settings.",
    },
    {
      question: "Can I take an exam without registering?",
      answer:
        "Yes, you can take public exams or exams shared with you via a link without registering. You'll need to provide your email address to receive your results.",
    },
    {
      question: "How are exams scored?",
      answer:
        "Exams are automatically scored based on the correct answers set by the examiner. For multiple-choice questions, the system compares your answers with the correct ones and calculates your score accordingly.",
    },
    {
      question: "Can I set a time limit for my exams?",
      answer:
        "Yes, as an examiner, you can set a time limit for your exams. You can also choose whether to enforce the time limit (automatically submit when time expires) or allow students to continue after the time is up.",
    },
    {
      question: "How do I share my exam with students?",
      answer:
        "After creating an exam, you can share it by making it public (searchable by subject) or by generating a unique link that you can send to your students via email or other communication channels.",
    },
    {
      question: "Can I edit an exam after creating it?",
      answer:
        "Yes, you can edit your exams at any time before they are taken. Once a student has started or completed an exam, you cannot make changes to that instance of the exam to maintain integrity.",
    },
    {
      question: "Is there a limit to how many exams I can create?",
      answer:
        "In the current version, there is no limit to the number of exams you can create as an examiner.",
    },
    {
      question: "How do I view the results of my exams?",
      answer:
        "As an examiner, you can view detailed results and analytics for each exam from your dashboard. Select the exam and click on 'View Results' to see individual and aggregate performance data.",
    },
    {
      question: "Is my data secure on Exerminator?",
      answer:
        "Yes, we take data security very seriously. All data is encrypted, and we follow industry best practices to ensure the security and privacy of your information.",
    },
  ];

  return (
    <div className="faqs-page">
      <div className=" bg-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find answers to common questions about Exerminator and how it works.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item bg-white rounded-lg shadow-md overflow-hidden ${openFaq === index ? "active" : ""}`}
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-pink-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <div
                  className={`faq-answer px-6 pb-6 ${openFaq === index ? "block" : "hidden"}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              If you couldn't find the answer to your question, feel free to
              contact us.
            </p>
            <a
              href="mailto:support@exerminator.com"
              className="inline-block px-6 py-3 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
