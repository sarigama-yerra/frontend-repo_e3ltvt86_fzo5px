import { motion } from 'framer-motion'

const projects = [
  { title: 'City of Dreams – Travel Cinematic Edit', thumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Stellar Tech Launch – Corporate Promo Video', thumb: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Midnight Streets – Music Video Edit', thumb: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Lifestyle Fusion – Influencer Reel Pack', thumb: 'https://images.unsplash.com/photo-1513679407619-9d053215e1c9?q=80&w=1200&auto=format&fit=crop' },
  { title: 'AI Explained – Educational Video Series', thumb: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Blaze Motion – High-Energy Ad Edit', thumb: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Neon Drift – Product Hype Reel', thumb: 'https://images.unsplash.com/photo-1520975922284-9add786b4a30?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Echoes of Light – Short Film Color Grade', thumb: 'https://images.unsplash.com/photo-1537849246588-5298f6d4e430?q=80&w=1200&auto=format&fit=crop' },
]

export default function Projects() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Projects</h1>
        <p className="text-white/70 max-w-2xl mb-10">A curated selection of edits across ads, music, and education. Hover to feel the subtle lavender glow.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group relative overflow-hidden glass glow-lavender">
              <img src={p.thumb} alt="thumb" className="h-56 w-full object-cover opacity-90 transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h3 className="font-medium">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
