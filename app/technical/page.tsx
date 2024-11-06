import { Wand2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Technical() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex items-center space-x-4 mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
          Technical Features
        </h1>
        <Wand2 className="w-6 h-6 text-purple-500" />
      </div>

      <Card className="p-6">
        <p className="text-lg mb-6">
          The system takes in an image as an input and output similar outfits based
          on visual similarity attributes. The overall system looks like the following:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
            alt="Technical diagram"
            className="w-full rounded-lg"
          />
        </div>
      </Card>
    </div>
  );
}