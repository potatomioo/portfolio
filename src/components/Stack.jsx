import { stack } from '../data/profile'

export default function Stack() {
  return (
    <section aria-label="Tech stack" className="animate-fade-up delay-200">
      <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-neutral-600 mb-4">
        What I work with
      </h2>
      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-[0.78rem] text-neutral-500 bg-neutral-900 border border-neutral-800 rounded-md transition-colors duration-200 hover:text-neutral-300 hover:border-neutral-700"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
