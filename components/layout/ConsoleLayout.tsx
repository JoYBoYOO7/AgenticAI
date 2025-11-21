
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { ThemeToggle } from '../ThemeToggle';
import { Bell, Search, ChevronRight, User } from 'lucide-react';

const ConsoleLayout: React.FC = () => {
  const location = useLocation();
  
  // Simple breadcrumb generation
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentSection = pathSegments[pathSegments.length - 1] || 'Overview';
  const formattedTitle = currentSection.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="flex h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden font-sans">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Bar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-10 sticky top-0">
          {/* Breadcrumbs / Title */}
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="hidden md:inline hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer transition-colors">Console</span>
            <ChevronRight className="w-4 h-4 hidden md:block" />
            <h1 className="font-semibold text-slate-900 dark:text-white text-lg md:text-base">{formattedTitle}</h1>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Search (Desktop) */}
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search logs..." 
                className="h-9 w-64 rounded-md border border-slate-200 bg-transparent pl-9 pr-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
              />
            </div>

            <button className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
            
            <ThemeToggle />
            
            <button className="flex items-center gap-2 pl-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-medium shadow-md ring-2 ring-white dark:ring-slate-950">
                JD
              </div>
            </button>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto w-full space-y-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConsoleLayout;
