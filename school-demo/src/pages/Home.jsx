import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Sonarpur Vidyapith School </h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#features" className="hover:text-blue-500">Features</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
            <Link to="/login" className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Admin Login</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Sonarpur Vidyapith School </h2>
        <p className="text-lg text-gray-700 mb-6">Empowering education with modern technology</p>
        <a href="#features" className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 transition">Explore Features</a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">About Us</h3>
            <p className="text-gray-700 leading-relaxed">
              Sonarpur Vidyapith School is committed to providing quality education in a safe and nurturing environment.
              We are dedicated to academic excellence and all-round development of every student.
            </p>
          </div>
          <img src="https://content.jdmagicbox.com/comp/kolkata/v6/033pxx33.xx33.110414103515.y1v6/catalogue/sonarpur-vidyapith-sonarpur-kolkata-schools-2z3i3zc.jpg" alt="school" className="rounded-lg shadow" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">School Services</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">PDF Notes</h4>
              <p className="text-gray-600">Access subject-wise study materials in downloadable format.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">Attendance</h4>
              <p className="text-gray-600">Track daily attendance and send SMS alerts to parents.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">Certificates</h4>
              <p className="text-gray-600">Download achievement and participation certificates.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">Class Booking</h4>
              <p className="text-gray-600">Book limited-seat classes with date & WhatsApp confirmations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-700 mb-4">Email: contact@sunriseschool.edu.in | Phone: +91 98765 43210</p>
          <p className="text-gray-600">Address: Sunrise Public School, Your City, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        © {new Date().getFullYear()} Sunrise Public School. All rights reserved.
      </footer>
    </div>
  );
}
