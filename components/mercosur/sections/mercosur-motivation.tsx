import { ExternalLink, FileText } from "lucide-react"

export function MercosurMotivation() {
  const links = [
    {
      title: "Full Paper: External Negotiations and Customs Union Stability",
      url: "https://guipaivapinto.github.io/",
      isPaper: true,
    },
    {
      title: "Uruguay–Mercosur tensions (Reuters, 2021)",
      url: "https://www.reuters.com/business/energy/story/uruguay-eyes-independent-china-trade-deal-despite-mercosur-commitment-2021-10-25/",
    },
    {
      title: "China–Mercosur trade surge (IMF Directions of Trade)",
      url: "https://data.imf.org/?sk=9d6028d4-f14a-464c-a2f2-59b2cd424b85",
    },
    {
      title: "What is a customs union? (World Bank explainer)",
      url: "https://www.worldbank.org/en/topic/trade/brief/regional-trade-agreements",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4 rounded-lg bg-white p-8 border border-slate-200">
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
          A Puzzle: <span className="text-red-900">Why Does Mercosur Stay Together?</span>
        </h1>
        <p className="text-lg leading-relaxed text-slate-700">
          Since 1995, Mercosur—the largest customs union in South America—has maintained a common external tariff and a
          shared internal market among Brazil, Argentina, Uruguay, and Paraguay.
        </p>
      </div>

      <div className="rounded-lg border-2 border-blue-900 bg-white p-6 sm:p-8 shadow-md">
        <div className="flex items-start gap-4">
          <FileText className="h-6 w-6 flex-shrink-0 text-blue-900" />
          <div>
            <h3 className="text-lg font-bold text-blue-900">Job Market Paper</h3>
            <p className="mt-1 text-slate-700">
              This interactive explainer summarizes research by <strong>Guilherme Paiva Pinto</strong>, Economics PhD
              candidate at Indiana University, on customs union stability under external trade pressures.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://guipaivapinto.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-red-900 px-4 py-2 font-medium text-white transition-all hover:bg-red-800"
              >
                <FileText className="h-4 w-4" />
                Full JMP & Research
              </a>
              <a
                href="mailto:gppinto@iu.edu"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-4 py-2 font-medium text-white transition-all hover:bg-blue-800"
              >
                Contact Author
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg bg-white p-6 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">The Problem</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-300 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">What we see:</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-900">→</span>
                <span>Uruguay repeatedly threatens separate deals with China and the USA</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-900">→</span>
                <span>External negotiations stall for years</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-900">→</span>
                <span>Yet the bloc never actually breaks apart</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-300 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-teal-800">Why it matters:</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-teal-800">→</span>
                <span>Regional trade agreements shape global supply chains</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-teal-800">→</span>
                <span>Mercosur's decisions affect 280 million people</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-teal-800">→</span>
                <span>Understanding stability helps predict Brexit-like events</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-lg border border-slate-300 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Our Research Question</h2>
        <p className="text-lg text-slate-700">
          <strong className="text-slate-900">
            Why do small members like Uruguay want to stay, while large members like Brazil block external deals—even
            when aggregate gains exist?
          </strong>
        </p>
        <p className="text-slate-700">
          We build a quantitative trade model, calibrate it with 13 years of bilateral trade data, and run
          counterfactual scenarios simulating how Mercosur members would fare under different negotiation scenarios.
        </p>
      </div>

      <div className="rounded-lg border-l-4 border-red-900 bg-white p-6 shadow-sm">
        <p className="text-base leading-relaxed text-slate-700">
          <strong className="text-red-900">Key Insight:</strong> Collective bargaining amplifies market access for small
          members, but concentrates losses in politically sensitive manufacturing sectors for large members. This
          explains why the bloc persists yet stumbles in external talks.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Learn More & Access Full Paper</h3>
        <div className="space-y-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3 transition-all hover:border-blue-900 hover:bg-blue-50 shadow-sm"
            >
              <span className="text-slate-700 group-hover:text-blue-900 font-medium">
                {link.isPaper && <span className="mr-2">📄</span>}
                {link.title}
              </span>
              <ExternalLink className="h-4 w-4 text-slate-400 transition-colors group-hover:text-blue-900" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MercosurMotivation
