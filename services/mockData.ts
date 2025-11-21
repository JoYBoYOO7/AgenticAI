import { Transaction, TransactionStatus, LogEntry, ChartDataPoint } from '../types';

export const generateMockTransactions = (): Transaction[] => {
  const issues = ['Price Mismatch', 'Missing PO', 'Vendor Not Found', 'Duplicate Invoice', 'Currency Mismatch'];
  const vendors = ['Acme Corp', 'Globex', 'Soylent Corp', 'Initech', 'Umbrella Corp'];
  
  return Array.from({ length: 25 }).map((_, i) => {
    const isResolved = Math.random() > 0.7;
    const riskScore = Math.floor(Math.random() * 100);
    const issue = issues[Math.floor(Math.random() * issues.length)];

    return {
      id: `INV-2025-${String(1000 + i).padStart(4, '0')}`,
      date: new Date(Date.now() - Math.floor(Math.random() * 1000000000)).toISOString().split('T')[0],
      amount: Math.floor(Math.random() * 10000) + 50,
      vendor: vendors[Math.floor(Math.random() * vendors.length)],
      status: isResolved ? TransactionStatus.RESOLVED : TransactionStatus.PENDING,
      riskScore,
      issue,
      rootCause: isResolved ? `Identified ${issue.toLowerCase()} pattern` : undefined,
      actionTaken: isResolved ? 'Auto-reconciled' : undefined,
    };
  });
};

export const generateMockLogs = (): LogEntry[] => {
  return [
    {
      id: 'LOG-001',
      timestamp: new Date(Date.now() - 1000000).toISOString(),
      caseId: 'INV-2025-1024',
      activity: 'Ingestion',
      user: 'System',
      details: 'Invoice received from OCR gateway',
    },
    {
      id: 'LOG-002',
      timestamp: new Date(Date.now() - 900000).toISOString(),
      caseId: 'INV-2025-1024',
      activity: 'Risk Scoring',
      user: 'System',
      details: 'Risk score calculated: 12/100 (Low)',
    },
    {
      id: 'LOG-003',
      timestamp: new Date(Date.now() - 800000).toISOString(),
      caseId: 'INV-2025-1022',
      activity: 'Anomaly Detection',
      user: 'Agent',
      details: 'Detected unexpected currency GBP for US Vendor',
    },
  ];
};

export const generateChartData = (): ChartDataPoint[] => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map(day => ({
    name: day,
    manual: Math.floor(Math.random() * 50) + 20,
    autonomous: Math.floor(Math.random() * 80) + 40,
  }));
};
