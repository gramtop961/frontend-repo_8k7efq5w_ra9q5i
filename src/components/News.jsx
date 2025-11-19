import { useEffect, useState } from 'react'

function News() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/news`)
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
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">News</h2>
      {loading ? (
        <p className="text-slate-600">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-slate-600">No news yet.</p>
      ) : (
        <div className="space-y-6">
          {items.map((it) => (
            <article key={it.id} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
              {it.image_url && <img src={it.image_url} alt={it.title} className="w-full h-64 object-cover" />}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800">{it.title}</h3>
                {it.author && <p className="text-sm text-slate-500 mt-1">By {it.author}</p>}
                <p className="text-slate-700 mt-3 whitespace-pre-line">{it.body}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default News
