import { Lock, Zap, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function LandlordCannotDo() {
  const prohibitedActions = [
    {
      icon: Lock,
      title: "Cannot Change Your Locks",
      description: "Landlords must provide proper notice and cannot lock you out of your home.",
    },
    {
      icon: Zap,
      title: "Cannot Cut Utilities",
      description: "It's illegal to shut off electricity, water, gas, or heat to force you out.",
    },
    {
      icon: AlertTriangle,
      title: "Cannot Evict Without Court Order",
      description: "All evictions must go through housing court. Self-help evictions are illegal.",
    },
  ]

  return (
    <Card id="landlord-cannot-do" className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-red-900">
          <AlertTriangle className="h-6 w-6" />
          What Your Landlord CANNOT Do
        </CardTitle>
        <CardDescription className="text-red-800">
          These actions are illegal and you have the right to take legal action if they occur.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          {prohibitedActions.map((action, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-red-100">
              <action.icon className="h-8 w-8 text-red-600 mb-3" />
              <h3 className="text-gray-900 mb-2">{action.title}</h3>
              <p className="text-gray-600 text-sm">{action.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
