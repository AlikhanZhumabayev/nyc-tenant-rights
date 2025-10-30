import { CheckCircle, XCircle, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { translate, type Language } from '../lib/translations';

interface QuickFactsProps {
  language: Language;
}

export default function QuickFacts({ language }: QuickFactsProps) {
  const t = (key: keyof typeof import('../lib/translations').translations.en) => translate(language, key);
  
  const cannotItems = [
    t('cannotChangeLocks'),
    t('cannotShutOffUtilities'),
    t('cannotEvictWithoutCourt'),
    t('cannotHarass'),
    t('cannotRefuseVouchers'),
    t('cannotDiscriminate'),
    t('cannotEnterWithoutNotice')
  ];
  
  const mustItems = [
    t('mustProvideHeat'),
    t('mustProvideHotWater'),
    t('mustMakeRepairs'),
    t('mustKeepPestFree'),
    t('mustProvideWrittenLease'),
    t('mustOfferRenewal'),
    t('mustAllowRoommates'),
    t('mustReturnDeposit')
  ];
  
  return (
    <Card className="mb-12 shadow-lg border-2">
      <CardHeader className="pb-6">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Info className="h-6 w-6 text-blue-600" />
          </div>
          {t('quickFactsTitle')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="cannot" className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-gray-100">
            <TabsTrigger value="cannot" className="py-3 text-base data-[state=active]:bg-white data-[state=active]:shadow-md">
              {t('landlordsCannotTab')}
            </TabsTrigger>
            <TabsTrigger value="must" className="py-3 text-base data-[state=active]:bg-white data-[state=active]:shadow-md">
              {t('landlordsMustTab')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="cannot" className="mt-6">
            <div className="space-y-3">
              {cannotItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-red-100/50 rounded-xl border-2 border-red-200 hover:border-red-300 transition-colors">
                  <div className="p-2 bg-red-600 rounded-lg shadow-sm">
                    <XCircle className="h-5 w-5 text-white flex-shrink-0" />
                  </div>
                  <span className="text-sm text-gray-900 leading-relaxed pt-1">{item}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="must" className="mt-6">
            <div className="space-y-3">
              {mustItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl border-2 border-green-200 hover:border-green-300 transition-colors">
                  <div className="p-2 bg-green-600 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  </div>
                  <span className="text-sm text-gray-900 leading-relaxed pt-1">{item}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
