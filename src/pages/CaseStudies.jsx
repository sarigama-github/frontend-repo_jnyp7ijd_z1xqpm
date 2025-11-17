import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const cases = [
  {
    title: 'SIEM rollout for mid-sized company',
    problem: 'Limited visibility and slow incident detection',
    solution: 'Deployed SIEM, integrated logs, created correlation rules and dashboards, trained team',
    outcome: 'Mean time to detect reduced by 60%, improved compliance reporting',
  },
  {
    title: 'ISO 27001 implementation',
    problem: 'Need for formal ISMS and audit readiness',
    solution: 'Risk assessment, control selection, policies, internal audits, KPIs',
    outcome: 'Successful certification, continuous improvement cadence',
  },
  {
    title: 'Infrastructure modernization',
    problem: 'Unreliable legacy servers and manual operations',
    solution: 'Automated provisioning with Ansible/Terraform, monitoring and alerting',
    outcome: 'Reduced downtime, faster deployments, clearer SLOs',
  },
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900">Case Studies</h1>
            <p className="mt-4 text-slate-700 max-w-3xl">Brief summaries of problems solved with measurable outcomes.</p>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((c) => (
                <article key={c.title} className="rounded-lg border border-slate-200 bg-white p-6">
                  <h2 className="text-lg font-semibold text-slate-900">{c.title}</h2>
                  <dl className="mt-3 text-sm text-slate-700">
                    <dt className="font-medium text-slate-900">Problem</dt>
                    <dd className="mb-3">{c.problem}</dd>
                    <dt className="font-medium text-slate-900">Solution</dt>
                    <dd className="mb-3">{c.solution}</dd>
                    <dt className="font-medium text-slate-900">Outcome</dt>
                    <dd>{c.outcome}</dd>
                  </dl>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <a href="/contact" className="inline-flex px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">Discuss Your Project</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
