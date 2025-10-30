import { Users, Scale, Home, TrendingDown } from 'lucide-react';
import { translate, type Language } from '../lib/translations';

interface ImpactStatsProps {
  language: Language;
}

export default function ImpactStats({ language }: ImpactStatsProps) {
  const t = (key: keyof typeof import('../lib/translations').translations.en) => translate(language, key);
  
  const stats = [
    {
      icon: Scale,
      value: "84%",
      label: t('tenantsWinWithLawyer'),
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Users,
      value: "100%",
      label: t('freeAttorneyInCourt'),
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Home,
      value: "1M+",
      label: t('rentStabilizedApts'),
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: TrendingDown,
      value: "50K+",
      label: t('evictionFilingsPerYear'),
      color: "text-orange-600 bg-orange-50"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="group text-center p-6 bg-white rounded-xl border-2 border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <div className={`inline-flex p-4 rounded-xl ${stat.color} mb-4 shadow-sm group-hover:shadow-md transition-all`}>
              <Icon className="h-7 w-7" />
            </div>
            <div className="text-3xl text-gray-900 mb-2">{stat.value}</div>
            <div className="text-sm text-gray-600 leading-relaxed">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}
