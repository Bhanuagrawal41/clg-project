import { Settings as SettingsIcon, User, Bell, Shield, Database } from "lucide-react";

export function Settings() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Settings</h1>
        <p className="text-slate-500 mt-1">Manage your account preferences and application settings.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[400px]">
          {/* Settings Navigation */}
          <div className="border-r border-slate-200 p-4 space-y-1 bg-slate-50">
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium bg-white text-indigo-600 rounded-lg shadow-sm border border-slate-200">
              <User className="w-4 h-4 mr-3" />
              Profile
            </button>
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-colors">
              <Bell className="w-4 h-4 mr-3" />
              Notifications
            </button>
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-colors">
              <Database className="w-4 h-4 mr-3" />
              Data & AI
            </button>
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-colors">
              <Shield className="w-4 h-4 mr-3" />
              Security
            </button>
          </div>

          {/* Settings Content */}
          <div className="md:col-span-3 p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Profile Information</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    defaultValue="John Student"
                    className="w-full max-w-md px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="john@example.com"
                    className="w-full max-w-md px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="major" className="block text-sm font-medium text-slate-700">Major / Discipline</label>
                  <input
                    type="text"
                    id="major"
                    defaultValue="Computer Science"
                    className="w-full max-w-md px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex">
              <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
