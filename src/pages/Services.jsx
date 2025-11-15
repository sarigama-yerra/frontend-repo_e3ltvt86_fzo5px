import { motion } from 'framer-motion'
import { Film, Cpu, Rocket, Clapperboard, Scissors, Briefcase, Youtube } from 'lucide-react'

const services = [
  { icon: Film, title: 'Professional Video Editing', desc: 'Cinematic pacing, color, sound mix, and story-first cuts.' },
  { icon: Cpu, title: 'AI-Powered Editing & Enhancement', desc: 'AI denoise, upscaling, reframing, scene selects, and cleanup.' },
  { icon: Rocket, title: 'AI Content Strategy & Viral Hooks', desc: 'Hook frameworks, retention mapping, and title/thumbnail concepts.' },
  { icon: Clapperboard, title: 'Video Production (Ads, YouTube, Short Films)', desc: 'From concept to delivery with premium polish.' },
  { icon: Scissors, title: 'Reels / Shorts Editing', desc: 'High-velocity edits, kinetic typography, and captions.' },
  { icon: Briefcase, title: 'Corporate & Commercial Editing', desc: 'Executive-ready edits with brand-safe visual design.' },
  { icon: Youtube, title: 'YouTube Mgmt + Thumbnail Design', desc: 'End-to-end channel edits, optimization, and thumbnail craft.' },
]

export default function Services() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Services</h1>
        <p className="text-white/70 max-w-2xl mb-10">A glass-slick stack of offerings designed to move audiences and metrics. Every deliverable ships with AI-assisted precision and human storytelling.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative glass p-6 glow-lavender soft-shadow group">
              <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-white/10 group-hover:ring-[var(--lavender)] transition" />
              <s.icon className="w-6 h-6 text-[var(--lavender)]" />
              <h3 className="mt-3 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
