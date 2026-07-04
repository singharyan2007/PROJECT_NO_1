import { useEffect, useState } from 'react';

const features = [
  { icon: 'AI', title: 'Predictive threat detection', text: 'Neural models identify suspicious behavior before it becomes a breach.' },
  { icon: 'RT', title: 'Continuous monitoring', text: 'Track endpoints, cloud workloads, and network traffic from one control plane.' },
  { icon: 'FW', title: 'Adaptive firewall', text: 'Auto-tune rules based on emerging risks and known attack patterns.' },
  { icon: 'UX', title: 'Executive insights', text: 'Deliver readable summaries for leadership and operations teams alike.' },
];

const workflow = [
  'Connect devices and services in minutes.',
  'Let AI scan for anomalies around the clock.',
  'Respond automatically with playbooks and quarantines.',
  'Review trends and improve readiness daily.',
];

const plans = [
  { name: 'Starter', price: '$29', description: 'For founders and startups', perks: ['1 workspace', 'Live dashboards', 'Email alerts'] },
  { name: 'Growth', price: '$99', description: 'For scaling security teams', perks: ['Unlimited devices', 'Custom playbooks', 'Priority support'], featured: true },
  { name: 'Enterprise', price: 'Custom', description: 'For large organizations', perks: ['SSO + audit logs', 'Dedicated success manager', 'On-prem options'] },
];

const monthlyTrend = [42, 58, 49, 74, 68, 92];
const riskBreakdown = [78, 60, 92, 45];

function LineChart() {
  const points = monthlyTrend
    .map((value, index) => {
      const x = 24 + index * 54;
      const y = 120 - value * 0.9;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg viewBox="0 0 320 140" className="chart-svg" role="img" aria-label="Monthly threat trend chart">
      <line x1="20" y1="120" x2="300" y2="120" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <line x1="20" y1="70" x2="300" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <polyline fill="none" stroke="#2fd7ff" strokeWidth="4" points={points} />
      {monthlyTrend.map((value, index) => {
        const x = 24 + index * 54;
        const y = 120 - value * 0.9;
        return <circle key={index} cx={x} cy={y} r="5" fill="#ffffff" />;
      })}
    </svg>
  );
}

function BarChart() {
  return (
    <div className="bar-chart" role="img" aria-label="Risk breakdown chart">
      {riskBreakdown.map((value, index) => (
        <div key={index} className="bar-group">
          <div className="bar-track">
            <div className="bar-fill" style={{ height: `${value}%` }} />
          </div>
          <span>{['Email', 'Cloud', 'Web', 'Endpoints'][index]}</span>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setNavOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <div className="logo"><span className="logo-mark">C</span></div>
          <div>
            <span className="brand-name">Cyber</span>
            <span className="brand-highlight">Clipper</span>
          </div>
        </div>
        <button className="menu-button" aria-label="Open menu" onClick={() => setNavOpen(true)}>
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`nav-panel ${navOpen ? 'open' : ''}`} aria-hidden={!navOpen}>
        <button className="nav-close" aria-label="Close menu" onClick={() => setNavOpen(false)}>×</button>
        <nav className="nav-links">
          <a href="#home" onClick={() => setNavOpen(false)}>Home</a>
          <a href="#features" onClick={() => setNavOpen(false)}>Features</a>
          <a href="#analytics" onClick={() => setNavOpen(false)}>Analytics</a>
          <a href="#pricing" onClick={() => setNavOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
        </nav>
        <div className="nav-actions">
          <button className="btn-secondary">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </div>

      <main className="content">
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <span className="eyebrow">AI-powered defense / v3.14</span>
            <h1>Next-gen security with <span>live intelligence</span></h1>
            <p>Centralize monitoring, automate incident response, and see your attack surface clearly with one intelligent dashboard.</p>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">Start free trial</a>
              <a href="#analytics" className="button button-secondary">View analytics</a>
            </div>
            <div className="hero-metrics">
              <div><strong>99.99%</strong><span>uptime SLA</span></div>
              <div><strong>&lt;45ms</strong><span>threat response</span></div>
              <div><strong>24/7</strong><span>human + AI coverage</span></div>
            </div>
          </div>

          <div className="hero-dashboard">
            <div className="dashboard-card dashboard-card-large">
              <div className="dashboard-header">
                <span>Threat dashboard</span>
                <span className="status-pill">Live</span>
              </div>
              <h2>All systems secure</h2>
              <div className="dashboard-stats">
                <div><span>Blocked</span><strong>5.1K</strong></div>
                <div><span>Risk</span><strong>6.8</strong></div>
                <div><span>Nodes</span><strong>18K</strong></div>
              </div>
              <LineChart />
            </div>

            <div className="dashboard-grid">
              <div className="dashboard-card">
                <span className="card-tag">Automation</span>
                <h3>Response playbooks</h3>
                <div className="card-progress">
                  <span>Coverage</span>
                  <strong>95%</strong>
                </div>
                <div className="progress-bar"><span style={{ width: '95%' }} /></div>
              </div>
              <div className="dashboard-card">
                <span className="card-tag">Map</span>
                <h3>Threat landscape</h3>
                <div className="network-graphic" />
              </div>
            </div>
            <div className="badge-floating">Built for modern teams</div>
          </div>
        </section>

        <section className="feature-section" id="features">
          <div className="section-header">
            <span className="section-label">Core capabilities</span>
            <h2>Security operations that feel effortless.</h2>
            <p>Bring analytics, automation, and visibility together in one streamlined view.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="analytics-section" id="analytics">
          <div className="section-header section-header-center">
            <span className="section-label">Analytics</span>
            <h2>See trends before they become incidents.</h2>
          </div>
          <div className="analytics-grid">
            <div className="dashboard-card analytics-card">
              <div className="dashboard-header">
                <span>Threat trend</span>
                <span className="status-pill">Rising</span>
              </div>
              <LineChart />
            </div>
            <div className="dashboard-card analytics-card">
              <div className="dashboard-header">
                <span>Risk breakdown</span>
                <span className="status-pill alt">Balanced</span>
              </div>
              <BarChart />
            </div>
          </div>
        </section>

        <section className="workflow-section">
          <div className="section-header section-header-center">
            <span className="section-label">Workflow</span>
            <h2>From onboarding to protection in four steps.</h2>
          </div>
          <div className="workflow-timeline">
            {workflow.map((step, index) => (
              <div className="workflow-step" key={step}>
                <span className="step-number">Step 0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-header section-header-center">
            <span className="section-label">Pricing</span>
            <h2>Flexible plans for every stage.</h2>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                <h3>{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">{plan.price}</div>
                <ul>
                  {plan.perks.map((perk) => <li key={perk}>{perk}</li>)}
                </ul>
                <button className="btn-primary plan-button">Choose plan</button>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-card">
            <h2>Ready to strengthen your security stack?</h2>
            <p>Book a guided demo and see your live threat posture in minutes.</p>
            <a href="mailto:team@cyberclipper.io" className="button button-primary">Request a demo</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
