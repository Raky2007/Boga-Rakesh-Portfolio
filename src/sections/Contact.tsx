import React, { useState } from 'react';
import { contactInfo } from '../data/socialLinks';
import { Copy, Check, FileText, Send, ArrowUpRight, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/Icons';


interface ContactProps {
  onResumeClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onResumeClick }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [messageSubject, setMessageSubject] = useState<string>('');
  const [messageBody, setMessageBody] = useState<string>('');
  const [feedback, setFeedback] = useState<string | null>(null);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLaunchEmailClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageBody.trim()) {
      setFeedback('Please write a short note before sending.');
      return;
    }

    const subject = encodeURIComponent(messageSubject.trim() || 'Software Engineering Inquiry');
    const body = encodeURIComponent(messageBody.trim());
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setFeedback('Opening your email client with pre-filled details...');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#142A23] text-[#F7F6F0] relative overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-subtle" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#C7F36B] uppercase">
            07 / CONTACT
          </span>
          <div className="h-[1px] w-12 bg-[#285443]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline and Direct Channels */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#F7F6F0] leading-[1.1]">
              Have an interesting problem?{' '}
              <span className="italic font-serif text-[#C7F36B]">Let's build something.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#D9DCD2]/90 leading-relaxed max-w-xl font-interface">
              Always interested in meaningful projects, new ideas, engineering internships, and opportunities to build useful things. Reach out directly or send a message below.
            </p>

            {/* Direct Email Card with 1-Click Copy */}
            <div className="mt-10 p-6 rounded-2xl bg-[#18332B] border border-[#285443] max-w-xl">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C7F36B] block mb-2">
                DIRECT INBOX
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-mono text-sm sm:text-base font-semibold text-[#F7F6F0] hover:text-[#C7F36B] transition-colors break-all"
                >
                  {contactInfo.email}
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmailToClipboard}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#285443] hover:bg-[#346b56] text-[#F7F6F0] border border-[#285443] transition-all cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-[#C7F36B]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#C7F36B] text-[#183D32] hover:bg-[#bcf054] font-semibold transition-all"
                  >
                    <span>Send Mail</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Channels & Location */}
            <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-xs text-[#D9DCD2]">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 hover:text-[#C7F36B] transition-colors"
              >
                <Phone size={15} />
                <span>{contactInfo.phone}</span>
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C7F36B] transition-colors"
              >
                <GithubIcon size={15} />
                <span>github.com/{contactInfo.githubUsername}</span>
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C7F36B] transition-colors"
              >
                <LinkedinIcon size={15} />
                <span>linkedin.com/in/{contactInfo.linkedinUsername}</span>
              </a>

              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C7F36B] transition-colors"
              >
                <InstagramIcon size={15} />
                <span>instagram.com/{contactInfo.instagramUsername}</span>
              </a>


              <button
                onClick={onResumeClick}
                className="flex items-center gap-2 text-[#C7F36B] hover:underline cursor-pointer"
              >
                <FileText size={15} />
                <span>Curriculum Vitae</span>
              </button>
            </div>
          </div>

          {/* Right Column: Transparent Email Dispatcher (Real Mailto Compose) */}
          <div className="lg:col-span-5 bg-[#18332B] border border-[#285443] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#285443]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C7F36B] font-semibold">
                SEND A MESSAGE
              </span>
              <span className="font-mono text-[10px] text-[#D9DCD2]/60">ZERO SILENT FAILS</span>
            </div>

            <form onSubmit={handleLaunchEmailClient} className="space-y-4 font-interface">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#D9DCD2] mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={messageSubject}
                  onChange={(e) => setMessageSubject(e.target.value)}
                  placeholder="e.g. Engineering Internship / Project Collab"
                  className="w-full h-11 px-3.5 bg-[#142A23] border border-[#285443] rounded-lg text-sm text-[#F7F6F0] placeholder-[#788078] focus:outline-none focus:border-[#C7F36B] transition-all font-interface"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#D9DCD2] mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  placeholder="Hi Rakesh, I came across your portfolio and wanted to discuss..."
                  required
                  className="w-full p-3.5 bg-[#142A23] border border-[#285443] rounded-lg text-sm text-[#F7F6F0] placeholder-[#788078] focus:outline-none focus:border-[#C7F36B] transition-all resize-none font-interface"
                />
              </div>

              {feedback && (
                <div className="p-2.5 rounded bg-[#142A23] border border-[#285443] text-xs font-mono text-[#C7F36B]">
                  {feedback}
                </div>
              )}

              <button
                type="submit"
                className="w-full h-11 bg-[#C7F36B] hover:bg-[#bcf054] active:bg-[#aee642] text-[#183D32] font-semibold text-sm rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <Send size={15} />
                <span>Open in Mail Client</span>
              </button>

              <p className="font-mono text-[10px] text-[#D9DCD2]/60 text-center leading-normal">
                Directly triggers your configured mail application with pre-filled content to ensure guaranteed delivery.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
