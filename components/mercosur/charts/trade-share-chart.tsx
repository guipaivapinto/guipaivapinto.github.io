"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function TradeShareChart({ country }: { country: "BRA" | "ARG" | "URY" | "PRY" }) {
  // Simplified data based on Figure 3 from paper
  const data = {
    BRA: [
      { year: 2004, China: 5, USA: 20, EU: 15 },
      { year: 2007, China: 8, USA: 18, EU: 14 },
      { year: 2011, China: 15, USA: 15, EU: 12 },
      { year: 2014, China: 18, USA: 12, EU: 11 },
      { year: 2017, China: 25, USA: 10, EU: 9 },
    ],
    ARG: [
      { year: 2004, China: 4, USA: 15, EU: 16 },
      { year: 2007, China: 6, USA: 14, EU: 15 },
      { year: 2011, China: 12, USA: 12, EU: 13 },
      { year: 2014, China: 16, USA: 10, EU: 12 },
      { year: 2017, China: 22, USA: 8, EU: 11 },
    ],
    URY: [
      { year: 2004, China: 3, USA: 18, EU: 20 },
      { year: 2007, China: 5, USA: 17, EU: 22 },
      { year: 2011, China: 10, USA: 14, EU: 21 },
      { year: 2014, China: 14, USA: 11, EU: 20 },
      { year: 2017, China: 18, USA: 9, EU: 19 },
    ],
    PRY: [
      { year: 2004, China: 2, USA: 12, EU: 10 },
      { year: 2007, China: 3, USA: 11, EU: 9 },
      { year: 2011, China: 6, USA: 10, EU: 8 },
      { year: 2014, China: 9, USA: 8, EU: 7 },
      { year: 2017, China: 14, USA: 6, EU: 6 },
    ],
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data[country]}>
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis dataKey="year" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1e293b",
            border: "1px solid #475569",
            borderRadius: "8px",
            color: "#e2e8f0",
          }}
        />
        <Line type="monotone" dataKey="China" stroke="#06b6d4" strokeWidth={2} />
        <Line type="monotone" dataKey="USA" stroke="#f59e0b" strokeWidth={2} />
        <Line type="monotone" dataKey="EU" stroke="#8b5cf6" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
