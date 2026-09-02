import { socials } from '../data/profile'
import SocialCard from './SocialCard'

export default function Socials() {
  return (
    <section aria-label="Social links" className="animate-fade-up delay-300">
      <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-neutral-600 mb-4">
        Find me online
      </h2>
      <div className="flex flex-col gap-2">
        {socials.map((social) => (
          <SocialCard key={social.id} social={social} />
        ))}
      </div>
    </section>
  )
}
