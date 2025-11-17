import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-2xl">
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              System Administration and Security you can rely on
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg md:text-xl text-slate-700 max-w-xl">
              I design, secure, and maintain infrastructure that scales with your business.
            </motion.p>
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 grid gap-3 text-slate-700">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Proactive monitoring and incident response</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Secure-by-design architectures</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Compliance-aware processes (NIS2, ISO 27001)</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Proven experience implementing SIEM and ISO 27001 across multiple companies</li>
            </motion.ul>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-semibold shadow">
                Book a Consultation
              </Link>
              <Link to="/system-administration" className="inline-flex items-center justify-center px-6 py-3 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md font-semibold">
                See Services
              </Link>
            </motion.div>
            <p className="sr-only">Tagline: Keeping systems reliable, secure, and scalable</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
    </section>
  )
}
