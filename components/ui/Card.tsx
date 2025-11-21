
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, description, action }) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50 ${className}`}>
      {(title || description || action) && (
        <div className="flex flex-col space-y-1.5 p-6 pb-3">
          <div className="flex items-center justify-between">
            {title && <h3 className="font-semibold leading-none tracking-tight text-lg">{title}</h3>}
            {action && <div>{action}</div>}
          </div>
          {description && <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>}
        </div>
      )}
      <div className="p-6 pt-0">{children}</div>
    </div>
  );
};
