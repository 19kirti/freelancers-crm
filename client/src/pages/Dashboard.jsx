import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  // In a real app, these would come from API calls
  const [stats, setStats] = useState({
    totalClients: 0,
    activeProjects: 0,
    pendingTasks: 0,
    unpaidInvoices: 0
  });
  
  const [recentClients, setRecentClients] = useState([]);
  const [upcomingDeadlines, setUpcomingDeadlines] = useState([]);

  // Simulate API calls with mock data
  useEffect(() => {
    // In a real app, replace with actual API calls
    setTimeout(() => {
      setStats({
        totalClients: 12,
        activeProjects: 5,
        pendingTasks: 18,
        unpaidInvoices: 3
      });
      
      setRecentClients([
        { id: '1', name: 'Acme Corp', email: 'contact@acmecorp.com', status: 'active', createdAt: '2023-10-15' },
        { id: '2', name: 'TechStart Inc', email: 'info@techstart.com', status: 'active', createdAt: '2023-10-10' },
        { id: '3', name: 'Global Solutions', email: 'hello@globalsolutions.com', status: 'lead', createdAt: '2023-10-05' }
      ]);
      
      setUpcomingDeadlines([
        { id: '1', title: 'Website Redesign', client: 'Acme Corp', deadline: '2023-11-15', status: 'in progress' },
        { id: '2', title: 'Mobile App Development', client: 'TechStart Inc', deadline: '2023-11-30', status: 'in progress' },
        { id: '3', title: 'SEO Optimization', client: 'Global Solutions', deadline: '2023-11-10', status: 'planned' }
      ]);
    }, 500);
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-blue-500">
          <div className="flex justify-between">
            <div>
              <div className="text-gray-500 text-sm">Total Clients</div>
              <div className="text-2xl font-bold text-gray-900">{stats.totalClients}</div>
            </div>
            <div className="bg-blue-100 p-2 rounded-full">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
          </div>
          <div className="mt-2">
            <Link to="/clients" className="text-sm text-blue-600 hover:underline">View all clients</Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-green-500">
          <div className="flex justify-between">
            <div>
              <div className="text-gray-500 text-sm">Active Projects</div>
              <div className="text-2xl font-bold text-gray-900">{stats.activeProjects}</div>
            </div>
            <div className="bg-green-100 p-2 rounded-full">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
              </svg>
            </div>
          </div>
          <div className="mt-2">
            <Link to="/projects" className="text-sm text-blue-600 hover:underline">View all projects</Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-yellow-500">
          <div className="flex justify-between">
            <div>
              <div className="text-gray-500 text-sm">Pending Tasks</div>
              <div className="text-2xl font-bold text-gray-900">{stats.pendingTasks}</div>
            </div>
            <div className="bg-yellow-100 p-2 rounded-full">
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
          <div className="mt-2">
            <Link to="/tasks" className="text-sm text-blue-600 hover:underline">View all tasks</Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-red-500">
          <div className="flex justify-between">
            <div>
              <div className="text-gray-500 text-sm">Unpaid Invoices</div>
              <div className="text-2xl font-bold text-gray-900">{stats.unpaidInvoices}</div>
            </div>
            <div className="bg-red-100 p-2 rounded-full">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
          <div className="mt-2">
            <Link to="/invoices" className="text-sm text-blue-600 hover:underline">View all invoices</Link>
          </div>
        </div>
      </div>
      
      {/* Recent Clients */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-5 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Recent Clients</h3>
        </div>
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Added</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentClients.map(client => (
                  <tr key={client.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link to={`/clients/${client.id}`} className="text-blue-600 hover:underline">{client.name}</Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${client.status === 'active' ? 'bg-green-100 text-green-800' : 
                          client.status === 'inactive' ? 'bg-gray-100 text-gray-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Upcoming Deadlines */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-5 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Upcoming Deadlines</h3>
        </div>
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {upcomingDeadlines.map(project => (
                  <tr key={project.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link to={`/projects/${project.id}`} className="text-blue-600 hover:underline">{project.title}</Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.client}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.deadline}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${project.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          project.status === 'in progress' ? 'bg-blue-100 text-blue-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;