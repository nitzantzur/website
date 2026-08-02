interface Props {
  label: string
  active?: boolean
  onClick?: () => void
  size?: 'sm' | 'md'
}

export default function Tag({ label, active = false, onClick, size = 'md' }: Props) {
  const base =
    size === 'sm'
      ? 'text-xs px-2 py-0.5 rounded'
      : 'text-xs px-2.5 py-1 rounded-full'

  const style = active
    ? 'bg-brand-600 text-white'
    : onClick
    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors'
    : 'bg-slate-100 text-slate-500'

  return (
    <span
      className={`inline-block font-medium ${base} ${style}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {label}
    </span>
  )
}
