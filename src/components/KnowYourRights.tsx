import { Shield, Home, Wrench, Users, Lock, AlertTriangle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import LandlordCannotDo from "./LandlordCannotDo"

export default function KnowYourRights() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-gray-900">NYC Tenant Rights & Protections</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Understanding your legal protections is the first step to defending your housing rights. Here's what NYC law
          guarantees you as a tenant.
        </p>
      </div>

      <LandlordCannotDo />

      {/* Detailed Rights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            Your Legal Protections
          </CardTitle>
          <CardDescription>Detailed breakdown of NYC tenant rights and protections</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-blue-600" />
                  <span>Right to a Safe & Habitable Home</span>
                  <Badge>Essential</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p>Your landlord must maintain your apartment in livable condition. This includes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Working heat and hot water</li>
                    <li>No lead paint hazards (especially if children under 6 live there)</li>
                    <li>Proper locks on doors and windows</li>
                    <li>No pest infestations (rats, mice, bedbugs, roaches)</li>
                    <li>Working smoke and carbon monoxide detectors</li>
                    <li>No mold or water damage</li>
                    <li>Proper ventilation and lighting</li>
                  </ul>
                  <p className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <strong>What to do:</strong> If your landlord refuses to make repairs, you can file a complaint with
                    NYC's Department of Housing Preservation and Development (HPD) by calling 311 or visiting
                    311online.nyc.gov.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-purple-600" />
                  <span>Right to Repairs & Maintenance</span>
                  <Badge variant="secondary">Important</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p>Landlords must respond to repair requests within reasonable timeframes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Immediately:</strong> No heat in winter, no water, gas leaks, electrical hazards
                    </li>
                    <li>
                      <strong>24 hours:</strong> Broken locks, broken windows, serious leaks
                    </li>
                    <li>
                      <strong>30 days:</strong> Non-emergency repairs like minor leaks, paint, appliances
                    </li>
                  </ul>
                  <p className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <strong>Document everything:</strong> Keep written records of all repair requests (emails, texts,
                    letters). Take photos and videos of problems. This documentation is crucial if you need to go to
                    court.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Protection from Illegal Eviction</span>
                  <Badge>Critical</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p>Your landlord CANNOT evict you without going through housing court. The legal process requires:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>A termination notice (10-30 days depending on your situation)</li>
                    <li>A petition filed in housing court</li>
                    <li>A court hearing where you can defend yourself</li>
                    <li>A judgment from a judge</li>
                    <li>A warrant of eviction (you still have time to move or resolve the issue)</li>
                    <li>A city marshal to physically remove you (with 72-hour notice)</li>
                  </ul>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200 space-y-2">
                    <p>
                      <strong className="text-red-900">Illegal "Self-Help" Evictions Include:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Changing locks</li>
                      <li>Removing your belongings</li>
                      <li>Shutting off utilities</li>
                      <li>Physically threatening or harassing you</li>
                    </ul>
                    <p className="text-red-900">
                      If your landlord attempts any of these, call 911 and contact a lawyer immediately.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-orange-600" />
                  <span>Rent Stabilization Rights</span>
                  <Badge variant="outline">For Eligible Tenants</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p>
                    If you live in a rent-stabilized apartment (built before 1974 with 6+ units), you have extra
                    protections:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Your rent can only increase by amounts set by the Rent Guidelines Board (usually 1-3% annually)
                    </li>
                    <li>You have the right to renew your lease</li>
                    <li>Your landlord can only evict you for specific legal reasons</li>
                    <li>You're entitled to receive a proper lease and rent history</li>
                    <li>Illegal rent increases can be challenged and you may get a refund</li>
                  </ul>
                  <p className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <strong>Not sure if you're rent stabilized?</strong> You can request your rent history from the NYS
                    Division of Housing and Community Renewal (DHCR) or check with a housing lawyer.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span>Protection from Harassment</span>
                  <Badge>Legal Protection</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p>NYC law specifically prohibits landlord harassment. Illegal harassment includes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Repeatedly demanding you move out when you have a right to stay</li>
                    <li>Making false statements to get you to leave</li>
                    <li>Failing to provide essential services to force you out</li>
                    <li>Unreasonably refusing to renew your lease</li>
                    <li>Starting unnecessary construction or repairs to disturb you</li>
                    <li>Threatening to report immigration status</li>
                    <li>Entering your apartment without proper notice (except emergencies)</li>
                  </ul>
                  <p className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <strong>You can file harassment complaints with:</strong> HPD's Office of Tenant Advocate (call
                    311), and you may also have grounds to sue your landlord in housing court.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-indigo-600" />
                  <span>Tenant Data Privacy Rights</span>
                  <Badge variant="secondary">Digital Rights</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p>
                    NYC's Tenant Data Privacy Law protects you if your building uses smart access systems (key cards,
                    apps, facial recognition):
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Landlords must tell you what data is collected and how it's used</li>
                    <li>You must consent to biometric data collection (fingerprints, facial recognition)</li>
                    <li>Data can only be kept as long as necessary</li>
                    <li>You have the right to access your data and request corrections</li>
                    <li>Data cannot be sold to third parties without your consent</li>
                  </ul>
                  <p className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <strong>Learn more:</strong> Visit{" "}
                    <a
                      href="https://www.nyc.gov/site/hpd/services-and-information/tenant-data-privacy-law.page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline"
                    >
                      NYC HPD's Tenant Data Privacy page
                    </a>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* External Resources */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle>Official Resources</CardTitle>
          <CardDescription>Government websites with complete tenant protection information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://www.nyc.gov/site/hpd/services-and-information/tenant-bill-of-rights.page"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-lg border-2 border-transparent hover:border-blue-300 transition-all"
            >
              <h3 className="text-gray-900 mb-2">NYC Tenant Bill of Rights</h3>
              <p className="text-gray-600 text-sm">Official guide from NYC HPD covering all tenant protections</p>
            </a>
            <a
              href="https://www.lawhelpny.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-lg border-2 border-transparent hover:border-purple-300 transition-all"
            >
              <h3 className="text-gray-900 mb-2">LawHelpNY</h3>
              <p className="text-gray-600 text-sm">Legal resources and self-help guides for NY tenants</p>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
