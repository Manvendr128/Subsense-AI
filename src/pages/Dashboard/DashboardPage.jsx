import { HiOutlineCurrencyDollar, HiOutlineCreditCard, HiOutlineTrendingUp, HiOutlineBell } from 'react-icons/hi';
import { Card } from '../../components/ui';

/**
 * DashboardPage — Main overview page for authenticated users.
 * Shows summary cards and placeholder charts.
 */
const DashboardPage = () => {
  const stats = [
    { label: 'Total Spending', value: '$2,450.00', icon: HiOutlineCurrencyDollar, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Active Subscriptions', value: '12', icon: HiOutlineCreditCard, color: 'text-success', bg: 'bg-success/10' },
    { label: 'Monthly Savings', value: '$340.00', icon: HiOutlineTrendingUp, color: 'text-warning', bg: 'bg-warning/10' },
    { label: 'Pending Alerts', value: '3', icon: HiOutlineBell, color: 'text-danger', bg: 'bg-danger/10' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">Dashboard</h1>
        <p className="mt-1 text-text-secondary">Welcome back! Here's your financial overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} hover>
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg}`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                  <p className="text-xl font-bold text-text-primary">{stat.value}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Chart Placeholder */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <Card.Header>
            <Card.Title>Spending Overview</Card.Title>
          </Card.Header>
          <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border">
            <p className="text-text-muted">📊 Chart will be rendered here with Recharts</p>
          </div>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Subscription Breakdown</Card.Title>
          </Card.Header>
          <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border">
            <p className="text-text-muted">🥧 Pie chart will be rendered here with Recharts</p>
          </div>
        </Card>
      </div>

      {/* Recent Activity Placeholder */}
      <Card>
        <Card.Header>
          <Card.Title>Recent Activity</Card.Title>
        </Card.Header>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-lg bg-surface/50 p-3"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Transaction #{item}</p>
                  <p className="text-xs text-text-muted">Placeholder transaction data</p>
                </div>
              </div>
              <span className="text-sm font-medium text-text-secondary">-$XX.XX</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
