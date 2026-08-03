export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-24">
      <div className="max-w-content mx-auto px-6 py-8 space-y-3">
        <p className="text-xs text-slate-400 italic">
          Disclaimer: The views expressed on this site do not necessarily reflect those of the Federal Reserve Bank of Dallas or the Federal Reserve System.
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Nitzan Tzur-Ilan
          </p>
          <p className="text-xs text-slate-400">
            Federal Reserve Bank of Dallas
          </p>
        </div>
      </div>
    </footer>
  )
}
