"use client"

import { Globe } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface LanguageSelectorProps {
  language: string
  onLanguageChange: (lang: string) => void
}

export default function LanguageSelector({ language, onLanguageChange }: LanguageSelectorProps) {
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    // Additional languages coming soon:
    // { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    // { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    // { code: 'ko', name: '한국어', flag: '🇰🇷' },
    // { code: 'ht', name: 'Kreyòl', flag: '🇭🇹' },
    // { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ]

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-600" aria-hidden="true" />
      <Select value={language} onValueChange={onLanguageChange}>
        <SelectTrigger className="w-[160px]" aria-label="Select language">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <span className="flex items-center gap-2">
                <span aria-hidden="true">{lang.flag}</span>
                <span>{lang.name}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
