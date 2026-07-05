import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  // 1. Define states for input fields and request status
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const navigate = useNavigate()

  // 2. Handle form submission and login request
  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(false)

    // Form validation
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    try {
      setLoading(true)
      // Send POST request to the login endpoint
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: email,
        password: password
      })

      // Store the token in localStorage if login is successful
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        // Redirect the user to the dashboard
        navigate('/dashboard')
      }
    } catch (err) {
      // Handle errors coming from the backend or set a default message
      setError(err.response?.data?.message || 'Invalid email or password')
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
          <div className="bg-[#c8ff00] text-black text-center py-2.5 rounded-lg font-bold shadow-md">
            Login
          </div>
          <Link to="/register" className="text-zinc-500 hover:text-zinc-300 text-center py-2.5 flex items-center justify-center transition">
            Register
          </Link>
        </div>

        {/* Display Error Alert */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl p-3 mb-4 text-center font-medium">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
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

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="#" className="text-[#c8ff00] text-xs hover:underline transition">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="bg-[#c8ff00] text-black font-bold py-3.5 rounded-xl hover:bg-[#a8d000] transition duration-300 w-full text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Log in'}
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

        {/* Admin Tip */}
        <p className="text-zinc-600 text-[11px] text-center mt-6 leading-relaxed">
          Tip: use an email starting with "admin" to access the admin dashboard.
        </p>

      </div>
    </div>
  )
}

export default Login