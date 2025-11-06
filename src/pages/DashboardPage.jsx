import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useApp } from '../context/AppContext';
import { getSeasonStats } from '../services/matchService';
import { exportToCSV, exportToPDF } from '../services/exportService';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const { player } = useApp();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (!player) return;
      
      try {
        const seasonStats = await getSeasonStats(player.id, player.season);
        setStats(seasonStats);
      } catch (error) {
        console.error('Failed to load stats:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [player]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-xl text-white">Loading...</div>
      </div>
    );
  }

  if (!stats || stats.totalGames === 0) {
    return (
      <div className="min-h-screen bg-dark-bg">
        <div className="bg-gradient-to-r from-afl-navy via-afl-blue to-afl-blue-light text-white p-4 shadow-2xl">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button onClick={() => navigate('/')} className="text-white hover:text-afl-gold transition-colors">
              ← Home
            </button>
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="w-16"></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto p-4">
          <div className="bg-dark-card border border-dark-border rounded-xl shadow-2xl p-8 text-center">
            <p className="text-gray-400">No matches to display</p>
          </div>
        </div>
      </div>
    );
  }

  // Prepare chart data
  const matches = stats.matches.slice().reverse(); // Chronological order
  const chartData = {
    labels: matches.map((_, index) => `Match ${index + 1}`),
    datasets: [
      {
        label: 'Goals',
        data: matches.map(m => m.stats.goals),
        borderColor: '#2C7A3D',
        backgroundColor: 'rgba(44, 122, 61, 0.3)',
        tension: 0.3,
      },
      {
        label: 'Kicks',
        data: matches.map(m => m.stats.kicks),
        borderColor: '#1E6FBA',
        backgroundColor: 'rgba(30, 111, 186, 0.3)',
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#E5E7EB',
        },
      },
      title: {
        display: true,
        text: 'Performance Trends',
        color: '#E5E7EB',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#9CA3AF',
        },
        grid: {
          color: '#1E3A5F',
        },
      },
      x: {
        ticks: {
          color: '#9CA3AF',
        },
        grid: {
          color: '#1E3A5F',
        },
      },
    },
  };

  const handleExportCSV = () => {
    try {
      exportToCSV(stats.matches, player.name, player.season);
    } catch (error) {
      alert('Failed to export CSV: ' + error.message);
    }
  };

  const handleExportPDF = () => {
    try {
      exportToPDF(stats.matches, player.name, player.teamName, player.season, stats);
    } catch (error) {
      alert('Failed to export PDF: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <div className="bg-gradient-to-r from-afl-navy via-afl-blue to-afl-blue-light text-white p-4 shadow-2xl">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-white hover:text-afl-gold transition-colors"
          >
            ← Home
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Season Overview */}
        <div className="bg-dark-card border border-dark-border rounded-xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Season {player.season}</h2>
          <div className="text-center mb-4">
            <p className="text-gray-400 text-sm">Total Games Played</p>
            <p className="text-5xl font-bold text-afl-gold">{stats.totalGames}</p>
          </div>

          {/* Export Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              onClick={handleExportCSV}
              className="bg-grass-green text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 text-sm shadow-lg"
            >
              📊 Export CSV
            </button>
            <button
              onClick={handleExportPDF}
              className="bg-gradient-to-r from-afl-accent to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-red-600 hover:to-afl-accent transition-all duration-200 text-sm shadow-lg"
            >
              📄 Export PDF
            </button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-dark-card border border-dark-border rounded-xl shadow-2xl p-6 text-center">
            <p className="text-4xl font-bold text-grass-green mb-2">{stats.stats.goals}</p>
            <p className="text-gray-300">Total Goals</p>
            <p className="text-sm text-gray-500 mt-1">Avg: {stats.averages.goals}/game</p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-xl shadow-2xl p-6 text-center">
            <p className="text-4xl font-bold text-white mb-2">{stats.stats.kicks}</p>
            <p className="text-gray-300">Total Kicks</p>
            <p className="text-sm text-gray-500 mt-1">Avg: {stats.averages.kicks}/game</p>
          </div>
        </div>

        {/* All Stats Grid */}
        <div className="bg-dark-card border border-dark-border rounded-xl shadow-2xl p-6">
          <h3 className="text-xl font-bold mb-4 text-white">Season Totals</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center bg-afl-navy/50 rounded-lg p-3">
              <p className="text-2xl font-bold text-white">{stats.stats.handballs}</p>
              <p className="text-sm text-gray-400">Handballs</p>
              <p className="text-xs text-gray-500">Avg: {stats.averages.handballs}</p>
            </div>
            <div className="text-center bg-afl-navy/50 rounded-lg p-3">
              <p className="text-2xl font-bold text-white">{stats.stats.marks}</p>
              <p className="text-sm text-gray-400">Marks</p>
              <p className="text-xs text-gray-500">Avg: {stats.averages.marks}</p>
            </div>
            <div className="text-center bg-afl-navy/50 rounded-lg p-3">
              <p className="text-2xl font-bold text-white">{stats.stats.tackles}</p>
              <p className="text-sm text-gray-400">Tackles</p>
              <p className="text-xs text-gray-500">Avg: {stats.averages.tackles}</p>
            </div>
            <div className="text-center bg-afl-navy/50 rounded-lg p-3">
              <p className="text-2xl font-bold text-white">{stats.stats.spoils}</p>
              <p className="text-sm text-gray-400">Spoils</p>
              <p className="text-xs text-gray-500">Avg: {stats.averages.spoils}</p>
            </div>
            <div className="text-center bg-afl-navy/50 rounded-lg p-3">
              <p className="text-2xl font-bold text-white">{stats.stats.interceptions}</p>
              <p className="text-sm text-gray-400">Interceptions</p>
              <p className="text-xs text-gray-500">Avg: {stats.averages.interceptions}</p>
            </div>
            <div className="text-center bg-afl-navy/50 rounded-lg p-3">
              <p className="text-2xl font-bold text-white">{stats.stats.behinds}</p>
              <p className="text-sm text-gray-400">Behinds</p>
              <p className="text-xs text-gray-500">Avg: {stats.averages.behinds}</p>
            </div>
          </div>
        </div>

        {/* Personal Bests */}
        <div className="bg-dark-card border border-dark-border rounded-xl shadow-2xl p-6">
          <h3 className="text-xl font-bold mb-4 text-white">Personal Bests</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center bg-afl-gold/20 border border-afl-gold/40 p-3 rounded-lg">
              <p className="text-2xl font-bold text-afl-gold">{stats.personalBests.goals}</p>
              <p className="text-sm text-gray-300">Goals</p>
            </div>
            <div className="text-center bg-afl-gold/20 border border-afl-gold/40 p-3 rounded-lg">
              <p className="text-2xl font-bold text-afl-gold">{stats.personalBests.kicks}</p>
              <p className="text-sm text-gray-300">Kicks</p>
            </div>
            <div className="text-center bg-afl-gold/20 border border-afl-gold/40 p-3 rounded-lg">
              <p className="text-2xl font-bold text-afl-gold">{stats.personalBests.marks}</p>
              <p className="text-sm text-gray-300">Marks</p>
            </div>
          </div>
        </div>

        {/* Trend Chart */}
        <div className="bg-dark-card border border-dark-border rounded-xl shadow-2xl p-6">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
