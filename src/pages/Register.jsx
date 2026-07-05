import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  // 1. Define states for registration fields and request status
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  // 2. Handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')

    // Client-side validation: Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match!')
      return
    }

    // Check if required fields are filled
    if (!name || !email || !password) {
      setError('Please fill in all required fields')
      return
    }

    try {
      setLoading(true)
      // Send POST request with fields matching backend requirements
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name: name,
        email: email,
        password: password
      })

      // Redirect user to login page upon successful account creation
      if (response.data) {
        navigate('/login')
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    // The utility class [&~footer]:hidden strictly hides the footer on this layout
    <div className="min-h-[85vh] bg-[#000000] flex flex-col items-center justify-center px-6 py-12 [&~footer]:hidden">
      
      {/* Logo Section */}
      <div className="flex items-center gap-2 font-black text-2xl tracking-wider select-none mb-8">
        <div className="bg-[#c8ff00] text-black p-1.5 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-[#c8ff00]">ELEVATE FIT</span>
      </div>

      {/* Main Card Container */}
      <div className="bg-[#0a0a0a] border border-zinc-900 w-full max-w-md rounded-2xl p-8 flex flex-col">
        
        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 bg-[#141414] p-1 rounded-xl mb-6 text-sm font-medium">
          <Link to="/login" className="text-zinc-500 hover:text-zinc-300 text-center py-2.5 flex items-center justify-center transition">
            Login
          </Link>
          <div className="bg-[#c8ff00] text-black text-center py-2.5 rounded-lg font-bold shadow-md">
            Register
          </div>
        </div>

        {/* Display Error Alert */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl p-3 mb-4 text-center font-medium">
            {error}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-zinc-400 text-xs font-medium">Full Name</label>
            <input 
              type="text" 
              placeholder="Your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#141414] border border-zinc-900 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8ff00] transition w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-zinc-400 text-xs font-medium">Email</label>
            <input 
              type="email" 
              placeholder="you@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#141414] border border-zinc-900 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8ff00] transition w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-zinc-400 text-xs font-medium">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#141414] border border-zinc-900 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8ff00] transition w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-zinc-400 text-xs font-medium">Confirm Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-[#141414] border border-zinc-900 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8ff00] transition w-full"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="bg-[#c8ff00] text-black font-bold py-3.5 rounded-xl hover:bg-[#a8d000] transition duration-300 w-full text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-zinc-900"></div>
          <span className="flex-shrink mx-4 text-zinc-600 text-xs font-bold uppercase tracking-wider">OR</span>
          <div className="flex-grow border-t border-zinc-900"></div>
        </div>

        {/* Google OAuth Button */}
        <button className="border border-zinc-800 text-white font-medium py-3 rounded-xl hover:bg-[#141414] hover:border-zinc-700 transition duration-300 w-full text-sm flex items-center justify-center gap-2">
          <span>🌐</span> Continue with Google
        </button>

      </div>
    </div>
  )
}

export default Register