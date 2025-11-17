import { Server, Shield, Cog, Laptop, ScrollText, LineChart, Container, Bug, FileKey, KeyRound, BookOpenText, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export function SystemAdministrationSection() {
  const services = [
    { icon: Server, title: 'Infrastructure design and optimization', desc: 'On-prem, cloud, and hybrid architectures built for reliability and cost-efficiency.' },
    { icon: Laptop, title: 'Server provisioning & hardening', desc: 'Lifecycle management, patching, and secure baselines for Linux and Windows.' },
    { icon: Container, title: 'Virtualization & containers', desc: 'VMware, Proxmox, and Docker with best-practice networking and storage.' },
    { icon: Cog, title: 'Configuration & automation', desc: 'Ansible and Terraform for reproducible, auditable infrastructure changes.' },
    { icon: LineChart, title: 'Monitoring & alerting', desc: 'Prometheus, Grafana, ELK for proactive detection and clear SLOs.' },
    { icon: CheckCircle2, title: 'Backup & disaster recovery', desc: 'Tested runbooks, recovery objectives, and regular drills.' },
    { icon: KeyRound, title: 'Identity & access management', desc: 'AD, LDAP, SSO and least-privilege access control.' },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">System Administration</h2>
          <p className="mt-4 text-slate-700">Practical management of Linux/Windows servers, virtualization, networking, storage, and automation.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border border-slate-200 p-6 bg-white hover:shadow-sm transition-shadow">
              <Icon className="w-6 h-6 text-blue-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/contact" className="inline-flex px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">Request Infrastructure Review</Link>
        </div>
      </div>
    </section>
  )
}

export function SecuritySection() {
  const services = [
    { icon: Shield, title: 'SIEM deployment & tuning', desc: 'Platform-agnostic integrations: servers, firewalls, endpoints, cloud.' },
    { icon: Bug, title: 'Vulnerability management', desc: 'Hardening baselines and prioritized remediation.' },
    { icon: FileKey, title: 'Incident readiness & playbooks', desc: 'Response workflows, drills, and metrics.' },
    { icon: Server, title: 'Security architecture reviews', desc: 'Zero trust fundamentals aligned to business risk.' },
    { icon: ScrollText, title: 'Policy and process development', desc: 'Access control, change management, incident handling.' },
    { icon: BookOpenText, title: 'Compliance gap assessments', desc: 'ISO 27001 and NIS2-aware approach with practical steps.' },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Security</h2>
          <p className="mt-4 text-slate-700">Security baked into operations—with practical compliance alignment.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border border-slate-200 p-6 bg-white hover:shadow-sm transition-shadow">
              <Icon className="w-6 h-6 text-blue-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/contact" className="inline-flex px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">Schedule a Security Assessment</Link>
        </div>
      </div>
    </section>
  )
}

export function ApproachSection() {
  const steps = ['Assess', 'Architect', 'Automate', 'Monitor', 'Improve']
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Approach</h2>
          <p className="mt-4 text-slate-700">Simple, repeatable methodology that balances speed and safety.</p>
        </div>
        <ol className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <li key={s} className="rounded-lg border border-slate-200 bg-white p-4 text-center">
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">{i + 1}</div>
              <p className="mt-3 font-medium text-slate-900">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function SocialProof() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-slate-700">“Stephan brings clarity and calm to complex infrastructure. Downtime dropped and visibility improved within weeks.”</p>
            <p className="mt-4 text-sm text-slate-500">CTO, Growth-stage SaaS (placeholder)</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-slate-700">“Our ISO 27001 audit went smoothly thanks to structured processes and practical guidance.”</p>
            <p className="mt-4 text-sm text-slate-500">IT Manager, Mid-market (placeholder)</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-slate-700">“From logging to dashboards, the SIEM rollout gave us the signal we needed.”</p>
            <p className="mt-4 text-sm text-slate-500">Security Lead, Fintech (placeholder)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
