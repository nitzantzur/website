export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-24">
      <div className="max-w-content mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Nitzan Tzur-Ilan
        </p>
        <p className="text-xs text-slate-400">
          Federal Reserve Bank of Dallas
        </p>
      </div>
    </footer>
  )
}
