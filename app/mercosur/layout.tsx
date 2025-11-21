import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Mercosur Research - Guilherme Paiva Pinto",
  description: "Interactive explainer on customs union stability and external negotiations in Mercosur",
}

export default function MercosurLayout({ children }: { children: ReactNode }) {
  return children
}
