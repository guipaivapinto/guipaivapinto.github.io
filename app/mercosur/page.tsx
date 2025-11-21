"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft, FileText, Download } from "lucide-react"
import MotivationSection from "@/components/sections/motivation"
import TradePolicy from "@/components/sections/trade-policy"
import TradePatterns from "@/components/sections/trade-patterns"
import UruguayGains from "@/components/sections/uruguay-gains"
import BlockingDynamics from "@/components/sections/blocking-dynamics"

const sections = [
  { id: 0, title: "Motivation", component: MotivationSection },
  { id: 1, title: "Mercosur Trade Policy", component: TradePolicy },
  { id: 2, title: "Partners & Trade Patterns", component: TradePatterns },
  { id: 3, title: "Why Uruguay Gains", component: UruguayGains },
  { id: 4, title: "Why Large Countries Block", component: BlockingDynamics },
]

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const CurrentComponent = sections[currentSection].component

  const goNext = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length)
  }

  const goPrev = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white shadow-lg">
        <div className="mx-auto max-w-6xl px-6 py-6 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-bold">Mercosur Customs Union</h1>
              <p className="text-sm text-red-100">External Negotiations & Stability</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#jmp"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-red-900 transition-all hover:bg-red-50"
              >
                <FileText className="h-4 w-4" />
                <span>View JMP</span>
              </a>
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-lg border border-white bg-red-900/20 px-4 py-2 font-medium text-white transition-all hover:bg-red-900/40"
              >
                <Download className="h-4 w-4" />
                <span>PDF</span>
              </a>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mt-4 flex items-center gap-2 text-sm text-red-100">
            <span>Section {currentSection + 1}</span>
            <span className="text-red-300">/</span>
            <span>{sections.length}</span>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        />
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="min-h-screen">
          <CurrentComponent />
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <button
              onClick={goPrev}
              className="group inline-flex items-center gap-2 rounded-lg px-6 py-2.5 font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Previous
            </button>

            <div className="flex gap-2">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSection
                      ? "w-8 bg-gradient-to-r from-blue-600 to-blue-500"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  title={section.title}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="group inline-flex items-center gap-2 rounded-lg px-6 py-2.5 font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900"
            >
              Next
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Section Title */}
          <div className="mt-8 text-center">
            <p className="text-sm uppercase tracking-wider text-gray-500">Section {currentSection + 1}</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">{sections[currentSection].title}</h2>
          </div>
        </div>
      </footer>
    </div>
  )
}
