// src/components/Dashboardcompnenet/MyDeals.jsx

import React, { useEffect, useState } from 'react';
import { FaChartLine, FaCheckCircle, FaHandshake } from 'react-icons/fa';

const MyDeals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      // Simulated deal data (replace with real API later)
      const dummyDeals = [
        {
          id: 1,
          startup: 'TechNova',
          amountInvested: '$50,000',
          status: 'Closed',
          roi: '18%',
        },
        {
          id: 2,
          startup: 'EcoGrow',
          amountInvested: '$75,000',
          status: 'Ongoing',
          roi: '12%',
        },
      ];
      setDeals(dummyDeals);
    };

    fetchDeals();
  }, []);

  const totalInvestment = deals.reduce((total, deal) => {
    const amount = parseInt(deal.amountInvested.replace(/[$,]/g, ''), 10);
    return total + amount;
  }, 0);

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6">📊 My Deals</h2>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-700 p-4 rounded-lg shadow">
          <FaChartLine className="text-blue-400 text-3xl mb-2" />
          <p className="text-lg">Total Investment</p>
          <p className="text-2xl font-bold">${totalInvestment.toLocaleString()}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow">
          <FaCheckCircle className="text-green-400 text-3xl mb-2" />
          <p className="text-lg">Closed Deals</p>
          <p className="text-2xl font-bold">{deals.filter(d => d.status === 'Closed').length}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow">
          <FaHandshake className="text-yellow-400 text-3xl mb-2" />
          <p className="text-lg">Ongoing Deals</p>
          <p className="text-2xl font-bold">{deals.filter(d => d.status === 'Ongoing').length}</p>
        </div>
      </div>

      {/* Deals Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white rounded-lg">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-2 px-4 text-left">Startup</th>
              <th className="py-2 px-4 text-left">Amount Invested</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">ROI</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr key={deal.id} className="border-b border-gray-600 hover:bg-gray-700">
                <td className="py-2 px-4">{deal.startup}</td>
                <td className="py-2 px-4">{deal.amountInvested}</td>
                <td className="py-2 px-4">{deal.status}</td>
                <td className="py-2 px-4">{deal.roi}</td>
              </tr>
            ))}
            {deals.length === 0 && (
              <tr>
                <td colSpan="4" className="py-4 text-center text-gray-400">
                  No deals found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDeals;
