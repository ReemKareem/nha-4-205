import React, { useState, useEffect } from 'react'

const activityFeed = [
  { id: 1, text: "Logged a 30-min walk — 150 kcal burned" },
  { id: 2, text: "Updated weight to 79 kg" },
  { id: 3, text: "Completed Leg Day workout" },
  { id: 4, text: "Viewed Breakfast meal plan" },
]

const healthTips = [
  "Aim for 7–9 hours of quality sleep every night.",
  "Drink at least 8 glasses of water daily.",
  "Take a 10-minute walk after every meal.",
]

const Dashboard = () => {

  // user profile data from the backend
  const [profile, setProfile] = useState(null)

  // progress history (weight log) from the backend
  const [progressHistory, setProgressHistory] = useState([])

  // for logging new weight
  const [newWeight, setNewWeight] = useState('')
  const [logLoading, setLogLoading] = useState(false)
  const [logError, setLogError] = useState('')

  // health tip rotation
  const [currentTip, setCurrentTip] = useState(0)

  // get the token from localStorage — the login page saves it there
  const token = localStorage.getItem('token')

  // runs once when the page loads — fetches profile and progress history
  useEffect(() => {
    fetchProfile()
    fetchProgressHistory()
  }, [])

  const fetchProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const data = await response.json()

      if (response.ok) {
        setProfile(data)
      }

    } catch (err) {
      console.log('Could not load profile', err)
    }
  }

  const fetchProgressHistory = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/progress/history', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const data = await response.json()

      if (response.ok) {
        setProgressHistory(data)
      }

    } catch (err) {
      console.log('Could not load progress history', err)
    }
  }

  const logWeight = async () => {
    if (!newWeight) return
    setLogError('')
    setLogLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ weight: parseFloat(newWeight) })
      })

      const data = await response.json()

      if (!response.ok) {
        setLogError(data.message || 'Could not log weight.')
        setLogLoading(false)
        return
      }

      // add new entry to the top of the list without refetching
      setProgressHistory([data, ...progressHistory])
      setNewWeight('')

    } catch (err) {
      setLogError('Cannot connect to server.')
    }

    setLogLoading(false)
  }

  const nextTip = () => {
    if (currentTip < healthTips.length - 1) setCurrentTip(currentTip + 1)
    else setCurrentTip(0)
  }

  return (
    <>

      {/* Welcome */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <h1 className="text-white text-4xl font-bold mb-1">
          Welcome back, <span className="text-[#c8ff00]">{profile ? profile.name : '...'}</span> 👋
        </h1>
        <p className="text-[#666]">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
      </div>

      {/* Stats from profile */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-[#0c0c0c] border border-zinc-900 p-6 rounded-2xl">
            <div className="bg-[#c8ff00]/10 text-[#c8ff00] w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4">⚖️</div>
            <div className="text-[#c8ff00] font-black text-2xl mb-1">
              {profile && profile.weight && profile.height
                ? (profile.weight / ((profile.height / 100) * (profile.height / 100))).toFixed(1)
                : '--'}
            </div>
            <div className="text-[#666] text-xs">Current BMI</div>
          </div>

          <div className="bg-[#0c0c0c] border border-zinc-900 p-6 rounded-2xl">
            <div className="bg-blue-500/10 text-blue-400 w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4">💪</div>
            <div className="text-blue-400 font-black text-2xl mb-1">{profile ? profile.weight + ' kg' : '--'}</div>
            <div className="text-[#666] text-xs">Current Weight</div>
          </div>

          <div className="bg-[#0c0c0c] border border-zinc-900 p-6 rounded-2xl">
            <div className="bg-green-500/10 text-green-400 w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4">🎯</div>
            <div className="text-green-400 font-black text-2xl mb-1">{profile ? profile.goal || '--' : '--'}</div>
            <div className="text-[#666] text-xs">Your Goal</div>
          </div>

          <div className="bg-[#0c0c0c] border border-zinc-900 p-6 rounded-2xl">
            <div className="bg-red-500/10 text-red-400 w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4">🔥</div>
            <div className="text-red-400 font-black text-2xl mb-1">{profile ? profile.calories || '--' : '--'}</div>
            <div className="text-[#666] text-xs">Daily Calories</div>
          </div>

        </div>
      </div>

      {/* Quick actions + health tip */}
      <div className="max-w-7xl mx-auto px-6 pb-12 border-t border-zinc-900 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Quick actions + activity feed */}
          <div className="md:col-span-2 bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-8">
            <h3 className="text-white font-bold text-lg mb-6">Quick actions</h3>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href="/exercises" className="flex-1 text-center border border-zinc-800 text-white font-bold py-3 rounded-lg hover:border-[#c8ff00] transition duration-300">
                🏋️ Start exercise
              </a>
              <a href="/diet-plan" className="flex-1 text-center border border-zinc-800 text-white font-bold py-3 rounded-lg hover:border-[#c8ff00] transition duration-300">
                🍽️ View diet plan
              </a>
              <a href="/awareness" className="flex-1 text-center border border-zinc-800 text-white font-bold py-3 rounded-lg hover:border-[#c8ff00] transition duration-300">
                📊 Check BMI
              </a>
            </div>

            <h3 className="text-white font-bold text-lg mb-4">Recent activity</h3>
            <ul className="flex flex-col gap-3">
              {activityFeed.map((item) => (
                <li key={item.id} className="flex items-center gap-3 py-3 border-b border-zinc-900 last:border-0">
                  <span className="w-2 h-2 rounded-full bg-[#c8ff00] shrink-0"></span>
                  <span className="text-[#999] text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Health tip */}
          <div className="bg-[#0a0a0a] border border-[#c8ff00] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-[#c8ff00] font-bold text-lg mb-3">💡 Health tip</h3>
              <p className="text-[#999] leading-relaxed">{healthTips[currentTip]}</p>
            </div>
            <button
              onClick={nextTip}
              className="mt-6 text-sm text-[#666] hover:text-[#c8ff00] transition duration-300 text-left"
            >
              Next tip →
            </button>
          </div>

        </div>
      </div>

      {/* Log weight + progress history from backend */}
      <div className="max-w-7xl mx-auto px-6 pb-24 border-t border-zinc-900 pt-12">
        <h3 className="text-white font-bold text-lg mb-6">Log your weight</h3>

        <div className="flex gap-3 max-w-sm mb-4">
          <input
            type="number"
            placeholder="Weight (kg)"
            value={newWeight}
            onChange={(e) => setNewWeight(e.target.value)}
            className="flex-1 bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-3 text-white outline-none focus:border-[#c8ff00]"
          />
          <button
            onClick={logWeight}
            disabled={logLoading}
            className="bg-[#c8ff00] text-black font-bold px-6 rounded-lg hover:bg-[#a8d000] transition duration-300 disabled:opacity-50"
          >
            {logLoading ? '...' : 'Log'}
          </button>
        </div>

        {logError && (
          <p className="text-red-400 text-sm mb-6">{logError}</p>
        )}

        {/* Progress history from backend */}
        {progressHistory.length > 0 && (
          <div className="flex flex-col gap-3 max-w-sm mt-6">
            {progressHistory.map((entry, index) => (
              <div key={index} className="bg-[#0a0a0a] border border-zinc-900 rounded-xl px-5 py-3 flex justify-between items-center">
                <span className="text-[#c8ff00] font-bold">{entry.weight} kg</span>
                <span className="text-[#666] text-sm">
                  {new Date(entry.date || entry.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>

    </>
  )
}

export default Dashboard