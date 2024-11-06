import { Sparkles, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import UploadZone from '@/components/UploadZone';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex items-center justify-center space-x-4 mb-8">
        <ShoppingBag className="w-8 h-8 text-blue-500" />
        <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
          Your personal AI Stylist
        </h1>
        <Sparkles className="w-8 h-8 text-yellow-500" />
      </div>

      <Card className="p-6 mb-8">
        <p className="text-lg text-center mb-4">
          Hello, welcome to my project page! 😊
        </p>
        <p className="text-gray-600 mb-4">
          Smart Stylist is a computer vision powered web-app that lets you upload
          an image of an outfit and return recommendations on similar style. An
          image with white background works best.
        </p>
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <a href="/technical">Learn More</a>
          </Button>
        </div>
      </Card>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          <span className="mr-2">👉</span>
          <p className="text-blue-800">
            Check out the gallery in sidebar to get some ideas
          </p>
        </div>
      </div>

      <UploadZone />
    </div>
  );
}