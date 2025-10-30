import { AlertTriangle, Phone } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';
import { Button } from './ui/button';
import { translate, type Language } from '../lib/translations';

interface EmergencyBannerProps {
  language: Language;
}

export default function EmergencyBanner({ language }: EmergencyBannerProps) {
  const t = (key: keyof typeof import('../lib/translations').translations.en) => translate(language, key);
  
  return (
    <Alert className="bg-gradient-to-r from-red-600 via-red-500 to-orange-600 border-none text-white shadow-xl rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      <AlertTriangle className="h-6 w-6 text-white relative z-10" />
      <AlertDescription className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <strong className="block text-white mb-2 text-lg">{t('emergencyTitle')}</strong>
            <span className="text-white/95 text-base">{t('emergencyDescription')}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              asChild
            >
              <a href="tel:212-577-3300">
                <Phone className="h-4 w-4 mr-2" />
                {t('callLegalAid')}
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-red-600 backdrop-blur-sm transition-all hover:-translate-y-0.5"
              asChild
            >
              <a href="tel:311">
                {t('call311')}
              </a>
            </Button>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  );
}
