import { motion } from 'framer-motion'
import { Film, Cpu, Sparkles, Clapperboard } from 'lucide-react'

const cards = [
  { icon: Film, title: 'Professional Video Editing', desc: 'Narrative-driven edits, color, sound, and pacing for cinematic feel.' },
  { icon: Cpu, title: 'AI-Powered Enhancements', desc: 'AI upscaling, denoise, scene selects, and smart reframes.' },
  { icon: Sparkles, title: 'Reels / Shorts Editing', desc: 'Stop-scrolling hooks, kinetic type, and platform-perfect cuts.' },
  { icon: Clapperboard, title: 'Video Production', desc: 'Ads, promos, and short films with end-to-end creative.' },
]

export default function ServicePreview() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Core Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass glow-lavender p-6 h-full">
              <c.icon className="w-6 h-6 text-[var(--lavender)]" />
              <h3 className="mt-3 font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
