import React from 'react';
import { Card } from '../../components/ui/Card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ScatterChart, Scatter, ZAxis } from 'recharts';

const Analytics: React.FC = () => {
  const riskData = [
    { range: '0-20', count: 450, fill: '#22c55e' },
    { range: '21-40', count: 210, fill: '#84cc16' },
    { range: '41-60', count: 120, fill: '#eab308' },
    { range: '61-80', count: 80, fill: '#f97316' },
    { range: '81-100', count: 45, fill: '#ef4444' },
  ];

  const scatterData = Array.from({ length: 20 }, (_, i) => ({
    x: Math.floor(Math.random() * 100), // Process Time
    y: Math.floor(Math.random() * 100), // Risk Score
    z: Math.floor(Math.random() * 500), // Amount
  }));

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Predictive Analytics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Risk Score Distribution">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="range" label={{ value: 'Risk Score Range', position: 'insideBottom', offset: -5 }} stroke="#94a3b8" fontSize={12} />
                <YAxis label={{ value: 'Transaction Count', angle: -90, position: 'insideLeft' }} stroke="#94a3b8" fontSize={12} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px' }} />
                <Bar dataKey="count" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">Most transactions are low risk (green), but the tail end (red) requires agent intervention.</p>
        </Card>

        <Card title="Process Duration vs Risk Correlation">
           <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis type="number" dataKey="x" name="Process Duration (hrs)" stroke="#94a3b8" fontSize={12} />
                <YAxis type="number" dataKey="y" name="Risk Score" stroke="#94a3b8" fontSize={12} />
                <ZAxis type="number" dataKey="z" range={[50, 400]} name="Amount" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ borderRadius: '8px' }} />
                <Scatter name="Transactions" data={scatterData} fill="#3b82f6" fillOpacity={0.6} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
           <p className="text-xs text-slate-500 mt-4 text-center">Higher process durations often correlate with higher risk scores, indicating stuck workflows.</p>
        </Card>
      </div>

      <Card title="Top Bottleneck Activities">
        <div className="space-y-4">
          {[
            { name: 'Manual PO Match', time: '4h 12m', impact: 'High' },
            { name: 'Vendor Approval', time: '2h 45m', impact: 'Medium' },
            { name: 'Invoice Scan Correction', time: '1h 30m', impact: 'Low' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-4">
                 <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                 </div>
                 <span className="font-medium text-slate-900 dark:text-slate-100">{item.name}</span>
              </div>
              <div className="flex items-center gap-6">
                 <div className="text-right">
                    <div className="text-xs text-slate-500">Avg Wait</div>
                    <div className="font-mono font-semibold">{item.time}</div>
                 </div>
                 <div className={`px-3 py-1 rounded text-xs font-bold ${item.impact === 'High' ? 'bg-red-100 text-red-700' : item.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                    {item.impact}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
