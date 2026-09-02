import { profile } from '../data/profile'

export default function About() {
  return (
    <section aria-label="About" className="animate-fade-up delay-100 flex flex-col gap-3.5">
      {profile.bio.map((para, i) => (
        <p key={i} className="text-[0.95rem] text-neutral-400 leading-relaxed">
          {para}
        </p>
      ))}
    </section>
  )
}
