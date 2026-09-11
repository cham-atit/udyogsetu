export const formatCurrency = (amount) => {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`;
  return `₹${amount.toLocaleString('en-IN')}`;
};

export const getStatusColor = (status) => {
  const colors = {
    completed: '#10b981', approved: '#10b981', active: '#10b981',
    'in-progress': '#3b82f6', pending: '#f59e0b', 'at-risk': '#f59e0b',
    delayed: '#ef4444', overdue: '#ef4444', rejected: '#ef4444',
    'not-started': '#94a3b8', locked: '#64748b',
  };
  return colors[status] || '#94a3b8';
};

export const getDaysRemaining = (dateStr) => {
  const diff = new Date(dateStr) - new Date();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};
