import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Scale } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function LegalHelpFinder() {
  const [selectedBorough, setSelectedBorough] = useState('all');

  const legalAidOrganizations = [
    {
      name: "Legal Aid Society - Brooklyn",
      borough: "Brooklyn",
      phone: "(718) 237-5500",
      address: "105 Court Street, Brooklyn, NY 11201",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      services: ["Eviction Defense", "Housing Conditions", "Rent Stabilization"],
      website: "https://legalaidnyc.org/",
      description: "Provides free legal representation to low-income New Yorkers in civil matters."
    },
    {
      name: "Legal Aid Society - Manhattan",
      borough: "Manhattan",
      phone: "(212) 577-3300",
      address: "199 Water Street, New York, NY 10038",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      services: ["Eviction Defense", "Housing Court", "Tenant Rights"],
      website: "https://legalaidnyc.org/",
      description: "Comprehensive legal services for housing issues in Manhattan."
    },
    {
      name: "Legal Aid Society - Bronx",
      borough: "Bronx",
      phone: "(718) 991-4600",
      address: "260 East 161st Street, Bronx, NY 10451",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      services: ["Eviction Defense", "NYCHA Issues", "Harassment"],
      website: "https://legalaidnyc.org/",
      description: "Free legal help for Bronx residents facing housing problems."
    },
    {
      name: "Legal Aid Society - Queens",
      borough: "Queens",
      phone: "(347) 592-2200",
      address: "120-46 Queens Boulevard, Kew Gardens, NY 11415",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      services: ["Eviction Defense", "Housing Conditions", "Benefits"],
      website: "https://legalaidnyc.org/",
      description: "Serving Queens residents with housing legal assistance."
    },
    {
      name: "Legal Aid Society - Staten Island",
      borough: "Staten Island",
      phone: "(718) 556-5550",
      address: "60 Bay Street, Staten Island, NY 10301",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      services: ["Eviction Defense", "Housing Rights", "Legal Consultation"],
      website: "https://legalaidnyc.org/",
      description: "Free housing legal services for Staten Island residents."
    },
    {
      name: "Housing Court Answers",
      borough: "Manhattan",
      phone: "(212) 962-4795",
      address: "111 Centre Street, New York, NY 10013",
      hours: "Mon-Fri: 9:00 AM - 1:00 PM",
      services: ["Court Navigation", "Self-Help", "Document Preparation"],
      website: "https://www.cwtfhc.org/programs/housing-court-answers/",
      description: "Free legal assistance and information for tenants and landlords at Manhattan Housing Court."
    },
    {
      name: "New York Legal Assistance Group (NYLAG)",
      borough: "Manhattan",
      phone: "(212) 613-5000",
      address: "100 Pearl Street, New York, NY 10004",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      services: ["Eviction Prevention", "Senior Housing", "Immigration & Housing"],
      website: "https://nylag.org/",
      description: "Comprehensive civil legal services with specialized housing programs."
    },
    {
      name: "Brooklyn A",
      borough: "Brooklyn",
      phone: "(718) 237-5500",
      address: "1 MetroTech Center North, Brooklyn, NY 11201",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      services: ["Tenant Organizing", "Eviction Defense", "Affirmative Litigation"],
      website: "https://bka.org/",
      description: "Combines free legal representation with community organizing for housing justice."
    },
    {
      name: "MFY Legal Services",
      borough: "Manhattan",
      phone: "(212) 417-3700",
      address: "299 Broadway, New York, NY 10007",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      services: ["Housing Conditions", "NYCHA", "Foreclosure Prevention"],
      website: "https://www.mfy.org/",
      description: "Free legal assistance for low-income New Yorkers with housing issues."
    }
  ];

  const filteredOrgs = selectedBorough === 'all' 
    ? legalAidOrganizations 
    : legalAidOrganizations.filter(org => org.borough === selectedBorough);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-gray-900">Free Legal Help Directory</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          In NYC, you have the right to free legal representation in housing court. 
          Connect with organizations that can help defend your rights.
        </p>
      </div>

      {/* Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-blue-600" />
            Find Legal Aid in Your Borough
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedBorough} onValueChange={setSelectedBorough}>
            <SelectTrigger className="w-full md:w-64">
              <SelectValue placeholder="Select borough" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Boroughs</SelectItem>
              <SelectItem value="Manhattan">Manhattan</SelectItem>
              <SelectItem value="Brooklyn">Brooklyn</SelectItem>
              <SelectItem value="Queens">Queens</SelectItem>
              <SelectItem value="Bronx">Bronx</SelectItem>
              <SelectItem value="Staten Island">Staten Island</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Organizations List */}
      <div className="grid gap-6">
        {filteredOrgs.map((org, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-blue-600" />
                    {org.name}
                  </CardTitle>
                  <CardDescription>{org.description}</CardDescription>
                </div>
                <Badge>{org.borough}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-600">Phone</div>
                      <a href={`tel:${org.phone}`} className="text-gray-900 hover:text-blue-600">
                        {org.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-600">Hours</div>
                      <div className="text-gray-900">{org.hours}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-600">Address</div>
                      <div className="text-gray-900">{org.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <div className="text-sm text-gray-600 mb-2">Services Offered</div>
                <div className="flex flex-wrap gap-2">
                  {org.services.map((service, idx) => (
                    <Badge key={idx} variant="secondary">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Website Link */}
              <Button asChild variant="outline" className="w-full">
                <a href={org.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Resources */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="text-gray-900 mb-2">NYC Housing Court</h3>
              <p className="text-sm text-gray-600 mb-2">Information about housing court proceedings</p>
              <a 
                href="https://ww2.nycourts.gov/courts/nyc/civil/legalassistance.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                Visit NYC Courts Website →
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="text-gray-900 mb-2">LawHelpNY</h3>
              <p className="text-sm text-gray-600 mb-2">Directory of free legal help across New York State</p>
              <a 
                href="https://www.lawhelpny.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                Find More Resources →
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
