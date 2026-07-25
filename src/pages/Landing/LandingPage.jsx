import { Link } from 'react-router-dom';
import { HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineChartBar, HiOutlineLightningBolt } from 'react-icons/hi';
import { APP_NAME, APP_TAGLINE, ROUTES } from '../../utils/constants';
import { Button } from '../../components/ui';

/**
 * LandingPage — Public homepage showcasing SubSense AI features.
 * Entry point for unauthenticated users.
 */
const LandingPage = () => {
  const features = [
    {
      icon: HiOutlineSparkles,
      title: 'AI-Powered Insights',
      description: 'Get intelligent analysis of your spending patterns and subscription usage.',
    },
    {
      icon: HiOutlineShieldCheck,
      title: 'Subscription Tracking',
      description: 'Never miss a renewal. Track all your subscriptions in one place.',
    },
    {
      icon: HiOutlineChartBar,
      title: 'Expense Analytics',
      description: 'Visualize your expenses with beautiful, interactive charts.',
    },
    {
      icon: HiOutlineLightningBolt,
      title: 'Smart Alerts',
      description: 'Get notified about upcoming bills, price changes, and savings opportunities.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <HiOutlineSparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Finance</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Your Smart
              <span className="gradient-text block">Financial Copilot</span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl">
              {APP_NAME} helps you manage subscriptions, track expenses, and make smarter
              financial decisions — all powered by AI.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to={ROUTES.SIGNUP}>
                <Button size="lg" variant="primary">
                  Get Started Free
                </Button>
              </Link>
              <Link to={ROUTES.LOGIN}>
                <Button size="lg" variant="outline">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Everything you need to
            <span className="gradient-text"> take control</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Powerful features designed to simplify your financial life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">{feature.title}</h3>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 text-center gradient-primary rounded-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to take control of your finances?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Join thousands of users who are already saving money with {APP_NAME}.
          </p>
          <div className="mt-8">
            <Link to={ROUTES.SIGNUP}>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Start for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
