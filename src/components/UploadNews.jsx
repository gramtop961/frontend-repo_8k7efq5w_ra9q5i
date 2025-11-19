import { useState } from 'react'

function UploadNews() {
  const [form, setForm] = useState({ title: '', body: '', image_url: '', author: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = {
        title: form.title,
        body: form.body,
        image_url: form.image_url || undefined,
        author: form.author || undefined,
      }
      const res = await fetch(`${baseUrl}/api/news`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('✅ News posted')
      setForm({ title: '', body: '', image_url: '', author: '' })
    } catch (e) {
      setStatus(`❌ ${e.message}`)
    }
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Post News</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Title</label>
          <input name="title" value={form.title} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Body</label>
          <textarea name="body" value={form.body} onChange={handleChange} className="w-full border rounded-md px-3 py-2" rows={6} required />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Image URL (optional)</label>
          <input type="url" name="image_url" value={form.image_url} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Author (optional)</label>
          <input name="author" value={form.author} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
        </div>
        <button className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Publish</button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>
    </div>
  )
}

export default UploadNews
