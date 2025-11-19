import { useState } from 'react'

function UploadGallery() {
  const [form, setForm] = useState({ title: '', description: '', image_url: '', tags: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Uploading...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = {
        title: form.title,
        description: form.description || undefined,
        image_url: form.image_url,
        tags: form.tags ? form.tags.split(',').map((t) => t.trim()).filter(Boolean) : undefined,
      }
      const res = await fetch(`${baseUrl}/api/gallery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to upload')
      setStatus('✅ Uploaded successfully')
      setForm({ title: '', description: '', image_url: '', tags: '' })
    } catch (e) {
      setStatus(`❌ ${e.message}`)
    }
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Upload to Gallery</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Title</label>
          <input name="title" value={form.title} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} className="w-full border rounded-md px-3 py-2" rows={3} />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Image URL</label>
          <input type="url" name="image_url" value={form.image_url} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Tags (comma separated)</label>
          <input name="tags" value={form.tags} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
        </div>
        <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Upload</button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>
    </div>
  )
}

export default UploadGallery
