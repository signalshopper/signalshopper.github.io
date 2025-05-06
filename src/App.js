import React from 'react';
import './App.css';

// Import icons
import { 
  FaArrowRight, 
  FaChartLine, 
  FaRegFileAlt, 
  FaRegClock, 
  FaCheck, 
  FaRegLightbulb, 
  FaRegChartBar, 
  FaRegBuilding, 
  FaUserTie, 
  FaPhone, 
  FaEnvelope 
} from 'react-icons/fa';

function App() {
  return (
    <div className="App bg-dark min-h-screen">
      {/* Navigation */}
      <nav className="py-4 border-b border-gray-800">
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-primary text-2xl">SignalShopper</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#signals" className="text-gray-300 hover:text-white">Signal Types</a>
            <a href="#professionals" className="text-gray-300 hover:text-white">For Professionals</a>
            <a href="#samples" className="text-gray-300 hover:text-white">Signal Samples</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
          </div>
          <div>
            <a href="#contact" className="btn btn-primary">Start Free Trial</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              High-Conviction Trading Signals for RIAs and Serious Traders
            </h1>
            <p className="text-xl text-gray-400 mb-10">
              Institutional-grade market intelligence delivered with precision timing. Actionable signals backed by quantitative models and expert analysis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#pricing" className="btn btn-primary flex items-center justify-center gap-2">
                Start Free Trial <FaArrowRight />
              </a>
              <a href="#samples" className="btn btn-secondary flex items-center justify-center gap-2">
                See Signal Samples <FaRegFileAlt />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Signal Types Section */}
      <section id="signals" className="py-20 border-b border-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Two Powerful Signal Categories</h2>
            <p className="section-subtitle mx-auto">
              Our signals combine the precision of quantitative models with the context of expert analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Quantitative Signals */}
            <div className="bg-dark-lighter p-8 rounded-lg border border-gray-800 hover:border-primary transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                  <FaChartLine className="text-primary text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Quantitative Signals</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Data-driven signals derived from our proprietary algorithms and statistical models. Precision timing with clear entry and exit points.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Multi-factor models with 15+ years of backtested data</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Daily and weekly signals with 70%+ historical accuracy</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Automated delivery via email, SMS, or API integration</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Covers equities, ETFs, options, and futures markets</span>
                </li>
              </ul>
            </div>
            
            {/* Qualitative Signals */}
            <div className="bg-dark-lighter p-8 rounded-lg border border-gray-800 hover:border-primary transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                  <FaRegLightbulb className="text-primary text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Qualitative Signals</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Expert analysis and market insights from our team of seasoned analysts with institutional experience. Context-rich market intelligence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Weekly macro market analysis and sector rotations</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Event-driven opportunities with detailed rationales</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Thematic investment ideas with short to middle term horizons</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Risk management frameworks and position sizing guides (Today's Optional Due Diligence)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Professionals Section */}
      <section id="professionals" className="py-20 border-b border-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Designed for Financial Professionals</h2>
            <p className="section-subtitle mx-auto">
              Tailored solutions for RIAs and serious traders with specific needs and compliance requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* For RIAs */}
            <div className="bg-dark-lighter p-8 rounded-lg border border-gray-800 hover:border-primary transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                  <FaRegBuilding className="text-primary text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">For Registered Investment Advisors</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Institutional-grade signals that integrate with your existing investment process and meet compliance requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Compliance-friendly documentation and audit trails</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Multi-user access with custom permission levels</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>White-labeled reports for client presentations</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>API integration with popular portfolio management systems</span>
                </li>
              </ul>
            </div>
            
            {/* For Traders */}
            <div className="bg-dark-lighter p-8 rounded-lg border border-gray-800 hover:border-primary transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                  <FaUserTie className="text-primary text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">For Serious Traders</h3>
              </div>
              <p className="text-gray-400 mb-6">
                High-conviction trading signals with precise timing and clear risk parameters for active market participants.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Real-time alerts via mobile app, SMS, or email</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Detailed entry, exit, and stop-loss parameters</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Options strategy recommendations for each signal</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Priority access to analyst Q&A sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Live Signal Feed Section */}
      <section id="samples" className="py-20 border-b border-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Recent Signal Examples</h2>
            <p className="section-subtitle mx-auto">
              A sample of our most recent trading signals and their performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Signal 1 */}
            <div className="bg-dark-lighter p-6 rounded-lg border border-gray-800 hover:border-primary transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-xl font-bold text-white">AAPL</span>
                  <span className="ml-2 px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded">BUY</span>
                </div>
                <div className="text-gray-400 flex items-center">
                  <FaRegClock className="mr-1" /> <span className="text-sm">2 days ago</span>
                </div>
              </div>
              <p className="text-gray-400 mb-3 text-sm">
                Technical breakout with increasing volume and positive momentum divergence.
              </p>
              <div className="flex justify-between text-sm">
                <span>Entry: <span className="text-white">$178.25</span></span>
                <span>Target: <span className="text-white">$195.00</span></span>
                <span>Stop: <span className="text-white">$170.50</span></span>
              </div>
            </div>
            
            {/* Signal 2 */}
            <div className="bg-dark-lighter p-6 rounded-lg border border-gray-800 hover:border-primary transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-xl font-bold text-white">MSFT</span>
                  <span className="ml-2 px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded">BUY</span>
                </div>
                <div className="text-gray-400 flex items-center">
                  <FaRegClock className="mr-1" /> <span className="text-sm">1 week ago</span>
                </div>
              </div>
              <p className="text-gray-400 mb-3 text-sm">
                Strong earnings beat with raised guidance and accelerating cloud revenue growth.
              </p>
              <div className="flex justify-between text-sm">
                <span>Entry: <span className="text-white">$332.80</span></span>
                <span>Target: <span className="text-white">$365.00</span></span>
                <span>Stop: <span className="text-white">$320.00</span></span>
              </div>
            </div>
            
            {/* Signal 3 */}
            <div className="bg-dark-lighter p-6 rounded-lg border border-gray-800 hover:border-primary transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-xl font-bold text-white">XLE</span>
                  <span className="ml-2 px-2 py-1 bg-red-900/30 text-red-400 text-xs rounded">SELL</span>
                </div>
                <div className="text-gray-400 flex items-center">
                  <FaRegClock className="mr-1" /> <span className="text-sm">3 days ago</span>
                </div>
              </div>
              <p className="text-gray-400 mb-3 text-sm">
                Bearish divergence on RSI with resistance at key moving averages and declining volume.
              </p>
              <div className="flex justify-between text-sm">
                <span>Entry: <span className="text-white">$87.50</span></span>
                <span>Target: <span className="text-white">$80.00</span></span>
                <span>Stop: <span className="text-white">$90.25</span></span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#pricing" className="btn btn-primary">Access All Signals</a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-b border-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle mx-auto">
              Choose the plan that fits your trading style and investment needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Monthly Plan */}
            <div className="bg-dark-lighter p-8 rounded-lg border border-gray-800 hover:border-primary transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">Monthly</h3>
              <div className="text-primary text-4xl font-bold mb-1">$199</div>
              <p className="text-gray-400 mb-6">per month</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Full access to all signal types</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Real-time alerts via email and SMS</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Weekly market analysis reports</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>7-day free trial</span>
                </li>
              </ul>
              <a href="#contact" className="btn btn-secondary w-full">Start Free Trial</a>
            </div>
            
            {/* Quarterly Plan */}
            <div className="bg-dark-lighter p-8 rounded-lg border border-primary transition-all duration-300 relative">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-medium">POPULAR</div>
              <h3 className="text-2xl font-bold text-white mb-2">Quarterly</h3>
              <div className="text-primary text-4xl font-bold mb-1">$499</div>
              <p className="text-gray-400 mb-6">per quarter <span className="text-green-400">(Save 16%)</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Everything in Monthly plan</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Priority email and phone support</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Monthly strategy consultation</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>14-day free trial</span>
                </li>
              </ul>
              <a href="#contact" className="btn btn-primary w-full">Start Free Trial</a>
            </div>
            
            {/* Annual Plan */}
            <div className="bg-dark-lighter p-8 rounded-lg border border-gray-800 hover:border-primary transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">Annual</h3>
              <div className="text-primary text-4xl font-bold mb-1">$1,799</div>
              <p className="text-gray-400 mb-6">per year <span className="text-green-400">(Save 25%)</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Everything in Quarterly plan</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>API access for automated trading</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>Quarterly performance review</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <span>30-day free trial</span>
                </li>
              </ul>
              <a href="#contact" className="btn btn-secondary w-full">Start Free Trial</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Trusted by Professional Traders</h2>
            <p className="section-subtitle mx-auto">
              Hear what our subscribers say about our signals and service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-dark-lighter p-8 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-medium">Michael R.</h4>
                  <p className="text-gray-400 text-sm">Independent Trader, 3 years subscriber</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The quantitative signals have been a game-changer for my trading strategy. The clear entry and exit points remove emotion from my decision-making process."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-dark-lighter p-8 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-medium">Sarah J.</h4>
                  <p className="text-gray-400 text-sm">RIA Firm Partner, 2 years subscriber</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The compliance documentation that comes with each signal has made it easy to incorporate these recommendations into our client portfolios while meeting regulatory requirements."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-dark-lighter p-8 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-medium">David T.</h4>
                  <p className="text-gray-400 text-sm">Hedge Fund Analyst, 1 year subscriber</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The macro analysis provided alongside the quantitative signals gives me the context I need to understand market movements and adjust my strategy accordingly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-dark-lighter">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">SignalShopper</h3>
              <p className="text-gray-400 mb-6">
                Professional trading signals for RIAs and serious traders. High-conviction market intelligence for better investment decisions.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#signals" className="text-gray-400 hover:text-primary">Signal Types</a></li>
                <li><a href="#professionals" className="text-gray-400 hover:text-primary">For Professionals</a></li>
                <li><a href="#samples" className="text-gray-400 hover:text-primary">Signal Samples</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-primary">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary">Disclaimer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary">Risk Disclosure</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaPhone className="text-primary mt-1 mr-3" />
                  <span className="text-gray-400">(555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-primary mt-1 mr-3" />
                  <span className="text-gray-400">info@signalshopper.com</span>
                </li>
              </ul>
              <div className="mt-8">
                <a href="#" className="btn btn-primary">Book a Demo Call</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} SignalShopper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
