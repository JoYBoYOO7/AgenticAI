import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { useAppContext } from '../../context/AppContext';
import { ArrowRight, Clock } from 'lucide-react';

const ProcessMining: React.FC = () => {
  const { logs } = useAppContext();
  const [variant, setVariant] = useState('Standard');

  // Mock flow data based on variant
  const steps = variant === 'Standard' 
    ? ['Invoice Received', 'Data Validation', 'PO Matching', 'Approval', 'Payment Scheduled']
    : ['Invoice Received', 'Data Validation', 'Mismatch Detected', 'Agent Investigation', 'Correction', 'Payment Scheduled'];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Process Mining Discovery</h1>
        <select 
          className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          value={variant}
          onChange={(e) => setVariant(e.target.value)}
        >
          <option value="Standard">View: Happy Path (65%)</option>
          <option value="Exception">View: Exception Path (35%)</option>
        </select>
      </div>

      {/* Process Map Visualization */}
      <Card className="p-8 overflow-x-auto min-h-[300px] flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
        <div className="flex items-center gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`
                relative flex flex-col items-center justify-center w-40 h-24 rounded-xl border-2 transition-all
                ${step === 'Agent Investigation' || step === 'Mismatch Detected' 
                  ? 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-900/20 dark:border-amber-700 dark:text-amber-400' 
                  : step === 'Correction'
                    ? 'bg-green-50 border-green-200 text-green-900 dark:bg-green-900/20 dark:border-green-700 dark:text-green-400'
                    : 'bg-white border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 shadow-sm'
                }
              `}>
                <span className="font-semibold text-sm text-center px-2">{step}</span>
                <div className="absolute -bottom-6 text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {['2m', '1m', '5m', '45m', '2h', '2d'][index] || '1h'}
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-slate-300 dark:text-slate-600" />
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Logs Table */}
      <Card title="Event Logs" className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase font-medium">
              <tr>
                <th className="px-6 py-3">Timestamp</th>
                <th className="px-6 py-3">Case ID</th>
                <th className="px-6 py-3">Activity</th>
                <th className="px-6 py-3">User</th>
                <th className="px-6 py-3">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {logs.slice(0, 6).map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{log.caseId}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      log.activity.includes('Agent') || log.activity.includes('Detection') 
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' 
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                    }`}>
                      {log.activity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{log.user}</td>
                  <td className="px-6 py-4 text-slate-500 max-w-xs truncate">{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ProcessMining;
