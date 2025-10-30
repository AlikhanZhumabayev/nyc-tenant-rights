"use client"

import { useState } from "react"
import { AlertTriangle, MapPin, Calendar, FileText, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Alert, AlertDescription } from "./ui/alert"

interface EvictionRiskCheckerProps {
  language?: string;
}

export default function EvictionRiskChecker({ language }: EvictionRiskCheckerProps) {
  const [borough, setBorough] = useState("")
  const [noticeDate, setNoticeDate] = useState("")
  const [showResults, setShowResults] = useState(false)

  const boroughs = ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"]

  const handleCheck = () => {
    if (borough && noticeDate) {
      setShowResults(true)
    }
  }

  const calculateDaysRemaining = () => {
    if (!noticeDate) return 0
    const notice = new Date(noticeDate)
    const today = new Date()
    const deadline = new Date(notice)
    deadline.setDate(deadline.getDate() + 14) // Assuming 14-day notice period
    const diff = deadline.getTime() - today.getTime()
    return Math.ceil(diff / (1000 * 3600 * 24))
  }

  const daysRemaining = calculateDaysRemaining()

  return (
    <Card className="border-2 border-orange-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-orange-600" />
          Eviction Risk Checker
        </CardTitle>
        <CardDescription>Received an eviction notice? Understand your rights and timeline.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="borough" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Your Borough
            </Label>
            <Select value={borough} onValueChange={setBorough}>
              <SelectTrigger id="borough">
                <SelectValue placeholder="Select your borough" />
              </SelectTrigger>
              <SelectContent>
                {boroughs.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="noticeDate" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Notice Date (if applicable)
            </Label>
            <Input id="noticeDate" type="date" value={noticeDate} onChange={(e) => setNoticeDate(e.target.value)} />
          </div>

          <Button
            onClick={handleCheck}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
            disabled={!borough}
          >
            <FileText className="h-4 w-4 mr-2" />
            Check My Rights
          </Button>
        </div>

        {showResults && (
          <div className="space-y-4 pt-4 border-t">
            {daysRemaining > 0 && (
              <Alert className="bg-orange-50 border-orange-200">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <AlertDescription className="text-orange-900">
                  <span className="block">
                    You have approximately <strong>{daysRemaining} days</strong> to respond.
                  </span>
                  <span className="text-sm">Do NOT ignore this notice. Take action immediately.</span>
                </AlertDescription>
              </Alert>
            )}

            <div className="bg-blue-50 p-4 rounded-lg space-y-3">
              <h3 className="text-gray-900">Your Next Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>Read the notice carefully - identify the reason for eviction</li>
                <li>Contact a free legal aid organization in {borough} immediately</li>
                <li>Gather documents: lease, rent receipts, correspondence with landlord</li>
                <li>Do NOT move out - your landlord must go through court</li>
                <li>Attend all court hearings - you have the right to defend yourself</li>
              </ol>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg space-y-2">
              <h3 className="text-gray-900">Important Eviction Facts:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Your landlord CANNOT evict you without a court order</li>
                <li>Even with a court order, only a city marshal can remove you</li>
                <li>You must receive 72-hour notice before physical eviction</li>
                <li>You may qualify for emergency rent assistance</li>
                <li>Right to legal representation is guaranteed in NYC Housing Court</li>
              </ul>
            </div>

            <Alert className="bg-green-50 border-green-200">
              <Phone className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-900">
                <strong>Get Legal Help Now:</strong>
                <div className="mt-2 space-y-1 text-sm">
                  <div>📞 Legal Aid Society: (212) 577-3300</div>
                  <div>📞 Housing Court Answers: (212) 962-4795</div>
                  <div>📞 Call 311 for emergency assistance</div>
                </div>
              </AlertDescription>
            </Alert>

            <p className="text-xs text-gray-500 text-center">
              This is general information. Contact a lawyer for advice specific to your situation.
            </p>

            <Button
              onClick={() => {
                const statsTab = document.querySelector('[aria-label="Eviction Data"]') as HTMLElement
                statsTab?.click()
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              View NYC Eviction Data & Trends
            </Button>
          </div>
        )}

        {!showResults && (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-sm">
              Enter your information above to get personalized guidance about eviction protections and timelines.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
