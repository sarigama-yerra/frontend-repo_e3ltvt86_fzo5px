import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', budget: '', message: '' })

  return (
    <main className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Contact</h1>
        <p className="text-white/70 max-w-2xl mb-10">Tell us about your project. We’ll respond within 24 hours with next steps and a clear estimate.</p>
        <div className="grid lg:grid-cols-3 gap-8">
          <form onSubmit={(e)=>e.preventDefault()} className="lg:col-span-2 glass glow-lavender p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="float-group">
                <input className="float-input" placeholder=" " value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
                <label className="float-label">Name</label>
              </div>
              <div className="float-group">
                <input type="email" className="float-input" placeholder=" " value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
                <label className="float-label">Email</label>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="float-group">
                <input className="float-input" placeholder=" " value={form.type} onChange={(e)=>setForm({...form, type:e.target.value})} />
                <label className="float-label">Project Type</label>
              </div>
              <div className="float-group">
                <input className="float-input" placeholder=" " value={form.budget} onChange={(e)=>setForm({...form, budget:e.target.value})} />
                <label className="float-label">Budget</label>
              </div>
            </div>
            <div className="float-group mt-4">
              <textarea rows={6} className="float-input" placeholder=" " value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
              <label className="float-label">Message</label>
            </div>
            <div className="mt-6">
              <button className="btn-glass btn-primary px-6 py-3">Send Your Project Details</button>
            </div>
          </form>
          <aside className="space-y-4">
            <div className="glass glow-lavender p-6">
              <h3 className="font-medium">Let’s collaborate</h3>
              <p className="text-sm text-white/70 mt-2">We typically start with a short call to align on goals, timeline, and deliverables.</p>
            </div>
            <div className="glass glow-lavender p-6">
              <h3 className="font-medium">Follow us</h3>
              <div className="mt-3 flex gap-3">
                {['Twitter','Instagram','YouTube','LinkedIn'].map(s => (
                  <a key={s} href="#" className="btn-glass px-4 py-2">{s}</a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
