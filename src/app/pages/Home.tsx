import { Link } from "react-router";
import { Plus, ArrowRight, Clock, BookOpen, AlertCircle } from "lucide-react";
import { mockPlan } from "../utils/mockData";

export function Home() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back, John 👋</h1>
          <p className="text-slate-500 mt-1">Here's an overview of your study progress.</p>
        </div>
        <Link
          to="/create"
          className="inline-flex items-center justify-center px-4 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create New Plan
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between pb-4">
            <h3 className="font-semibold text-slate-700">Active Plans</h3>
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-900">2</p>
          <p className="text-sm text-slate-500 mt-1">1 exam this week</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between pb-4">
            <h3 className="font-semibold text-slate-700">Study Hours</h3>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-900">14.5</p>
          <p className="text-sm text-slate-500 mt-1">Logged this week</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-amber-500">
          <div className="flex items-center justify-between pb-4">
            <h3 className="font-semibold text-slate-700">Urgent</h3>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <AlertCircle className="w-5 h-5" />
            </div>
          </div>
          <p className="text-lg font-bold text-slate-900">OS Midterm</p>
          <p className="text-sm text-slate-500 mt-1">In 3 days</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Plans</h2>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <ul className="divide-y divide-slate-200">
            <li className="p-4 hover:bg-slate-50 transition-colors">
              <Link to="/plan/plan-123" className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-900">{mockPlan.subject}</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    {mockPlan.days_left} days left • {mockPlan.hours_per_day} hrs/day
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </Link>
            </li>
            <li className="p-4 hover:bg-slate-50 transition-colors">
              <Link to="#" className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-900">Operating Systems</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    3 days left • 8 hrs/day
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
