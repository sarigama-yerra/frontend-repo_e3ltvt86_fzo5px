import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/60">© {new Date().getFullYear()} AstraCut Studio. All rights reserved.</div>
        <nav className="flex gap-4 text-sm text-white/70">
          {['Home','Services','Projects','About','Contact'].map((i) => (
            <Link key={i} className="hover:text-white" to={`/${i.toLowerCase()==='home'?'':i.toLowerCase()}`}>{i}</Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
