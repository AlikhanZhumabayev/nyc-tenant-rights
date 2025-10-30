import EmergencyBanner from "./EmergencyBanner"
import SituationTriage from "./SituationTriage"
import ImpactStats from "./ImpactStats"
import QuickFacts from "./QuickFacts"
import { translate, type Language } from "../lib/translations"

interface HeroProps {
  onSelectSituation: (tab: string) => void
  language: Language
}

export default function Hero({ onSelectSituation, language }: HeroProps) {
  const t = (key: keyof typeof import("../lib/translations").translations.en) => translate(language, key)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Free Legal Help Available
        </div>

        <h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent max-w-4xl mx-auto">
          {t("heroTitle")}
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">{t("heroSubtitle")}</p>
      </div>

      {/* Emergency Banner */}
      <EmergencyBanner language={language} />

      {/* Situation Triage */}
      <SituationTriage onSelectSituation={onSelectSituation} language={language} />

      {/* Impact Stats */}
      <ImpactStats language={language} />

      {/* Quick Facts */}
      <QuickFacts language={language} />
    </div>
  )
}
