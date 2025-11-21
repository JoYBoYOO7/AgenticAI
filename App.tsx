
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import ConsoleLayout from './components/layout/ConsoleLayout';
import Overview from './pages/console/Overview';
import ProcessMining from './pages/console/ProcessMining';
import Analytics from './pages/console/Analytics';
import Agent from './pages/console/Agent';
import Logs from './pages/console/Logs';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="agentic-ai-theme">
      <AppProvider>
        <HashRouter>
          <div className="min-h-screen bg-background text-foreground font-sans antialiased">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/console" element={<ConsoleLayout />}>
                <Route index element={<Navigate to="overview" replace />} />
                <Route path="overview" element={<Overview />} />
                <Route path="process-mining" element={<ProcessMining />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="agent" element={<Agent />} />
                <Route path="logs" element={<Logs />} />
              </Route>
            </Routes>
            <Chatbot />
          </div>
        </HashRouter>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
