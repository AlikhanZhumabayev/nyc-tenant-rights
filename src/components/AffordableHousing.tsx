import { Home, ExternalLink, DollarSign, Calendar, Users, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface AffordableHousingProps {
  language?: string;
}

export default function AffordableHousing({ language }: AffordableHousingProps) {
  const housingResources = [
    {
      name: "NYC Housing Connect",
      description: "The official source for affordable housing lotteries in NYC. Browse and apply for income-restricted apartments.",
      url: "https://housingconnect.nyc.gov/",
      icon: Home,
      features: ["Income-Based", "Lottery System", "All Boroughs"],
      color: "blue"
    },
    {
      name: "NYC HDC Affordable Housing",
      description: "NYC Housing Development Corporation's directory of affordable housing opportunities and financing programs.",
      url: "https://www.nychdc.com/",
      icon: DollarSign,
      features: ["First-Time Buyers", "Rental Programs", "Down Payment Assistance"],
      color: "green"
    },
    {
      name: "NYCHA Public Housing",
      description: "New York City Housing Authority provides public housing for low-income residents. Long waitlists but worth applying.",
      url: "https://www.nyc.gov/site/nycha/index.page",
      icon: Users,
      features: ["Public Housing", "Section 8", "Senior Housing"],
      color: "purple"
    }
  ];

  const eligibilityInfo = [
    {
      category: "Income Requirements",
      description: "Most affordable housing is available for households earning 30-130% of Area Median Income (AMI).",
      details: [
        "30% AMI: $28,800 for 1 person",
        "50% AMI: $48,000 for 1 person",
        "80% AMI: $76,800 for 1 person",
        "Income limits increase with household size"
      ]
    },
    {
      category: "Documentation Needed",
      description: "Be prepared with these documents when applying:",
      details: [
        "Government-issued photo ID",
        "Proof of income (pay stubs, tax returns)",
        "Social Security cards for all household members",
        "Proof of current address (lease, utility bill)"
      ]
    },
    {
      category: "Application Tips",
      description: "Increase your chances of success:",
      details: [
        "Apply to multiple lotteries",
        "Submit applications early",
        "Ensure all information is accurate",
        "Check your email regularly for updates",
        "Respond quickly to any requests"
      ]
    }
  ];

  return (
    <Card className="border-2 border-green-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Home className="h-6 w-6 text-green-600" />
          Affordable Housing Resources
        </CardTitle>
        <CardDescription>
          Explore income-based housing options and apply for affordable apartments in NYC.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Resources */}
        <div className="space-y-4">
          {housingResources.map((resource, index) => (
            <div
              key={index}
              className={`bg-${resource.color}-50 p-4 rounded-lg border-2 border-${resource.color}-200`}
            >
              <div className="flex items-start gap-4">
                <div className={`bg-${resource.color}-100 p-3 rounded-lg`}>
                  <resource.icon className={`h-6 w-6 text-${resource.color}-600`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-2">{resource.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {resource.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild size="sm" className="w-full sm:w-auto">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 py-4 border-t">
          <div className="text-center">
            <div className="text-gray-600 text-sm mb-1">Active Lotteries</div>
            <div className="text-gray-900">200+</div>
          </div>
          <div className="text-center">
            <div className="text-gray-600 text-sm mb-1">Units Available</div>
            <div className="text-gray-900">5,000+</div>
          </div>
        </div>

        {/* Eligibility Information */}
        <div className="pt-4 border-t">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="eligibility-guide" className="border-none">
              <AccordionTrigger className="text-left hover:no-underline py-3 px-0">
                <h3 className="text-gray-900">Eligibility & Application Guide</h3>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2">
                {eligibilityInfo.map((info, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-gray-900 mb-2">{info.category}</h4>
                    <p className="text-gray-600 text-sm mb-3">{info.description}</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {info.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Additional Resources */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-gray-900 mb-3">Other Housing Assistance</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <Calendar className="h-4 w-4 text-blue-600 mt-0.5" />
              <div>
                <strong>Emergency Rental Assistance:</strong> If you're behind on rent, call 311 or visit{' '}
                <a href="https://access.nyc.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  ACCESS NYC
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-blue-600 mt-0.5" />
              <div>
                <strong>HomeBase Prevention:</strong> Free services to help you stay in your home. Find locations at{' '}
                <a href="https://www.nyc.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  NYC.gov
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
