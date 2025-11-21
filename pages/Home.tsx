
import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, BarChart3, ShieldCheck, Workflow, Cpu, Activity, BrainCircuit } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-blue-100 dark:selection:bg-blue-900/30">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 md:pt-24 pb-16 md:pb-32">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 dark:bg-blue-500/15 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium mb-8 animate-fade-in hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            v2.0 with Gemini 2.5 Flash Reasoning
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 animate-slide-up leading-[1.1]">
            Agentic AI for <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Intelligent Automation
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-slide-up delay-100 leading-relaxed">
            Transform your ERP workflows with autonomous agents. From Process Mining to Predictive Analytics and self-healing RPA execution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
            <Link 
              to="/console"
              className="min-w-[160px] inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              Launch Console
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/architecture"
              className="min-w-[160px] inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-800"
            >
              View Architecture
            </Link>
          </div>
        </div>
      </div>

      {/* Stats / Value Props */}
      <div className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="h-6 w-6 text-amber-500" />}
              title="80% Fewer Interventions"
              desc="Drastically reduce manual touches by delegating complex reconciliation tasks to AI agents that understand context."
            />
            <FeatureCard 
              icon={<Activity className="h-6 w-6 text-blue-500" />}
              title="Accelerated Close"
              desc="Speed up month-end financial closing from days to hours with continuous, real-time background processing."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-6 w-6 text-green-500" />}
              title="Autonomous Resolution"
              desc="Agents don't just flag errors; they fix them by safely interfacing directly with ERP APIs and validation rules."
            />
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-32 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Autonomous Pipeline</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A closed-loop system that continuously improves your business processes.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 dark:from-slate-800 dark:via-blue-900 dark:to-slate-800 -z-10" />
          
          <StepCard 
            number="01"
            title="Process Mining"
            icon={<Workflow className="h-6 w-6" />}
            desc="Ingests raw ERP event logs to reconstruct the 'as-is' workflow and identify inefficiencies."
          />
           <StepCard 
            number="02"
            title="Predictive Analytics"
            icon={<BarChart3 className="h-6 w-6" />}
            desc="Machine learning models score every transaction for risk and forecast future bottlenecks."
          />
           <StepCard 
            number="03"
            title="Agent Execution"
            icon={<Cpu className="h-6 w-6" />}
            desc="The AI agent diagnoses root causes and executes RPA scripts to resolve discrepancies."
          />
        </div>
      </div>

      <footer className="mt-auto py-12 bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-white font-bold text-lg">
             <BrainCircuit className="w-6 h-6 text-blue-500" />
             <span>AgenticAI</span>
          </div>
          <p className="mb-6">Built for the next generation of enterprise automation.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="mt-8 text-slate-600">© 2025 Agentic AI Demo. Prototype only.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="group p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all duration-300">
    <div className="w-12 h-12 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

const StepCard = ({ number, title, icon, desc }: { number: string, title: string, icon: React.ReactNode, desc: string }) => (
  <div className="relative flex flex-col items-center text-center p-6">
    <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-xl flex items-center justify-center mb-6 z-10 relative group">
      <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform -z-10"></div>
      <div className="text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-sm border-4 border-white dark:border-slate-950">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground max-w-xs">{desc}</p>
  </div>
);

export default Home;
