import { useEffect, useState } from 'react'

function Gallery() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/gallery`)
        const data = await res.json()
        setItems(Array.isArray(data) ? data : [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Gallery</h2>
      {loading ? (
        <p className="text-slate-600">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-slate-600">No images yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.id} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
              <img src={it.image_url} alt={it.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-slate-800">{it.title}</h3>
                {it.description && <p className="text-sm text-slate-600 mt-1">{it.description}</p>}
                {it.tags && (
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {it.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded bg-slate-100 text-slate-700">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Gallery
