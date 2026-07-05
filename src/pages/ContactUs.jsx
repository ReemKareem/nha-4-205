import React, { useState } from 'react'

const contactInfo = [
  { id: 1, icon: "📧", label: "Email", value: "hello@elevatefit.eg" },
  { id: 2, icon: "📞", label: "Phone", value: "+20 100 123 4567" },
  { id: 3, icon: "📍", label: "Location", value: "Alexandria, Egypt" },
]

const ContactUs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }

      setSent(true)
      setName('')
      setEmail('')
      setMessage('')

    } catch (err) {
      setError('Cannot connect to server. Please try again later.')
    }

    setLoading(false)
  }

  return (
    <>

      {/* Hero */}
      <div className="flex flex-col items-center text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">Get in <span className="text-[#c8ff00]">touch</span></h1>
        <p className="text-[#666] text-base md:text-lg">
          Have a question or feedback? We would love to hear from you.
        </p>
      </div>

      {/* Contact info cards */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item) => (
            <div key={item.id} className="bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-8 text-center">
              <div className="text-3xl mb-4">{item.icon}</div>
              <div className="text-[#666] text-sm mb-1">{item.label}</div>
              <div className="text-white font-bold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact form */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-900">
        <div className="max-w-xl mx-auto bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-6">Send a message</h3>

          {/* Success message */}
          {sent && (
            <div className="bg-[#c8ff00]/10 border border-[#c8ff00] text-[#c8ff00] text-sm text-center rounded-lg py-3 px-4 mb-6">
              ✅ Message sent successfully!
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 text-sm text-center rounded-lg py-3 px-4 mb-6">
              ❌ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div>
              <label className="text-[#666] text-sm block mb-2">Your name</label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-[#111] border border-zinc-800 rounded-lg px-4 py-3 text-white outline-none focus:border-[#c8ff00]"
              />
            </div>

            <div>
              <label className="text-[#666] text-sm block mb-2">Your email</label>
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#111] border border-zinc-800 rounded-lg px-4 py-3 text-white outline-none focus:border-lime-accent focus:border-[#c8ff00]"
              />
            </div>

            <div>
              <label className="text-[#666] text-sm block mb-2">Your message</label>
              <textarea
                placeholder="Your message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-[#111] border border-zinc-800 rounded-lg px-4 py-3 text-white outline-none focus:border-[#c8ff00] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c8ff00] text-black font-bold py-3 rounded-lg hover:bg-[#a8d000] transition duration-300 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>

          </form>
        </div>
      </div>

    </>
  )
}

export default ContactUs