import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { TransactionStatus } from '../../types';
import { Play, Loader2, CheckCircle2, AlertOctagon, Search } from 'lucide-react';

const Agent: React.FC = () => {
  const { transactions, runAgentSimulation } = useAppContext();
  const [isSimulating, setIsSimulating] = useState(false);
  const [lastRunStats, setLastRunStats] = useState<{resolved: number} | null>(null);

  const handleSimulation = async () => {
    setIsSimulating(true);
    await runAgentSimulation();
    setIsSimulating(false);
    setLastRunStats({ resolved: Math.floor(Math.random() * 5) + 3 }); // Mock feedback
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Autonomous Agent Console</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Review agent decisions and trigger batch reconciliation runs.</p>
        </div>
        
        <button
          onClick={handleSimulation}
          disabled={isSimulating}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-semibold shadow-lg transition-all active:scale-95"
        >
          {isSimulating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Running Agent...
            </>
          ) : (
            <>
              <Play className="w-5 h-5 fill-current" />
              Simulate Agent Run
            </>
          )}
        </button>
      </div>

      {lastRunStats && !isSimulating && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center gap-3 animate-slide-up">
          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span className="text-green-800 dark:text-green-300 font-medium">Success! The agent autonomously resolved pending discrepancies.</span>
        </div>
      )}

      <Card className="overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex gap-2">
          <div className="relative flex-1 max-w-sm">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input type="text" placeholder="Search Transaction ID..." className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-medium">
              <tr>
                <th className="px-6 py-3">Transaction ID</th>
                <th className="px-6 py-3">Issue</th>
                <th className="px-6 py-3">Risk Score</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Agent Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-200">{t.id}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{t.issue}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${t.riskScore > 80 ? 'bg-red-500' : t.riskScore > 50 ? 'bg-yellow-500' : 'bg-green-500'}`} 
                          style={{ width: `${t.riskScore}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono">{t.riskScore}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={
                      t.status === TransactionStatus.RESOLVED ? 'success' : 
                      t.status === TransactionStatus.ESCALATED ? 'destructive' : 
                      t.status === TransactionStatus.INVESTIGATING ? 'warning' : 'outline'
                    }>
                      {t.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400 italic">
                    {t.actionTaken ? (
                       <span className="flex items-center gap-1.5">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                         {t.actionTaken}
                       </span>
                    ) : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Agent;
