import React, { useState } from 'react'

const statsData = [
  { id: 1, icon: "🔥", value: "39.5%", label: "Adults are obese in Egypt", color: "text-red-500", bg: "bg-red-500/10" },
  { id: 2, icon: "🩸", value: "15.6%", label: "Have diabetes in Egypt", color: "text-[#c8ff00]", bg: "bg-[#c8ff00]/10" },
  { id: 3, icon: "👶", value: "1 in 7", label: "Children are overweight", color: "text-blue-400", bg: "bg-blue-500/10" },
  { id: 4, icon: "🌍", value: "#1", label: "Obesity rate in MENA region", color: "text-orange-400", bg: "bg-orange-500/10" },
]

const factsData = [
  {
    id: 1,
    icon: "❤️",
    title: "Obesity & Heart Disease",
    description: "Excess weight puts pressure on the heart and raises the risk of heart attacks and stroke significantly."
  },
  {
    id: 2,
    icon: "🩸",
    title: "Type 2 Diabetes",
    description: "Over 90% of type 2 diabetes cases are linked to being overweight. The good news is it can be reversed with lifestyle changes."
  },
  {
    id: 3,
    icon: "📱",
    title: "Sedentary Lifestyle",
    description: "Sitting for long hours and eating processed food is the main reason obesity is rising fast in Egypt."
  },
]

const Awareness = () => {

  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')

  const calculateBMI = () => {
    const h = parseFloat(height) / 100
    const w = parseFloat(weight)

    if (!h || !w || h <= 0 || w <= 0) return

    const result = w / (h * h)
    const rounded = result.toFixed(1)
    setBmi(rounded)

    if (result < 18.5) setCategory('Underweight')
    else if (result < 25) setCategory('Normal weight')
    else if (result < 30) setCategory('Overweight')
    else setCategory('Obese')
  }

  return (
    <>

      {/* Hero */}
      <div className="flex flex-col items-center text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">Health <span className="text-[#c8ff00]">Awareness</span></h1>
        <p className="text-[#666] text-base md:text-lg">
          Understanding obesity and diabetes is the first step toward prevention. Here's what every Egyptian should know.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div key={stat.id} className="bg-[#0c0c0c] border border-zinc-900 p-8 rounded-2xl flex flex-col justify-between min-h-[170px]">
              <div className={`${stat.bg} ${stat.color} w-10 h-10 rounded-xl flex items-center justify-center text-xl`}>{stat.icon}</div>
              <div className="mt-4">
                <div className={`${stat.color} font-black text-4xl mb-1`}>{stat.value}</div>
                <div className="text-[#666] text-xs font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facts */}
      <div className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">The facts you need to know</h2>
          <p className="text-[#666]">Knowledge is the first step to a healthier life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {factsData.map((fact) => (
            <div key={fact.id} className="bg-[#0a0a0a] border border-zinc-900 p-8 rounded-2xl hover:border-[#c8ff00] transition duration-300">
              <span className="text-4xl">{fact.icon}</span>
              <h3 className="text-white font-bold text-lg mt-4 mb-2">{fact.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Did you know */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="border border-[#c8ff00] rounded-2xl p-8 flex gap-4 items-start">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="text-[#c8ff00] font-bold text-lg mb-2">Did you know?</h3>
            <p className="text-[#999] leading-relaxed">
              Egypt has one of the highest obesity rates in the world. Nearly 4 in 10 adults are obese.
              Losing just 5–10% of your body weight can dramatically reduce your risk of type 2 diabetes and heart disease.
            </p>
          </div>
        </div>
      </div>

      {/* BMI Calculator */}
      <div className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">Check your BMI</h2>
          <p className="text-[#666]">Enter your height and weight to calculate your Body Mass Index.</p>
        </div>

        <div className="max-w-lg mx-auto bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-6">BMI Calculator</h3>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-[#666] text-sm block mb-2">Height (cm)</label>
              <input
                type="number"
                placeholder="175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-[#111] border border-zinc-800 rounded-lg px-4 py-3 text-white outline-none focus:border-[#c8ff00]"
              />
            </div>
            <div>
              <label className="text-[#666] text-sm block mb-2">Weight (kg)</label>
              <input
                type="number"
                placeholder="80"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-[#111] border border-zinc-800 rounded-lg px-4 py-3 text-white outline-none focus:border-[#c8ff00]"
              />
            </div>
          </div>

          <button
            onClick={calculateBMI}
            className="w-full bg-[#c8ff00] text-black font-bold py-3 rounded-lg hover:bg-[#a8d000] transition duration-300"
          >
            Calculate BMI
          </button>

          {/* Result - only shows after calculating */}
          {bmi && (
            <div className="mt-6 text-center bg-[#111] rounded-xl p-6">
              <div className="text-[#c8ff00] text-4xl font-black mb-1">{bmi}</div>
              <div className="text-[#666] text-sm">{category}</div>
            </div>
          )}
        </div>
      </div>

    </>
  )
}

export default Awareness