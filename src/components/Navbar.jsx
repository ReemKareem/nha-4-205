import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-zinc-900 w-full">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        
        <div className="flex items-center gap-2 font-black text-xl tracking-wider select-none">
          <div className="bg-[#c8ff00] text-black p-1.5 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-[#c8ff00]">ELEVATE FIT</span>
        </div>

        
        
        <div className="flex items-center gap-6 text-sm">
          <NavLink to="/" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Home</NavLink>
          <NavLink to="/awareness" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Awareness</NavLink>
          <NavLink to="/exercises" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Exercises</NavLink>
          <NavLink to="/diet" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Diet Plan</NavLink>
          <NavLink to="/progress" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Progress</NavLink>
          <NavLink to="/dashboard" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Dashboard</NavLink>
          <NavLink to="/transformation" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Transformation</NavLink>
          <NavLink to="/contact" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Contact Us</NavLink>
        </div>

        
        <div className="flex items-center gap-6 text-sm">
          <NavLink to="/login" className="text-zinc-400 hover:text-white">Log in</NavLink>
          <NavLink to="/register" className="bg-[#c8ff00] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#a8d000] transition duration-300">
            Get started
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar