
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Transaction, LogEntry, TransactionStatus } from '../types';
import { generateMockTransactions, generateMockLogs } from '../services/mockData';

interface AppContextType {
  transactions: Transaction[];
  logs: LogEntry[];
  runAgentSimulation: () => Promise<void>;
  resetSimulation: () => void;
  stats: {
    total: number;
    resolved: number;
    pending: number;
    riskHigh: number;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(generateMockTransactions());
  const [logs, setLogs] = useState<LogEntry[]>(generateMockLogs());

  const runAgentSimulation = async () => {
    // Delay to simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setTransactions((prev) => {
      return prev.map((t) => {
        if (t.status === TransactionStatus.PENDING && t.riskScore < 80) {
          return {
            ...t,
            status: TransactionStatus.RESOLVED,
            actionTaken: t.issue === 'Price Mismatch' 
              ? 'Auto-adjusted within tolerance' 
              : t.issue === 'Missing PO' 
                ? 'Linked to PO-2025-99' 
                : 'Enriched vendor data via API',
          };
        } else if (t.status === TransactionStatus.PENDING && t.riskScore >= 80) {
             return {
            ...t,
            status: TransactionStatus.ESCALATED,
            actionTaken: 'Flagged for Human Review',
          };
        }
        return t;
      });
    });

    // Add a log entry
    const newLog: LogEntry = {
      id: `LOG-${Date.now()}`,
      timestamp: new Date().toISOString(),
      caseId: 'BATCH-RUN',
      activity: 'Agent Execution',
      user: 'Agent',
      details: 'Automated reconciliation batch completed. 12 transactions resolved, 3 escalated.',
    };
    setLogs((prev) => [newLog, ...prev]);
  };

  const resetSimulation = () => {
    setTransactions(generateMockTransactions());
    setLogs(generateMockLogs());
  };

  const stats = {
    total: transactions.length,
    resolved: transactions.filter((t) => t.status === TransactionStatus.RESOLVED).length,
    pending: transactions.filter((t) => t.status === TransactionStatus.PENDING).length,
    riskHigh: transactions.filter((t) => t.riskScore > 75).length,
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        logs,
        runAgentSimulation,
        resetSimulation,
        stats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
