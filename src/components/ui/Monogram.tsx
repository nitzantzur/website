interface Props {
  name: string
  size?: number
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter((part) => part.length > 0)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}

export default function Monogram({ name, size = 120 }: Props) {
  const initials = getInitials(name)
  return (
    <div
      className="rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size }}
      aria-label={name}
    >
      <span
        className="font-semibold text-slate-500 tracking-wide select-none"
        style={{ fontSize: size * 0.3 }}
      >
        {initials}
      </span>
    </div>
  )
}
