import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Card } from '../components/ui/Card';
import { Database, ArrowRight, Server, Brain, Cog } from 'lucide-react';

const Architecture: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">System Architecture</h1>
          
          <Card className="p-8">
            <div className="flex flex-col gap-8">
              {/* Layer 1: Input */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                 <div className="w-full md:w-1/4 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
                    <Database className="w-10 h-10 text-slate-500 mb-3" />
                    <h3 className="font-bold text-slate-900 dark:text-white">ERP System</h3>
                    <p className="text-xs text-slate-500 mt-1">Raw Event Logs (CSV/API)</p>
                 </div>
                 <ArrowDownMobileRightDesktop />
                 
                 {/* Layer 2: Process Mining */}
                 <div className="w-full md:w-3/4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 relative">
                    <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">Stage 1</div>
                    <div className="flex items-center gap-4">
                       <Server className="w-8 h-8 text-blue-600" />
                       <div>
                          <h3 className="font-bold text-slate-900 dark:text-white">Ingestion & Process Mining</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Reconstructs the process graph, identifying variants and calculating throughput times.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <ArrowDownCenter />

              {/* Layer 3: Intelligence */}
              <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800 relative">
                 <div className="absolute -top-3 left-4 bg-purple-600 text-white text-xs px-2 py-1 rounded font-bold">Stage 2: Intelligence Layer</div>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                       <h4 className="font-semibold text-purple-900 dark:text-purple-300 flex items-center gap-2">
                          <Brain className="w-4 h-4" /> Predictive Engine
                       </h4>
                       <p className="text-sm text-slate-600 dark:text-slate-400">Machine Learning models score transactions for failure risk based on historical patterns.</p>
                    </div>
                    <div className="flex flex-col gap-2 pl-0 md:pl-6 md:border-l border-purple-200 dark:border-purple-800">
                       <h4 className="font-semibold text-purple-900 dark:text-purple-300 flex items-center gap-2">
                          <Cog className="w-4 h-4" /> Agent Reasoning
                       </h4>
                       <p className="text-sm text-slate-600 dark:text-slate-400">LLM-based agent interprets risk scores and selects the optimal corrective strategy.</p>
                    </div>
                 </div>
              </div>

              <ArrowDownCenter />

              {/* Layer 4: Action */}
              <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 relative flex items-center justify-between">
                 <div className="absolute -top-3 left-4 bg-green-600 text-white text-xs px-2 py-1 rounded font-bold">Stage 3: Execution</div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center text-green-600 dark:text-green-200 font-bold">
                        RPA
                    </div>
                    <div>
                       <h3 className="font-bold text-slate-900 dark:text-white">Autonomous Correction</h3>
                       <p className="text-sm text-slate-600 dark:text-slate-300">API calls or RPA bots update the ERP system (e.g., correct price, attach document).</p>
                    </div>
                 </div>
                 <div className="hidden md:block text-right">
                    <div className="text-xs font-mono text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/50 px-3 py-2 rounded">
                       PUT /api/v1/invoices/update <br/>
                       Status: 200 OK
                    </div>
                 </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const ArrowDownMobileRightDesktop = () => (
  <div className="flex items-center justify-center">
     <ArrowRight className="w-6 h-6 text-slate-300 hidden md:block" />
     <div className="w-0.5 h-6 bg-slate-300 md:hidden my-2"></div>
  </div>
);

const ArrowDownCenter = () => (
   <div className="flex justify-center">
      <div className="w-0.5 h-8 bg-slate-300"></div>
   </div>
);

export default Architecture;
