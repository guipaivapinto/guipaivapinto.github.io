"use client"

export default function TariffChart({ year }: { year: 2004 | 2017 }) {
  const data = {
    2004: {
      mercosur: 10.2,
      usa: 5.8,
      eu: 6.1,
      china: 8.3,
    },
    2017: {
      mercosur: 10.4,
      usa: 3.2,
      eu: 4.5,
      china: 8.1,
    },
  }

  const yearData = data[year]
  const maxValue = 12

  return (
    <div className="space-y-6">
      {Object.entries(yearData).map(([region, value]) => (
        <div key={region}>
          <div className="mb-2 flex items-center justify-between">
            <span className="font-medium text-white capitalize">{region}</span>
            <span className="text-sm font-semibold text-cyan-300">{value.toFixed(1)}%</span>
          </div>
          <div className="h-8 overflow-hidden rounded-lg bg-slate-700/30">
            <div
              className={`h-full transition-all duration-500 ${
                region === "mercosur"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                  : "bg-gradient-to-r from-slate-600 to-slate-500"
              }`}
              style={{ width: `${(value / maxValue) * 100}%` }}
            />
          </div>
        </div>
      ))}
      <p className="text-xs text-slate-500 mt-4">Source: GTAP 11 Database</p>
    </div>
  )
}
