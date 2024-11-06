import { Link2, Wand2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

const outfits = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    title: 'Outfit 1'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=800&q=80',
    title: 'Outfit 2'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    title: 'Outfit 3'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
    title: 'Outfit 4'
  },
];

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex items-center space-x-4 mb-8">
        <Link2 className="w-6 h-6 text-orange-500" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
          App Gallery
        </h1>
        <Wand2 className="w-6 h-6 text-purple-500" />
      </div>

      <Tabs defaultValue="outfit1">
        <TabsList className="mb-8">
          {outfits.map((outfit) => (
            <TabsTrigger key={outfit.id} value={`outfit${outfit.id}`}>
              {outfit.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {outfits.map((outfit) => (
          <TabsContent key={outfit.id} value={`outfit${outfit.id}`}>
            <Card className="p-6">
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img
                  src={outfit.image}
                  alt={outfit.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}