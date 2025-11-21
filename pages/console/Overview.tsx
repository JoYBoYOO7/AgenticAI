
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Card } from '../../components/ui/Card';
import { TrendingUp, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { generateChartData } from '../../services/mockData';

const Overview: React.FC = () => {
  const { stats } = useAppContext();
  const chartData = React.useMemo(() => generateChartData(), []);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground mt-1">Real-time insights into your autonomous finance operations.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          <button className="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-950 shadow-sm rounded-md text-slate-900 dark:text-slate-100">Today</button>
          <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-100">Week</button>
          <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-100">Month</button>
        </div>
      </div>
      
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard 
          title="Total Transactions" 
          value={stats.total} 
          icon={<TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />} 
          trend="+12.5% from last month"
        />
        <KpiCard 
          title="Pending Review" 
          value={stats.pending} 
          icon={<Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />} 
          trend="Requires attention"
        />
        <KpiCard 
          title="High Risk Identified" 
          value={stats.riskHigh} 
          icon={<AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />} 
          trend="7 anomalies detected"
        />
        <KpiCard 
          title="Auto-Resolved" 
          value={stats.resolved} 
          icon={<CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />} 
          trend="45h manual work saved"
        />
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-1" title="Resolution Efficiency" description="Comparison of autonomous vs manual resolutions over the last 7 days.">
          <div className="h-[350px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAuto" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-slate-200 dark:text-slate-800" />
                <XAxis 
                  dataKey="name" 
                  stroke="#64748b" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={10}
                />
                <YAxis 
                  stroke="#64748b" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    borderColor: 'var(--border)', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                  }}
                  itemStyle={{ fontSize: '12px', fontWeight: '500' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="autonomous" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorAuto)" 
                  name="Autonomous" 
                />
                <Area 
                  type="monotone" 
                  dataKey="manual" 
                  stroke="#94a3b8" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorManual)" 
                  name="Manual" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Discrepancy Sources" description="Breakdown of root causes." className="flex flex-col">
          <div className="h-[350px] w-full mt-4 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'Price', value: 35 },
                { name: 'Vendor', value: 20 },
                { name: 'PO', value: 15 },
                { name: 'Currency', value: 10 },
              ]} layout="vertical" margin={{ top: 0, right: 20, left: 20, bottom: 0 }} barSize={32}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="currentColor" className="text-slate-200 dark:text-slate-800" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={70} 
                  stroke="#64748b" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <Tooltip 
                  cursor={{fill: 'transparent'}} 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    borderColor: 'var(--border)', 
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {
                    [0, 1, 2, 3].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981'][index]} />
                    ))
                  }
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

const KpiCard = ({ title, value, icon, trend }: { title: string, value: number | string, icon: React.ReactNode, trend: string }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div className="flex items-center justify-between space-y-0 pb-2">
      <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</h3>
      {icon}
    </div>
    <div className="text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{trend}</p>
  </div>
);

export default Overview;
