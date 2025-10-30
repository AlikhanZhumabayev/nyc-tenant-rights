"use client"

import { AlertCircle, FileQuestion, Home, TrendingUp, Shield } from "lucide-react"
import { translate, type Language } from "../lib/translations"

interface SituationTriageProps {
  onSelectSituation: (tab: string) => void
  language: Language
}

export default function SituationTriage({ onSelectSituation, language }: SituationTriageProps) {
  const t = (key: keyof typeof import("../lib/translations").translations.en) => translate(language, key)

  const situations = [
    {
      icon: AlertCircle,
      title: t("facingEviction"),
      description: "Get help with eviction notices and next steps",
      color: "red",
      action: () => onSelectSituation("home"),
      urgency: "urgent",
      scrollTo: "eviction-risk-checker",
      showUrgencyBadge: false,
    },
    {
      icon: FileQuestion,
      title: t("haveQuestions"),
      description: "Personalized NYC tenants rights assistant",
      color: "blue",
      action: () => onSelectSituation("questions"),
      urgency: "normal",
      gridSpan: "row-span-2",
    },
    {
      icon: Home,
      title: t("lookingForHousing"),
      description: t("lookingForHousingDesc"),
      color: "green",
      action: () => onSelectSituation("home"),
      urgency: "normal",
      scrollTo: "affordable-housing",
    },
    {
      icon: TrendingUp,
      title: t("rentIssues"),
      description: t("rentIssuesDesc"),
      color: "purple",
      action: () => onSelectSituation("rights"),
      urgency: "normal",
    },
    {
      icon: Shield,
      title: t("landlordProblems"),
      description: t("landlordProblemsDesc"),
      color: "orange",
      action: () => onSelectSituation("rights"),
      urgency: "urgent",
      showUrgencyBadge: false,
    },
  ]

  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <p className="text-gray-600 text-lg">{t("chooseSituation")}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
        {situations.map((situation, index) => {
          const Icon = situation.icon
          const colorClasses = {
            red: "bg-gradient-to-br from-red-50 to-red-100/50 border-red-200 hover:border-red-300 hover:shadow-red-200/50",
            blue: "bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 hover:border-blue-300 hover:shadow-blue-200/50",
            green:
              "bg-gradient-to-br from-green-50 to-green-100/50 border-green-200 hover:border-green-300 hover:shadow-green-200/50",
            purple:
              "bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 hover:border-purple-300 hover:shadow-purple-200/50",
            orange:
              "bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200 hover:border-orange-300 hover:shadow-orange-200/50",
            indigo:
              "bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-indigo-200 hover:border-indigo-300 hover:shadow-indigo-200/50",
          }

          const iconColorClasses = {
            red: "bg-red-600 text-white",
            blue: "bg-blue-600 text-white",
            green: "bg-green-600 text-white",
            purple: "bg-purple-600 text-white",
            orange: "bg-orange-600 text-white",
            indigo: "bg-indigo-600 text-white",
          }

          return (
            <button
              key={index}
              onClick={() => {
                if (situation.scrollTo) {
                  const element = document.getElementById(situation.scrollTo)
                  element?.scrollIntoView({ behavior: "smooth" })
                } else {
                  situation.action()
                }
              }}
              className={`group text-left p-6 rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-1 ${
                colorClasses[situation.color as keyof typeof colorClasses]
              } ${situation.gridSpan || ""}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl shadow-md group-hover:shadow-lg transition-all ${
                    iconColorClasses[situation.color as keyof typeof iconColorClasses]
                  } ${situation.urgency === "urgent" && situation.showUrgencyBadge !== false ? "animate-pulse" : ""}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-900 mb-2">{situation.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{situation.description}</p>
                  {situation.urgency === "urgent" && situation.showUrgencyBadge !== false && (
                    <span className="inline-flex items-center mt-3 text-xs px-3 py-1.5 bg-red-600 text-white rounded-full shadow-sm">
                      {t("getHelpNow")}
                    </span>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
