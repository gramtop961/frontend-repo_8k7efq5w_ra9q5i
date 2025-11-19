import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus('✅ Message sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (e) {
      setStatus(`❌ ${e.message}`)
    }
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Subject</label>
          <input name="subject" value={form.subject} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="w-full border rounded-md px-3 py-2" rows={6} required />
        </div>
        <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Send</button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>
    </div>
  )
}

export default Contact
