import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const posts = [
  { title: 'Getting real value from your SIEM: correlation rules that matter', category: 'Security' },
  { title: 'NIS2 essentials: risk management and incident reporting in practice', category: 'Compliance' },
  { title: 'Automating secure baselines with Ansible', category: 'Automation' },
  { title: 'Backup testing: the most important drill you\'re not doing', category: 'SysAdmin' },
]

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900">Blog</h1>
            <p className="mt-4 text-slate-700 max-w-3xl">Practical guides and insights across System Administration, Security, Compliance, and Automation.</p>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <article key={p.title} className="rounded-lg border border-slate-200 bg-white p-6">
                  <p className="text-xs uppercase tracking-wide text-blue-600">{p.category}</p>
                  <h2 className="mt-2 text-lg font-semibold text-slate-900">{p.title}</h2>
                  <p className="mt-2 text-sm text-slate-700">Intro paragraph placeholder. Clear, approachable language with technical credibility.</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
