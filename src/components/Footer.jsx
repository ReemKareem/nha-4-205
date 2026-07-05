import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-900 text-zinc-400 text-sm">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
        
        {/* col 1 ELEVATE FIT */ }
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-black text-xl tracking-wider select-none">
            <div className="bg-[#c8ff00] text-black p-1.5 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-[#c8ff00] font-black text-lg">ELEVATE FIT</span>
          </div>
          <p className="text-zinc-500 leading-relaxed max-w-xs">
            Egypt's health platform to fight obesity and diabetes through awareness, tracking, diet, and exercise.
          </p>
          {/* Icons */}
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="w-8 h-8 border border-zinc-800 rounded-lg flex items-center justify-center hover:text-white hover:border-zinc-700 transition">📸</a>
            <a href="#" className="w-8 h-8 border border-zinc-800 rounded-lg flex items-center justify-center hover:text-white hover:border-zinc-700 transition">🐦</a>
            <a href="#" className="w-8 h-8 border border-zinc-800 rounded-lg flex items-center justify-center hover:text-white hover:border-zinc-700 transition">👤</a>
          </div>
        </div>

        {/* col 2 Quick Links*/}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold mb-1 text-lg">Quick Links</h4>
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/awareness" className="hover:text-white transition">Awareness</Link>
          <Link to="/exercises" className="hover:text-white transition">Exercises</Link>
          <Link to="/diet" className="hover:text-white transition">Diet Plan</Link>
        </div>

        {/* col 3: Resources */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold mb-1 text-lg">Resources</h4>
          <Link to="/progress" className="hover:text-white transition">Progress Tracker</Link>
          <Link to="/transformation" className="hover:text-white transition">Transformations</Link>
          <Link to="/chatbot" className="hover:text-white transition">AI Chatbot</Link>
          <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
        </div>

        {/* col 4: Contact Info */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold mb-1 text-lg">Contact</h4>
          <div className="flex items-center gap-2 text-zinc-500">
            <span>✉️</span> <a href="mailto:hello@elevatefit.eg" className="hover:text-white transition text-zinc-400">hello@elevatefit.eg</a>
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <span>📞</span> <span className="text-zinc-400">+20 100 123 4567</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <span>📍</span> <span className="text-zinc-400">Cairo, Egypt</span>
          </div>
        </div>

      </div>

      <div className="border-t border-zinc-900/60 py-8 text-center text-xs text-zinc-600">
        © 2026 Elevate Fit. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer