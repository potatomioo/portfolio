import { profile } from '../data/profile'

export default function Hero() {
  return (
    <header className="animate-fade-up flex items-center gap-5">
      {/* Avatar */}
      <div
        className="w-14 h-14 shrink-0 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs font-semibold tracking-widest text-neutral-500 select-none"
        aria-hidden="true"
      >
        {profile.initials}
      </div>

      {/* Name + role */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-100 leading-tight">
          {profile.name}
        </h1>
        <p className="text-sm text-neutral-500 mt-0.5">{profile.role}</p>
      </div>
    </header>
  )
}
