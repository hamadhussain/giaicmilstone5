"use client";
import React, { useState } from "react";
import { jsPDF } from "jspdf"; // Import jsPDF

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    workExperience: "",
    skills: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Editable = () => {
    setIsSubmitted(false);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);

    doc.text(`Resume of ${formData.name}`, 20, 20);
    doc.setFontSize(12);

    doc.text(`Email: ${formData.email}`, 20, 30);
    doc.text(`Education: ${formData.education}`, 20, 40);
    doc.text(`Work Experience: ${formData.workExperience}`, 20, 50);
    doc.text(`Technical Skills: ${formData.skills}`, 20, 60);

    doc.save(`${formData.name}.pdf`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    generatePDF();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white h-screen rounded-lg">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-4xl font-bold mb-8">
            Submit Form To Generate Resume
          </h1>
          <div>
            <label className="block text-lg font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-6">
            <label className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-6">
            <label className="block text-lg font-semibold">Education</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-6">
            <label className="block text-lg font-semibold">
              Work Experience
            </label>
            <input
              type="text"
              name="workExperience"
              value={formData.workExperience}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-6">
            <label className="block text-lg font-semibold">Skills</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Generate Resume
          </button>
        </form>
      ) : (
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-center mb-8">
            {formData.name} Resume
          </h2>
          <div>
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-700">Email</h3>
              <p className="pl-6">{formData.email}</p>
            </section>
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-700">Education</h3>
              <p className="pl-6">{formData.education}</p>
            </section>
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-700">
                Work Experience
              </h3>
              <p className="pl-6">{formData.workExperience}</p>
            </section>
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-700">
                Technical Skills
              </h3>
              <p className="pl-6">{formData.skills}</p>
            </section>
          </div>
          <button
            onClick={Editable}
            className="mt-6 w-full sm:w-auto px-6 py-3 bg-green-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Edit Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
