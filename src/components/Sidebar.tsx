import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutDashboard, Settings } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface SidebarProps {
  mobileOpen: boolean;
  onDrawerToggle: () => void;
}

const menuItems = [
  { text: 'Home', icon: Home, path: '/' },
  { text: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { text: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar({ mobileOpen, onDrawerToggle }: SidebarProps) {
  const location = useLocation();

  const drawer = (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-primary">TransFlow</h2>
      </div>
      <nav className="flex-1 p-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.text}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md transition-colors mb-1',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.text}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile drawer */}
      <Sheet open={mobileOpen} onOpenChange={onDrawerToggle}>
        <SheetContent side="left" className="p-0 w-60">
          {drawer}
        </SheetContent>
      </Sheet>

      {/* Desktop drawer */}
      <aside className="hidden md:block w-60 border-r bg-card">
        {drawer}
      </aside>
    </>
  );
}

