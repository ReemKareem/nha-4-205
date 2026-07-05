import React from 'react'

const FeatureData = [
  {
    id: 1,
    icon: "🤖",
    title: "AI Chatbot",
    description: "Get instant answers about BMI, diet, and exercise from our smart health assistant."
  },
  {
    id: 2,
    icon: "📊",
    title: "Progress Tracker",
    description: "Track your weight, BMI, and activity over time with beautiful charts."
  },
  {
    id: 3,
    icon: "📸",
    title: "Before & After",
    description: "Showcase your transformation and get inspired by real results."
  },
  {
    id: 4,
    icon: "🏋️",
    title: "Gym & Exercises",
    description: "Curated workouts for every level, from beginner to advanced."
  },
  {
    id: 5,
    icon: "🍽️",
    title: "Diet Plans",
    description: "Personalized meal plans and calorie calculators tailored for you."
  },
  {
    id: 6,
    icon: "⚡",
    title: "Admin Dashboard",
    description: "Powerful tools to manage users, content, and platform reports."
  }
]
const testimonialsData = [
  { id: 1, initial: "AH",
      name: "Ahmed Hassan",
      review: '"Elevate Fit helped me lose 12kg in 4 months. The BMI tracker kept me accountable every single day."' 
  },

  { id: 2, initial: "MS",
      name: "Mona Salah",
      review: '"The diet plans are realistic and made for Egyptian food. I finally got my blood sugar under control."'
  },

  { id: 3, initial: "KA", 
    name: "Karim Adel", 
    review: '"The AI chatbot answers all my questions instantly. Best fitness platform I have ever used."' 
  },
];

const Home = () => {
  return (
    <>
    {/* Hero section*/}
    <div className="flex flex-col items-center text-center px-2 pt-20 pb-16 max-w-5xl mx-auto">
    <span className="text-[#c8ff00] border-[#c8ff00] border-1 px-4 py-1 rounded-full  text-xs">Health platform for Egypt</span>

    <div className=" my-4 mt-8 py-4">
    <h1 className="text-white text-5xl md:text-7xl font-bold">Take control of your <span className="text-[#c8ff00]">health journey</span></h1>
    <p className="text-[#666] text-base md:text-lg mt-4 ">Track your BMI, follow personalized diet plans, and access curated exercises — all designed to help Egyptians fight obesity and diabetes and build lasting healthy habits.</p>
    </div>

    <div className="flex gap-4 mt-6 ">
    <a href="/awareness" className="bg-[#c8ff00] text-black px-6 py-3 rounded-lg font-bold ">Calculate BMI</a>
    <a href="/login" className="border border-[#c8ff00] text-[#c8ff00] px-6 py-3 rounded-lg font-bold hover:bg-[#c8ff00] hover:text-black">Start your journey</a>
    </div>

    </div>

{/*  section 1 */}
    
<div className="max-w-7xl mx-auto px-6 pb-24">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
    
    {/* card 1 */}
    
    <div className="bg-[#0c0c0c] border border-zinc-900 p-8 rounded-2xl w-full flex flex-col justify-between min-h-[190px]">
      <div className="bg-red-500/10 text-red-500 w-10 h-10 rounded-xl flex items-center justify-center text-xl">🔥</div>
      <div className="mt-4">
        <div className="text-red-500 font-black text-4xl mb-1">39.5%</div>
        <div className="text-[#666] text-xs font-medium">Obesity rate in Egypt</div>
      </div>
    </div>

    {/* card 2 */}
    <div className="bg-[#0c0c0c] border border-zinc-900 p-8 rounded-2xl w-full flex flex-col justify-between min-h-[190px]">
      <div className="bg-green-500/10 text-green-500 w-10 h-10 rounded-xl flex items-center justify-center text-xl">💚</div>
      <div className="mt-4">
        <div className="text-[#bfff00] font-black text-4xl mb-1">15.6%</div>
        <div className="text-[#666] text-xs font-medium">Diabetes prevalence</div>
      </div>
    </div>

    {/* card 3 */}
    <div className="bg-[#0c0c0c] border border-zinc-900 p-8 rounded-2xl w-full flex flex-col justify-between min-h-[190px]">
      <div className="bg-blue-500/10 text-blue-500 w-10 h-10 rounded-xl flex items-center justify-center text-xl">🩻</div>
      <div className="mt-4">
        <div className="text-[#4d9fff] font-black text-4xl mb-1">73%</div>
        <div className="text-[#666] text-xs font-medium">Need lifestyle change</div>
      </div>
    </div>

  </div>
</div>

      {/*  section 2 */}

<div className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">

  <div className="items-center text-center mb-16">
    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Powerful features</h2>
    <p className="text-[#666]">Everything you need to elevate your health, in one place.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
    {FeatureData.map((feature) => (

      <div key={feature.id} className="bg-[#0a0a0a] p-8 rounded-2xl border border-zinc-900 hover:border-[#c8ff00] transition duration-300 flex flex-col justify-between min-h-[220px]">
        
        <div>
          <span className="text-4xl">{feature.icon}</span>
          <h3 className="text-white font-bold text-lg mt-4">{feature.title}</h3>
          <p className="text-[#666] text-sm mt-2 leading-relaxed">{feature.description}</p>
        </div>

      </div>
    ))}
  </div>

</div>
      {/*  section 3*/}
        
        <div className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">
          <div className="text-center mb-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-3">What our users say</h2>
            <p className="text-[#666]">Real people, real results.</p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="bg-[#0a0a0a] p-8 rounded-2xl border border-zinc-900 hover:border-[#c8ff00] transition duration-300 flex flex-col justify-between min-h-[220px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#c8ff00] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold">{testimonial.initial}</div>
                    <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                  </div>
                  <p className="text-[#666] text-sm leading-relaxed">{testimonial.review}</p>
                </div>
              ))}
            </div>
          </div>
        
      {/*  section 4 */}
          
        <div className="max-w-7xl mx-auto px-6 pb-24 border-t border-zinc-900 pt-24">
          <div className="bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-12 md:p-16 w-full flex flex-col items-center text-center">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ready to transform your life?</h2>
            <p className="text-[#666] mb-8 max-w-2xl text-base md:text-lg leading-relaxed">Join thousands of Egyptians taking control of their health today. It's free to start.</p>
            <a href="/login" className="bg-[#c8ff00] text-black font-bold py-3.5 px-8 rounded-lg hover:bg-[#a8d000] transition duration-300">Get Started free</a>
          </div>
        </div>
          
    </>
  )
}

export default Home