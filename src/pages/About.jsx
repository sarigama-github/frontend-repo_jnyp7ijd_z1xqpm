import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900">About Stephan</h1>
            <p className="mt-4 text-slate-700 max-w-3xl">Passionate sysadmin and security enthusiast focused on resilient, secure systems. Practical, proactive, and results-driven.</p>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-slate-200 p-6 bg-white">
                <h2 className="text-xl font-semibold text-slate-900">Core values</h2>
                <ul className="mt-3 list-disc list-inside text-slate-700">
                  <li>Reliability</li>
                  <li>Transparency</li>
                  <li>Continuous improvement</li>
                </ul>
                <h2 className="mt-6 text-xl font-semibold text-slate-900">Tooling & stack</h2>
                <p className="mt-2 text-slate-700">Linux/Windows, VMware/Proxmox, Docker, Ansible, Terraform, Git, ELK/Prometheus/Grafana, major SIEMs, firewalls, cloud platforms.</p>
                <h2 className="mt-6 text-xl font-semibold text-slate-900">Certifications</h2>
                <ul className="mt-2 list-disc list-inside text-slate-700">
                  <li>Placeholder certification 1</li>
                  <li>Placeholder certification 2</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-6 bg-white">
                <div className="aspect-[4/3] w-full rounded-lg bg-slate-100" role="img" aria-label="Photo placeholder" />
                <p className="mt-4 text-slate-700">I help SMEs, startups, and IT managers build and maintain systems that are reliable, secure, and scalable.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
