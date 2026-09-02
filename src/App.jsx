import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Socials from './components/Socials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100">
      {/* Subtle noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
        aria-hidden="true"
      />

      {/* Page content */}
      <main className="relative z-10 mx-auto max-w-xl px-6 py-20 flex flex-col gap-14">
        <Hero />
        <About />
        <Stack />
        <Socials />
        <Footer />
      </main>
    </div>
  )
}
