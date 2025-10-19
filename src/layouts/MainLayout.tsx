import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from '../components/Sidebar';

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* App Bar */}
      <header className="fixed top-0 right-0 left-0 md:left-60 z-40 h-16 border-b bg-background">
        <div className="flex items-center h-full px-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={handleDrawerToggle}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">TransFlow</h1>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />

      {/* Main Content */}
      <main className="flex-1 md:ml-60 mt-16 p-6">
        <Outlet />
      </main>
    </div>
  );
}

