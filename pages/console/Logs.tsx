import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Card } from '../../components/ui/Card';
import { FileText, Terminal } from 'lucide-react';

const Logs: React.FC = () => {
  const { logs } = useAppContext();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <FileText className="w-6 h-6 text-slate-600 dark:text-slate-300" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">System Audit Trail</h1>
          <p className="text-sm text-slate-500">Immutable record of all autonomous agent decisions.</p>
        </div>
      </div>

      <Card className="bg-slate-900 text-slate-200 font-mono text-sm p-0 overflow-hidden border-slate-700">
        <div className="bg-slate-800 p-2 px-4 flex items-center gap-2 border-b border-slate-700">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-xs uppercase tracking-wider text-slate-400">agent_execution.log</span>
        </div>
        <div className="p-4 space-y-1 max-h-[600px] overflow-y-auto">
          {logs.map((log, idx) => (
            <div key={log.id} className="flex gap-4 hover:bg-slate-800/50 p-1 rounded cursor-default group">
              <span className="text-slate-500 whitespace-nowrap shrink-0">
                {new Date(log.timestamp).toISOString().replace('T', ' ').substring(0, 19)}
              </span>
              <span className={`uppercase w-20 shrink-0 ${
                log.user === 'Agent' ? 'text-purple-400' : 'text-blue-400'
              }`}>[{log.user}]</span>
              <span className="text-slate-300 group-hover:text-white transition-colors">
                <span className="text-yellow-500/80 mr-2">#{log.caseId}</span>
                {log.details}
              </span>
            </div>
          ))}
          <div className="h-4 w-2 bg-green-500 animate-pulse mt-2"></div>
        </div>
      </Card>
    </div>
  );
};

export default Logs;
