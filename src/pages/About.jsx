import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Lena Ortiz', role: 'Founder, NovaPixel Media', quote: 'They elevated our launch videos with cinematic pacing and AI crispness. Turnaround was lightning fast.' },
  { name: 'Arjun Mehta', role: 'Creator, Tech Unbound', quote: 'Hooks, structure, retention—everything felt intentional. Our watch time jumped 42%.' },
  { name: 'Mara Finn', role: 'Producer, CloudReel Digital', quote: 'Premium look, zero friction. Felt like a top-tier post house without the bloat.' },
]

export default function About() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">About Us</h1>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <section className="space-y-6">
            <div className="glass glow-lavender p-6">
              <h2 className="text-xl font-medium mb-2">Who we are</h2>
              <p className="text-white/70">We are a boutique video editing studio blending design, storycraft, and AI systems. Our team has shipped hundreds of edits across ads, product launches, short films, and YouTube formats.</p>
            </div>
            <div className="glass glow-lavender p-6">
              <h2 className="text-xl font-medium mb-2">Our mission</h2>
              <p className="text-white/70">Deliver cinematic quality at modern speed. Every frame should feel intentional, textured, and emotionally clear.</p>
            </div>
            <div className="glass glow-lavender p-6">
              <h2 className="text-xl font-medium mb-2">Creativity + AI</h2>
              <p className="text-white/70">We pair human taste with AI tooling for upscales, noise cleanup, smart reframes, scene selects, and ideation. Results: better visuals, faster production, consistent polish.</p>
            </div>
          </section>
          <section className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {["AI-enhanced workflow","Story-first edits","Fast delivery","Technical expertise"].map((b) => (
                <div key={b} className="glass glow-lavender p-6">
                  <h3 className="font-medium">{b}</h3>
                  <p className="text-sm text-white/70 mt-2">Every project includes structured feedback loops and versioning to keep things moving.</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass glow-lavender p-6">
                  <p className="text-white/80">“{t.quote}”</p>
                  <div className="mt-4 text-sm text-white/60">{t.name} — {t.role}</div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
