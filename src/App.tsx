"use client"

import { useState, useEffect, Suspense } from "react"
import { Shield, Scale, Home, MessageSquare, FileText, TrendingDown, Menu, X, CheckCircle } from "lucide-react"
import { Button } from "./components/ui/button"
import Hero from "./components/Hero"
import KnowYourRights from "./components/KnowYourRights"
import EvictionRiskChecker from "./components/EvictionRiskChecker"
import LegalHelpFinder from "./components/LegalHelpFinder"
import EvictionStats from "./components/EvictionStats"
import AffordableHousing from "./components/AffordableHousing"
import AskQuestions from "./components/AskQuestions"
import LanguageSelector from "./components/LanguageSelector"
import AccessibilityMenu from "./components/AccessibilityMenu"
import LoadingState from "./components/LoadingState"
import ErrorBoundary from "./components/ErrorBoundary"
import { translate, type Language } from "./lib/translations"

export default function App() {
  const [activeTab, setActiveTab] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>("en")
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [showTrustBanner, setShowTrustBanner] = useState(true)

  // Load accessibility preferences
  useEffect(() => {
    const savedLang = localStorage.getItem("tenant-rights-language") as Language
    const savedFontSize = localStorage.getItem("tenant-rights-font-size")
    const savedHighContrast = localStorage.getItem("tenant-rights-high-contrast")
    const savedReduceMotion = localStorage.getItem("tenant-rights-reduce-motion")

    if (savedLang) setLanguage(savedLang)
    if (savedFontSize) setFontSize(Number(savedFontSize))
    if (savedHighContrast) setHighContrast(savedHighContrast === "true")
    if (savedReduceMotion) setReduceMotion(savedReduceMotion === "true")
  }, [])

  // Save accessibility preferences
  useEffect(() => {
    localStorage.setItem("tenant-rights-language", language)
    document.documentElement.lang = language === "en" ? "en" : language
  }, [language])

  useEffect(() => {
    localStorage.setItem("tenant-rights-font-size", String(fontSize))
    document.documentElement.style.fontSize = `${fontSize}%`
  }, [fontSize])

  useEffect(() => {
    localStorage.setItem("tenant-rights-high-contrast", String(highContrast))
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }, [highContrast])

  useEffect(() => {
    localStorage.setItem("tenant-rights-reduce-motion", String(reduceMotion))
    if (reduceMotion) {
      document.documentElement.classList.add("reduce-motion")
    } else {
      document.documentElement.classList.remove("reduce-motion")
    }
  }, [reduceMotion])

  const t = (key: keyof typeof import("./lib/translations").translations.en) => translate(language, key)

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Skip to content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          {t("skipToContent")}
        </a>

        {/* Trust & Verification Banner */}
        {showTrustBanner && (
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white" role="banner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>Verified information from official NYC.gov sources & NYC Open Data</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTrustBanner(false)}
                  className="text-white hover:bg-white/20 flex-shrink-0"
                  aria-label="Close banner"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <header
          className="bg-white/80 backdrop-blur-md border-b border-gray-200 md:relative sticky top-0 z-40"
          role="banner"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg" aria-hidden="true">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-gray-900">{t("siteName")}</h1>
                  <p className="text-sm text-gray-600">{t("tagline")}</p>
                </div>
              </div>

              {/* Desktop Navigation & Tools */}
              <div className="hidden md:flex items-center gap-3">
                <nav className="flex items-center gap-2" role="navigation" aria-label="Main navigation">
                  <Button
                    variant={activeTab === "home" ? "default" : "ghost"}
                    onClick={() => setActiveTab("home")}
                    className="gap-2"
                    aria-label={t("home")}
                    aria-current={activeTab === "home" ? "page" : undefined}
                  >
                    <Home className="h-4 w-4" aria-hidden="true" />
                    {t("home")}
                  </Button>
                  <Button
                    variant={activeTab === "questions" ? "default" : "ghost"}
                    onClick={() => setActiveTab("questions")}
                    className="gap-2"
                    aria-label="Ask Questions"
                    aria-current={activeTab === "questions" ? "page" : undefined}
                  >
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                    Ask Questions
                  </Button>
                  <Button
                    variant={activeTab === "rights" ? "default" : "ghost"}
                    onClick={() => setActiveTab("rights")}
                    className="gap-2"
                    aria-label={t("yourRights")}
                    aria-current={activeTab === "rights" ? "page" : undefined}
                  >
                    <Scale className="h-4 w-4" aria-hidden="true" />
                    {t("yourRights")}
                  </Button>
                  <Button
                    variant={activeTab === "help" ? "default" : "ghost"}
                    onClick={() => setActiveTab("help")}
                    className="gap-2"
                    aria-label={t("getHelp")}
                    aria-current={activeTab === "help" ? "page" : undefined}
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    {t("getHelp")}
                  </Button>
                  <Button
                    variant={activeTab === "stats" ? "default" : "ghost"}
                    onClick={() => setActiveTab("stats")}
                    className="gap-2"
                    aria-label={t("evictionData")}
                    aria-current={activeTab === "stats" ? "page" : undefined}
                  >
                    <TrendingDown className="h-4 w-4" aria-hidden="true" />
                    {t("evictionData")}
                  </Button>
                </nav>

                <div className="flex items-center gap-2 pl-3 border-l">
                  <LanguageSelector language={language} onLanguageChange={(lang) => setLanguage(lang as Language)} />
                  <AccessibilityMenu
                    onFontSizeChange={setFontSize}
                    onHighContrastChange={setHighContrast}
                    onReduceMotionChange={setReduceMotion}
                  />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="md:hidden pb-4 flex flex-col gap-2" role="navigation" aria-label="Mobile navigation">
                <Button
                  variant={activeTab === "home" ? "default" : "ghost"}
                  onClick={() => {
                    setActiveTab("home")
                    setMobileMenuOpen(false)
                  }}
                  className="justify-start gap-2"
                  aria-current={activeTab === "home" ? "page" : undefined}
                >
                  <Home className="h-4 w-4" aria-hidden="true" />
                  {t("home")}
                </Button>
                <Button
                  variant={activeTab === "questions" ? "default" : "ghost"}
                  onClick={() => {
                    setActiveTab("questions")
                    setMobileMenuOpen(false)
                  }}
                  className="justify-start gap-2"
                  aria-current={activeTab === "questions" ? "page" : undefined}
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Ask Questions
                </Button>
                <Button
                  variant={activeTab === "rights" ? "default" : "ghost"}
                  onClick={() => {
                    setActiveTab("rights")
                    setMobileMenuOpen(false)
                  }}
                  className="justify-start gap-2"
                  aria-current={activeTab === "rights" ? "page" : undefined}
                >
                  <Scale className="h-4 w-4" aria-hidden="true" />
                  {t("yourRights")}
                </Button>
                <Button
                  variant={activeTab === "help" ? "default" : "ghost"}
                  onClick={() => {
                    setActiveTab("help")
                    setMobileMenuOpen(false)
                  }}
                  className="justify-start gap-2"
                  aria-current={activeTab === "help" ? "page" : undefined}
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  {t("getHelp")}
                </Button>
                <Button
                  variant={activeTab === "stats" ? "default" : "ghost"}
                  onClick={() => {
                    setActiveTab("stats")
                    setMobileMenuOpen(false)
                  }}
                  className="justify-start gap-2"
                  aria-current={activeTab === "stats" ? "page" : undefined}
                >
                  <TrendingDown className="h-4 w-4" aria-hidden="true" />
                  {t("evictionData")}
                </Button>

                <div className="pt-4 mt-4 border-t space-y-2">
                  <div className="px-3 py-2">
                    <LanguageSelector language={language} onLanguageChange={(lang) => setLanguage(lang as Language)} />
                  </div>
                  <div className="px-3 py-2 flex justify-center">
                    <AccessibilityMenu
                      onFontSizeChange={setFontSize}
                      onHighContrastChange={setHighContrast}
                      onReduceMotionChange={setReduceMotion}
                    />
                  </div>
                </div>
              </nav>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" role="main">
          <Suspense fallback={<LoadingState message={t("loading")} />}>
            {activeTab === "home" && (
              <>
                <Hero onSelectSituation={setActiveTab} language={language} />
                <div className="mt-12 space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div id="eviction-risk-checker">
                      <EvictionRiskChecker language={language} />
                    </div>
                    <div id="affordable-housing">
                      <AffordableHousing language={language} />
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "rights" && <KnowYourRights />}

            {activeTab === "help" && <LegalHelpFinder />}

            {activeTab === "questions" && <AskQuestions />}

            {activeTab === "stats" && <EvictionStats />}
          </Suspense>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-20" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-6 w-6" aria-hidden="true" />
                  <span>{t("siteName")}</span>
                </div>
              </div>
              <div>
                <h3 className="mb-4">{t("quickLinks")}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a
                      href="https://www.nyc.gov/site/hpd/services-and-information/tenant-bill-of-rights.page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors focus:text-white focus:underline"
                    >
                      NYC Tenant Bill of Rights
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://data.cityofnewyork.us/City-Government/Evictions/6z8x-wfk4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors focus:text-white focus:underline"
                    >
                      NYC Evictions Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://legalaidnyc.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors focus:text-white focus:underline"
                    >
                      Legal Aid Society
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.lawhelpny.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors focus:text-white focus:underline"
                    >
                      LawHelpNY
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">{t("emergencyResources")}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    {t("housingCourt")}:{" "}
                    <a href="tel:+12126618000" className="hover:text-white">
                      (212) 661-8000
                    </a>
                  </li>
                  <li>
                    <a href="tel:311" className="hover:text-white">
                      311
                    </a>{" "}
                    - {t("cityServices")}
                  </li>
                  <li>
                    {t("legalAidHotline")}:{" "}
                    <a href="tel:+18886636880" className="hover:text-white">
                      (888) 663-6880
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  )
}
