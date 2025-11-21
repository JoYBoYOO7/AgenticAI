export enum TransactionStatus {
  PENDING = 'Pending',
  INVESTIGATING = 'Investigating',
  RESOLVED = 'Resolved',
  ESCALATED = 'Escalated',
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  vendor: string;
  status: TransactionStatus;
  riskScore: number; // 0-100
  issue: string; // e.g., "Price Mismatch", "Missing PO"
  rootCause?: string;
  actionTaken?: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  caseId: string;
  activity: string;
  user: 'System' | 'Agent' | 'User';
  details: string;
}

export interface KpiMetric {
  label: string;
  value: string | number;
  change?: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface ChartDataPoint {
  name: string;
  manual: number;
  autonomous: number;
}
