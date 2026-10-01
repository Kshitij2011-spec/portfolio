import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous clean local submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-bg-dark border-t border-border-dark py-16 md:py-24 overflow-hidden text-white"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full opacity-15 pointer-events-none z-0 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, var(--pastel-purple) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-24 relative z-10">
        {/* Left Column: Direct Outreach & Typography */}
        <div className="flex flex-col items-start text-left w-full h-full justify-between">
          <div className="flex flex-col items-start">
            <h2 className="font-body font-black text-[clamp(2.6rem,7vw,4.5rem)] leading-[0.95] text-accent-inv tracking-tight uppercase">
              LET'S BUILD
            </h2>
            <h2 className="font-body font-black text-[clamp(2.6rem,7vw,4.5rem)] leading-[0.95] tracking-tight uppercase outline-text-inv">
              TOGETHER.
            </h2>
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 pt-8 border-t border-[#2c2825] w-full">
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-[1.1rem] sm:text-[1.25rem] text-pastel-yellow border-b border-pastel-yellow/40 hover:border-pastel-yellow transition-colors pb-0.5 break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <span className="font-mono text-[0.72rem] text-emerald-400">
                ✓ Copied to clipboard!
              </span>
            )}

            <div className="flex items-center gap-2 font-mono text-[0.85rem] text-stone-400 mt-2">
              <Phone className="w-3.5 h-3.5 text-stone-500" />
              <span>{PERSONAL_INFO.phone}</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[0.85rem] text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-stone-500" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-12 pt-6 border-t border-[#2c2825] w-full">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[0.88rem] tracking-[0.1em] uppercase text-stone-400 hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="flex flex-col justify-center w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-[rgba(255,255,255,0.07)] border border-white/30 rounded-[8px] px-4 py-3 font-mono text-[0.9rem] text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                your@email.com
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-[rgba(255,255,255,0.07)] border border-white/30 rounded-[8px] px-4 py-3 font-mono text-[0.9rem] text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                What are you building?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="What are you building or discussing?"
                className="w-full bg-[rgba(255,255,255,0.07)] border border-white/30 rounded-[8px] px-4 py-3 font-mono text-[0.9rem] text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full sm:w-auto self-start px-7 py-3 font-mono text-[0.88rem] uppercase tracking-wider text-white border border-white/80 rounded-[8px] hover:bg-white hover:text-black transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            {formSubmitted && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-[8px] text-emerald-300 font-mono text-[0.82rem] mt-2">
                Thank you! Your message has been logged. You can also reach me directly at {PERSONAL_INFO.email}.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
