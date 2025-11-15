import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="backdrop-aurora" />
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full btn-glass mb-6">
            <span className="w-2 h-2 rounded-full lavender-bg animate-pulse" />
            <span className="text-sm text-white/80">Premium Video Editing Agency</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            We Create <span className="lavender-text">Cinematic Visuals</span> That Tell Your Story.
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            A modern studio blending storytelling, design, and AI to craft edits that feel immersive, elegant, and made for impact across ads, YouTube, music videos, and social.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-glass btn-primary px-6 py-3 flex items-center gap-2">
              Get Your Video Edited
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#contact" className="btn-glass px-6 py-3">Book a Free Strategy Call</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {['CineWave Studios','NovaPixel Media','FrameForge Labs','AstroVision Productions','CloudReel Digital'].map((brand) => (
            <div key={brand} className="glass glow-lavender p-4 text-center text-xs text-white/70">{brand}</div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
