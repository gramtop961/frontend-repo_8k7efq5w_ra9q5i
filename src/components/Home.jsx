function Home() {
  return (
    <div className="relative">
      <section className="min-h-[70vh] grid place-items-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Together, we create lasting change</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">We are a non-profit organization focused on empowering communities through education, health, and sustainable development.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#about" className="px-6 py-3 rounded-md bg-white text-slate-900 font-semibold hover:opacity-90">Learn More</a>
            <a href="/contact" className="px-6 py-3 rounded-md bg-black/30 border border-white/30 text-white font-semibold hover:bg-black/40">Get Involved</a>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          {title: 'Education', desc: 'Scholarships, school supplies, and mentorship for children.'},
          {title: 'Health', desc: 'Community clinics, nutrition, and clean water initiatives.'},
          {title: 'Livelihood', desc: 'Skills training and micro-grants for small businesses.'},
        ].map((card) => (
          <div key={card.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-xl font-semibold mb-2 text-slate-800">{card.title}</h3>
            <p className="text-slate-600">{card.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home
