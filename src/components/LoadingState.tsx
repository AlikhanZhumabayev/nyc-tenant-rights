import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message = "Loading..." }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12" role="status" aria-live="polite">
      <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" aria-hidden="true" />
      <p className="text-gray-600">{message}</p>
      <span className="sr-only">{message}</span>
    </div>
  );
}
