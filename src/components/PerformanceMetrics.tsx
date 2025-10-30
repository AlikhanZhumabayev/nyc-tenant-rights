import { useEffect, useState } from 'react';
import { Activity, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function PerformanceMetrics() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    interactive: false
  });

  useEffect(() => {
    // Measure page load time
    if (window.performance) {
      const perfData = window.performance.timing;
      const loadTime = perfData.loadEventEnd - perfData.navigationStart;
      
      setMetrics({
        loadTime: Math.round(loadTime / 1000 * 10) / 10,
        interactive: true
      });
    }

    // Report Web Vitals (if available)
    if ('web-vital' in window) {
      // This is a placeholder for Web Vitals reporting
      console.log('Web Vitals monitoring enabled');
    }
  }, []);

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <Card className="fixed bottom-24 left-6 w-64 bg-black/90 text-white border-green-500">
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="h-4 w-4 text-green-400" />
          <span className="text-sm">Performance Metrics</span>
        </div>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-400">Load Time:</span>
            <span className="text-green-400">{metrics.loadTime}s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Interactive:</span>
            <span className="text-green-400">{metrics.interactive ? 'Yes' : 'No'}</span>
          </div>
          <div className="flex items-center gap-1 pt-2 border-t border-gray-700">
            <Zap className="h-3 w-3 text-yellow-400" />
            <span className="text-gray-400">Optimized for speed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
