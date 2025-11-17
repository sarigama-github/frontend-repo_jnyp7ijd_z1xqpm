import { Link } from 'react-router-dom'
import { Calendar, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-slate-200 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Ready to make your systems reliable, secure, and scalable?</h3>
            <p className="mt-2 text-slate-700">Schedule a call or request an assessment to get a clear, actionable plan.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              <Calendar className="w-4 h-4" /> Schedule a Call
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold">
              <Mail className="w-4 h-4" /> Request an Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
