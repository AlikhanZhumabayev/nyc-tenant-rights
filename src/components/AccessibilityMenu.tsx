import { useState } from 'react';
import { Settings, ZoomIn, ZoomOut, Contrast, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';

interface AccessibilityMenuProps {
  onFontSizeChange: (size: number) => void;
  onHighContrastChange: (enabled: boolean) => void;
  onReduceMotionChange: (enabled: boolean) => void;
}

export default function AccessibilityMenu({ 
  onFontSizeChange, 
  onHighContrastChange,
  onReduceMotionChange 
}: AccessibilityMenuProps) {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const handleFontSizeChange = (value: number[]) => {
    const newSize = value[0];
    setFontSize(newSize);
    onFontSizeChange(newSize);
  };

  const handleHighContrastToggle = (enabled: boolean) => {
    setHighContrast(enabled);
    onHighContrastChange(enabled);
  };

  const handleReduceMotionToggle = (enabled: boolean) => {
    setReduceMotion(enabled);
    onReduceMotionChange(enabled);
  };

  return (
    <Popover>
      <PopoverTrigger 
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 w-10"
        aria-label="Accessibility settings"
      >
        <Settings className="h-4 w-4" aria-hidden="true" />
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-gray-900">Accessibility Settings</h3>
            <p className="text-sm text-gray-600">Customize your viewing experience</p>
          </div>

          {/* Font Size */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="font-size" className="flex items-center gap-2">
                <ZoomIn className="h-4 w-4" aria-hidden="true" />
                <span>Text Size</span>
              </Label>
              <span className="text-sm text-gray-600">{fontSize}%</span>
            </div>
            <Slider
              id="font-size"
              min={80}
              max={150}
              step={10}
              value={[fontSize]}
              onValueChange={handleFontSizeChange}
              aria-label="Adjust text size"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Smaller</span>
              <span>Larger</span>
            </div>
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between">
            <Label htmlFor="high-contrast" className="flex items-center gap-2 cursor-pointer">
              <Contrast className="h-4 w-4" aria-hidden="true" />
              <div>
                <div>High Contrast</div>
                <div className="text-xs text-gray-500">Improve text visibility</div>
              </div>
            </Label>
            <Switch
              id="high-contrast"
              checked={highContrast}
              onCheckedChange={handleHighContrastToggle}
              aria-label="Toggle high contrast mode"
            />
          </div>

          {/* Reduce Motion */}
          <div className="flex items-center justify-between">
            <Label htmlFor="reduce-motion" className="flex items-center gap-2 cursor-pointer">
              <Eye className="h-4 w-4" aria-hidden="true" />
              <div>
                <div>Reduce Motion</div>
                <div className="text-xs text-gray-500">Minimize animations</div>
              </div>
            </Label>
            <Switch
              id="reduce-motion"
              checked={reduceMotion}
              onCheckedChange={handleReduceMotionToggle}
              aria-label="Toggle reduced motion"
            />
          </div>

          <div className="pt-4 border-t text-xs text-gray-500">
            These settings are saved locally in your browser
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
