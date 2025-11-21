import { LucideIcon, LayoutDashboard, Workflow, BarChart3, Bot, FileText, Home, Layers } from 'lucide-react';

export const NAV_ITEMS: { label: string; path: string; icon: LucideIcon }[] = [
  { label: 'Overview', path: '/console/overview', icon: LayoutDashboard },
  { label: 'Process Mining', path: '/console/process-mining', icon: Workflow },
  { label: 'Analytics', path: '/console/analytics', icon: BarChart3 },
  { label: 'Agent Actions', path: '/console/agent', icon: Bot },
  { label: 'Logs & Audit', path: '/console/logs', icon: FileText },
];

export const MAIN_NAV: { label: string; path: string; icon?: LucideIcon }[] = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Architecture', path: '/architecture', icon: Layers },
  { label: 'Demo Console', path: '/console', icon: LayoutDashboard },
];
