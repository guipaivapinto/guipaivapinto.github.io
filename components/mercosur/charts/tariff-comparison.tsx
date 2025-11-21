"use client"

export default function TariffComparison() {
  const data = [
    { region: "Mercosur", avg2004: 10.2, avg2017: 10.4 },
    { region: "United States", avg2004: 5.8, avg2017: 3.2 },
    { region: "European Union", avg2004: 6.1, avg2017: 4.5 },
    { region: "China", avg2004: 8.3, avg2017: 8.1 },
  ]

  return (
    <div className="space-y-4">
      <div className="flex gap-6 mb-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-blue-500" />
          <span className="text-slate-300">2004</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-cyan-500" />
          <span className="text-slate-300">2017</span>
        </div>
      </div>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.region}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-white text-sm">{item.region}</span>
              <div className="flex gap-4 text-xs">
                <span className="text-blue-300">{item.avg2004.toFixed(1)}%</span>
                <span className="text-cyan-300">{item.avg2017.toFixed(1)}%</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-6 rounded bg-slate-700/30 overflow-hidden">
                <div className="h-full bg-blue-500 transition-all" style={{ width: `${(item.avg2004 / 12) * 100}%` }} />
              </div>
              <div className="flex-1 h-6 rounded bg-slate-700/30 overflow-hidden">
                <div className="h-full bg-cyan-500 transition-all" style={{ width: `${(item.avg2017 / 12) * 100}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
