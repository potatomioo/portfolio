import GitHubIcon from './icons/GitHubIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import XIcon from './icons/XIcon'
import BlueSkyIcon from './icons/BlueSkyIcon'
import ArrowUpRightIcon from './icons/ArrowUpRightIcon'

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  bluesky: BlueSkyIcon,
}

export default function SocialCard({ social }) {
  const Icon = iconMap[social.id]

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${social.name} — ${social.handle}`}
      className="group flex items-center gap-3.5 px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-200 hover:bg-neutral-800/60 hover:border-neutral-700 hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600"
    >
      {/* Platform icon */}
      <span className="flex items-center justify-center w-9 h-9 shrink-0 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-500 transition-colors duration-200 group-hover:text-neutral-300">
        {Icon && <Icon />}
      </span>

      {/* Text */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <span className="text-sm font-medium text-neutral-300">{social.name}</span>
        <span className="text-xs text-neutral-600 truncate">{social.handle}</span>
      </div>

      {/* Arrow */}
      <ArrowUpRightIcon className="w-3.5 h-3.5 text-neutral-700 transition-all duration-200 group-hover:text-neutral-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0" />
    </a>
  )
}
