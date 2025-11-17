import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Server, Laptop, Container, Cog, LineChart, CheckCircle2, KeyRound } from 'lucide-react'

export default function SystemAdministration() {
  const services = [
    { icon: Server, title: 'Infrastructure design and optimization', bullets: ['On-prem, cloud, hybrid', 'Cost-efficient, reliable architectures', 'Capacity planning & performance tuning'] },
    { icon: Laptop, title: 'Server provisioning & hardening', bullets: ['Linux/Windows baselines', 'Patching & lifecycle', 'CIS-aligned hardening'] },
    { icon: Container, title: 'Virtualization & containers', bullets: ['VMware, Proxmox', 'Docker & networking', 'Storage & backup integration'] },
    { icon: Cog, title: 'Configuration & automation', bullets: ['Ansible, Terraform', 'Git-driven change control', 'Idempotent runbooks'] },
    { icon: LineChart, title: 'Monitoring & alerting', bullets: ['Prometheus & Grafana', 'ELK for search & SIEM data', 'Clear SLOs & dashboards'] },
    { icon: CheckCircle2, title: 'Backup & DR', bullets: ['Recovery objectives defined', 'Regular test restores', 'Documented runbooks'] },
    { icon: KeyRound, title: 'Identity & access', bullets: ['AD, LDAP, SSO', 'Least privilege & RBAC', 'Joiners/movers/leavers flows'] },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900">System Administration</h1>
            <p className="mt-4 text-slate-700 max-w-3xl">Practical management of Linux/Windows servers, virtualization, networking, storage, and automation. Assess → Architect → Automate → Monitor → Improve.</p>

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
              <a href="/contact" className="inline-flex px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">Request Infrastructure Review</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
