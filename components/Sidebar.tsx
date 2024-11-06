'use client';

import { Home, Image as ImageIcon, Settings, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const links = [
  { name: 'home', href: '/', icon: Home },
  { name: 'gallery', href: '/gallery', icon: ImageIcon },
  { name: 'TechnicalFeatures', href: '/technical', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-[-40px] top-2 z-50"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Menu className="h-5 w-5" />
      </Button>
      <div
        className={cn(
          'h-screen bg-white border-r border-gray-200 transition-all duration-300',
          isCollapsed ? 'w-0 overflow-hidden' : 'w-64'
        )}
      >
        <div className="p-4 space-y-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700',
                  pathname === link.href ? 'bg-gray-100 text-gray-900' : ''
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium capitalize">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}