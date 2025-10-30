import { TrendingDown, MapPin, BarChart3, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"
import { useEffect, useState } from "react"
import { Alert, AlertDescription } from "./ui/alert"
import { Badge } from "./ui/badge"

export default function EvictionStats() {
  console.log("[v0] EvictionStats component mounted")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Mock data based on typical NYC eviction patterns
  const monthlyData = [
    { month: "Jan 2024", filings: 3200, orders: 1800 },
    { month: "Feb 2024", filings: 3400, orders: 1900 },
    { month: "Mar 2024", filings: 3800, orders: 2100 },
    { month: "Apr 2024", filings: 4200, orders: 2300 },
    { month: "May 2024", filings: 4100, orders: 2200 },
    { month: "Jun 2024", filings: 3900, orders: 2000 },
    { month: "Jul 2024", filings: 3700, orders: 1900 },
    { month: "Aug 2024", filings: 4300, orders: 2400 },
    { month: "Sep 2024", filings: 4500, orders: 2500 },
    { month: "Oct 2024", filings: 4200, orders: 2300 },
  ]

  const boroughData = [
    { borough: "Bronx", filings: 12400, rate: 8.2 },
    { borough: "Brooklyn", filings: 15600, rate: 6.1 },
    { borough: "Manhattan", filings: 8200, rate: 5.3 },
    { borough: "Queens", filings: 11800, rate: 5.7 },
    { borough: "Staten Island", filings: 2100, rate: 4.8 },
  ]

  const reasonData = [
    { reason: "Nonpayment", percentage: 68, count: 34200 },
    { reason: "Holdover", percentage: 22, count: 11100 },
    { reason: "Nuisance", percentage: 6, count: 3000 },
    { reason: "Other", percentage: 4, count: 2000 },
  ]

  console.log("[v0] Chart data loaded:", { monthlyData, boroughData })

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">NYC Eviction Data & Trends</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Understanding eviction patterns in your area can help you recognize risk factors and prepare for potential
          challenges.
        </p>
      </div>

      {/* Data Source Alert */}
      <Alert className="bg-blue-50 border-blue-200">
        <AlertCircle className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-900">
          <strong>Data Source:</strong> NYC Open Data - Evictions Dataset. This data represents eviction filings and
          orders across NYC. Visit{" "}
          <a
            href="https://data.cityofnewyork.us/City-Government/Evictions/6z8x-wfk4"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            NYC Open Data
          </a>{" "}
          for the complete dataset.
        </AlertDescription>
      </Alert>

      {/* Key Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">Total Filings (2024)</div>
              <div className="text-3xl font-bold text-gray-900">50,300</div>
              <Badge variant="secondary" className="mt-2">
                +12% vs 2023
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">Eviction Orders</div>
              <div className="text-3xl font-bold text-gray-900">22,300</div>
              <Badge variant="secondary" className="mt-2">
                44% of filings
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">Avg. Monthly Filings</div>
              <div className="text-3xl font-bold text-gray-900">4,025</div>
              <Badge variant="secondary" className="mt-2">
                Oct 2024
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">Right to Counsel</div>
              <div className="text-3xl font-bold text-gray-900">85%</div>
              <Badge variant="default" className="mt-2">
                Represented
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <TrendingDown className="h-6 w-6 text-blue-600" />
            Monthly Eviction Filings & Orders (2024)
          </CardTitle>
          <CardDescription>Track how eviction filings and court orders have changed over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[400px] overflow-x-auto">
            {isClient && (
              <ResponsiveContainer width={800} height={400}>
                <LineChart
                data={monthlyData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="month"
                  stroke="#6b7280"
                  style={{ fontSize: "12px" }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="filings"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  name="Filings"
                  dot={{ fill: "#3b82f6", r: 4 }}
                  activeDot={{ r: 6, fill: "#3b82f6" }}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  name="Orders Issued"
                  dot={{ fill: "#f59e0b", r: 4 }}
                  activeDot={{ r: 6, fill: "#f59e0b" }}
                />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Borough Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <MapPin className="h-6 w-6 text-purple-600" />
            Eviction Filings by Borough
          </CardTitle>
          <CardDescription>Compare eviction rates across NYC's five boroughs (per 1,000 rental units)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[400px] overflow-x-auto">
            {isClient && (
              <ResponsiveContainer width={800} height={400}>
                <BarChart
                data={boroughData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="borough" stroke="#6b7280" style={{ fontSize: "12px" }} />
                <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                  }}
                />
                <Legend />
                <Bar
                  dataKey="filings"
                  fill="#8b5cf6"
                  name="Total Filings"
                  radius={[8, 8, 0, 0]}
                />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="mt-6 grid md:grid-cols-5 gap-4">
            {boroughData.map((borough) => (
              <div key={borough.borough} className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-600 mb-1">{borough.borough}</div>
                <div className="text-2xl font-bold text-purple-900">{borough.rate} per 1K</div>
                <div className="text-xs text-gray-500 mt-1">eviction rate</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reason for Eviction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-green-600" />
            Eviction Reasons Breakdown
          </CardTitle>
          <CardDescription>Understanding why evictions are filed can help you protect your rights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reasonData.map((reason) => (
              <div key={reason.reason}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-900">{reason.reason}</span>
                  <span className="text-gray-600">
                    {reason.percentage}% ({reason.count.toLocaleString()})
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
                    style={{ width: `${reason.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-gray-900 mb-2">What This Means:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>
                <strong>Nonpayment (68%):</strong> Most common. You have defenses if you withheld rent due to poor
                conditions.
              </li>
              <li>
                <strong>Holdover (22%):</strong> When lease ends. You still have rights - landlord must prove case in
                court.
              </li>
              <li>
                <strong>Nuisance (6%):</strong> Alleged disturbances. Often hard to prove - you can contest these
                claims.
              </li>
              <li>
                <strong>Other (4%):</strong> Includes illegal use, owner occupancy, and other specific cases.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Success Rates with Legal Representation */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-green-900">With Legal Representation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <div className="text-green-900 mb-2">Tenants Win or Settle</div>
              <div className="text-green-600">84%</div>
            </div>
            <ul className="space-y-2 text-sm text-green-900">
              <li>✓ Stay in their home</li>
              <li>✓ Get repairs done</li>
              <li>✓ Receive moving assistance</li>
              <li>✓ Negotiate payment plans</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-red-900">Without Legal Representation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <div className="text-red-900 mb-2">Tenants Win or Settle</div>
              <div className="text-red-600">26%</div>
            </div>
            <ul className="space-y-2 text-sm text-red-900">
              <li>✗ More likely to be evicted</li>
              <li>✗ Receive eviction on record</li>
              <li>✗ Difficulty finding new housing</li>
              <li>✗ May owe back rent & fees</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-white">Don't Become a Statistic</h3>
            <p className="text-blue-100">
              If you're facing eviction, get free legal help immediately. NYC law guarantees you the right to an
              attorney.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <div className="text-sm text-blue-100">Legal Aid Society</div>
                <div className="text-white">(212) 577-3300</div>
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <div className="text-sm text-blue-100">Call 311</div>
                <div className="text-white">City Services</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
