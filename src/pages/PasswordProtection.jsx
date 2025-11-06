import React, { useState } from 'react';

export default function PasswordProtection({ onAuthenticated }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim()) {
      const success = onAuthenticated(password);
      if (!success) {
        setError('Incorrect password. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg px-4">
      <div className="bg-dark-card p-8 rounded-xl shadow-2xl w-full max-w-md border border-dark-border">
        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-afl-blue rounded-full mb-4">
            <svg className="w-12 h-12 text-afl-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Jays Footy Stats
          </h1>
          <p className="text-gray-400 text-sm">Enter password to access your stats</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-3 bg-afl-navy border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-afl-blue-lighter focus:border-transparent"
              placeholder="Enter password"
              autoFocus
            />
          </div>
          {error && (
            <div className="mb-4 text-afl-accent text-sm bg-red-900/20 border border-red-900/50 rounded-lg px-3 py-2">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-afl-blue-light to-afl-blue-lighter text-white font-semibold py-3 px-4 rounded-lg hover:from-afl-blue-lighter hover:to-afl-blue-light transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
