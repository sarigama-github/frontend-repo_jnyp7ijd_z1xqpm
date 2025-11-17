import { Shield, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-blue-600 text-white">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Stephan</p>
              <p className="text-sm text-slate-500">System Administrator & Security Enthusiast</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" aria-label="GitHub" className="hover:text-slate-700"><Github className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-slate-700"><Linkedin className="w-5 h-5" /></a>
            <a href="#" aria-label="Email" className="hover:text-slate-700"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Stephan. All rights reserved.</p>
      </div>
    </footer>
  )
}
