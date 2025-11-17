import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Shield, Bug, FileKey, Server, ScrollText, BookOpenText, Gauge } from 'lucide-react'

export default function Security() {
  const services = [
    { icon: Shield, title: 'SIEM deployment & tuning', bullets: ['Servers, firewalls, endpoints, cloud', 'Correlation rules that matter', 'Dashboards and alerting'] },
    { icon: Bug, title: 'Vulnerability management', bullets: ['Baselines & CIS mapping', 'Prioritized remediation', 'Metrics and ownership'] },
    { icon: FileKey, title: 'Incident readiness & playbooks', bullets: ['Response workflows', 'Tabletop exercises', 'Clear RACI & escalation'] },
    { icon: Server, title: 'Security architecture reviews', bullets: ['Zero trust fundamentals', 'Network segmentation', 'Identity-first security'] },
    { icon: ScrollText, title: 'Policy & process development', bullets: ['Access control', 'Change management', 'Incident handling'] },
    { icon: BookOpenText, title: 'Compliance gap assessments', bullets: ['ISO 27001, NIS2-aware', 'Executive summary', 'Prioritized roadmap'] },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900">Security</h1>
            <p className="mt-4 text-slate-700 max-w-3xl">Security baked into operations—with practical compliance alignment. Deliverables include executive summary, prioritized roadmap, and measurable KPIs.</p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ icon: Icon, title, bullets }) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-white p-6">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                  <ul className="mt-3 space-y-1 text-sm text-slate-700 list-disc list-inside">
                    {bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="/contact" className="inline-flex px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">Schedule a Security Assessment</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
