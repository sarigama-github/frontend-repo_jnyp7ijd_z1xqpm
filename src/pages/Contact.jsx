import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900">Get in Touch</h1>
            <p className="mt-4 text-slate-700 max-w-2xl">Tell me about your infrastructure or security goals. I’ll respond with next steps and a suggested time for a quick call.</p>
            <form className="mt-8 grid gap-4 max-w-xl">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Company name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">How can I help?</label>
                <textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" rows="5" placeholder="Briefly describe your project or challenges"></textarea>
              </div>
              <button type="submit" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">Send</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
