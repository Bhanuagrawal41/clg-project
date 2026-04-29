import { BookOpen } from "lucide-react";
import { Link } from "react-router";
import { mockPlan } from "../utils/mockData";

export function Plans() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Saved Plans</h1>
          <p className="text-slate-500 mt-1">Manage and review all your study schedules.</p>
        </div>
        <Link
          to="/create"
          className="inline-flex items-center justify-center px-4 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
        >
          Create New Plan
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-slate-200">
          <div className="p-6 hover:bg-slate-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg mr-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <Link to={`/plan/${mockPlan.id}`} className="hover:text-indigo-600 transition-colors">
                    <h3 className="text-lg font-bold text-slate-900">{mockPlan.subject}</h3>
                  </Link>
                  <p className="text-sm text-slate-500 mt-1">
                    Created 2 days ago • {mockPlan.days_left} Days • {mockPlan.hours_per_day} Hours/Day
                  </p>
                </div>
              </div>
              <Link 
                to={`/plan/${mockPlan.id}`}
                className="inline-flex items-center justify-center px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                View Plan
              </Link>
            </div>
          </div>
          
          <div className="p-6 hover:bg-slate-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start">
                <div className="p-3 bg-slate-100 text-slate-600 rounded-lg mr-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <Link to="#" className="hover:text-indigo-600 transition-colors">
                    <h3 className="text-lg font-bold text-slate-900">Operating Systems</h3>
                  </Link>
                  <p className="text-sm text-slate-500 mt-1">
                    Created 1 week ago • 3 Days • 8 Hours/Day
                  </p>
                </div>
              </div>
              <Link 
                to="#"
                className="inline-flex items-center justify-center px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                View Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
