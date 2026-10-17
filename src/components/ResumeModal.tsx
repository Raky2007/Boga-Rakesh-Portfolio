import React, { useEffect } from 'react';
import { X, Printer, Mail, ExternalLink, Phone } from 'lucide-react';
import { contactInfo } from '../data/socialLinks';
import { Button } from './Button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#142A23]/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl shadow-2xl p-6 sm:p-10 text-[#183D32]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-[#D9DCD2] pb-4 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#183D32]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#536259]">
              CURRICULUM VITAE // AUTHORITATIVE RESUME
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="secondary" size="sm" onClick={handlePrint} icon={<Printer size={14} />}>
              Print / Save PDF
            </Button>
            <button
              onClick={onClose}
              aria-label="Close resume"
              className="p-1.5 text-[#536259] hover:text-[#183D32] hover:bg-[#EFEEE6] rounded-lg transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-6">
          {/* Header */}
          <div className="border-b border-[#D9DCD2] pb-5 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 id="resume-title" className="font-serif text-3xl sm:text-4xl text-[#183D32] font-semibold">
                  BOGA RAKESH
                </h1>
                <p className="font-interface text-sm font-medium text-[#285443] mt-1">
                  Balanagar, Hyderabad, Telangana
                </p>
              </div>

              <div className="flex flex-col sm:items-end font-mono text-xs text-[#536259] space-y-1">
                <span className="flex items-center gap-1.5">
                  <Phone size={12} className="text-[#183D32]" /> {contactInfo.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={12} className="text-[#183D32]" /> {contactInfo.email}
                </span>
                <div className="flex items-center gap-3">
                  <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#183D32] hover:underline flex items-center gap-1">
                    LinkedIn <ExternalLink size={11} />
                  </a>
                  <span className="text-[#D9DCD2]">·</span>
                  <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#183D32] hover:underline flex items-center gap-1">
                    GitHub <ExternalLink size={11} />
                  </a>
                  <span className="text-[#D9DCD2]">·</span>
                  <a href={contactInfo.portfolio} target="_blank" rel="noopener noreferrer" className="text-[#183D32] hover:underline flex items-center gap-1">
                    Portfolio <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#183D32] font-semibold border-b border-[#D9DCD2] pb-1.5 mb-3">
              EDUCATION
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <h4 className="font-semibold text-sm text-[#183D32]">
                  St. Peter's Engineering College, Hyderabad
                </h4>
                <p className="text-xs text-[#536259] mt-0.5 font-medium">
                  B.Tech in Computer Science and Engineering (AI &amp; ML) | CGPA: 7.2/10
                </p>
              </div>
              <span className="font-mono text-xs text-[#788078] shrink-0 mt-1 sm:mt-0">Graduation — May 2028</span>
            </div>
            <p className="text-xs text-[#536259] mt-1.5 font-mono">
              <span className="font-semibold text-[#183D32]">Relevant Coursework:</span> Data Structures &amp; Algorithms, Operating Systems, DBMS, Computer Networks, OOP
            </p>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#183D32] font-semibold border-b border-[#D9DCD2] pb-1.5 mb-3">
              EXPERIENCE
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h4 className="font-semibold text-sm text-[#183D32]">
                    Ni-MSME — AI &amp; ML Jr Telecom Data Analyst
                  </h4>
                  <span className="font-mono text-xs text-[#788078]">Oct 2025 — Feb 2026</span>
                </div>
                <p className="text-[11px] font-mono text-[#788078] italic">On-site / Yousufguda neighborhood of Hyderabad</p>
                <ul className="mt-1.5 space-y-1 text-xs text-[#536259]">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#183D32] font-bold">·</span>
                    <span><strong>Data Preparation:</strong> Cleaned, formatted, and labelled raw telecom logs and usage data.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#183D32] font-bold">·</span>
                    <span>Used Python, Pandas, NumPy, and Google Colab for data pipelines.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#183D32] font-bold">·</span>
                    <span>Analysed historical financial datasets and built machine learning models in Google Colab to predict stock price movements based on technical indicators.</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h4 className="font-semibold text-sm text-[#183D32]">
                    Front End Development Intern
                  </h4>
                  <span className="font-mono text-xs text-[#788078]">Jun 2025 — Jul 2025</span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs text-[#536259]">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#183D32] font-bold">·</span>
                    <span>Leveraged HTML, CSS, and JavaScript to design and deploy key user interfaces for a small-scale web application.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#183D32] font-bold">·</span>
                    <span>Expanded foundational knowledge by 50% across HTML, CSS, JavaScript, and React ecosystems.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#183D32] font-semibold border-b border-[#D9DCD2] pb-1.5 mb-3">
              PROJECTS
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h4 className="font-semibold text-sm text-[#183D32]">
                    FlashMind | Tech Stack (Python, React, TypeScript)
                  </h4>
                  <span className="font-mono text-xs text-[#788078]">Feb 2026</span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs text-[#536259]">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#183D32] font-bold">·</span>
                    <span>Built a full-stack AI learning platform using React, TypeScript, Ant Design, and FastAPI that converts PDFs, images, text, and voice notes into flashcards, quizzes, and progress dashboards.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#183D32] font-bold">·</span>
                    <span>Powered by Ollama, enabling local LLM-based flashcard generation, quiz creation, and explanations without paid external APIs.</span>
                  </li>
                  <li className="flex items-start gap-1.5 font-mono text-[11px] text-[#183D32]">
                    <span className="text-[#788078]">Link:</span> <a href="https://github.com/Raky2007/FlashMind" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/Raky2007/FlashMind</a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h4 className="font-semibold text-sm text-[#183D32]">
                    VariFact AI | Tech Stack (React, Node.js, Express, TypeScript, Gemini API)
                  </h4>
                  <span className="font-mono text-xs text-[#788078]">March 2026</span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs text-[#536259]">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#183D32] font-bold">·</span>
                    <span>Built a conversational data analytics dashboard that lets users upload CSV/XLSX files, preview dataset schema, switch between datasets, and ask questions in plain English to get instant insights.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#183D32] font-bold">·</span>
                    <span>Integrated Gemini-powered analysis that improved insight generation speed by 50%, converting natural-language prompts into chart, table, and text outputs with automatic Recharts visualization and CSV export.</span>
                  </li>
                  <li className="flex items-start gap-1.5 font-mono text-[11px] text-[#183D32]">
                    <span className="text-[#788078]">Link:</span> <a href="https://github.com/Raky2007/GeeksForGeeks-dataset-project" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/Raky2007/GeeksForGeeks-dataset-project</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#183D32] font-semibold border-b border-[#D9DCD2] pb-1.5 mb-3">
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-[#183D32]">Languages:</span>{' '}
                <span className="text-[#536259]">Java, Python, JavaScript, C, MySQL, HTML, CSS</span>
              </div>
              <div>
                <span className="font-semibold text-[#183D32]">Frameworks/Libraries:</span>{' '}
                <span className="text-[#536259]">React, Tailwind CSS, Spring Boot (basics)</span>
              </div>
              <div>
                <span className="font-semibold text-[#183D32]">Tools/Platforms:</span>{' '}
                <span className="text-[#536259]">Git/GitHub, VS Code, IntelliJ IDEA</span>
              </div>
              <div>
                <span className="font-semibold text-[#183D32]">Concepts:</span>{' '}
                <span className="text-[#536259]">Data Structures &amp; Algorithms, OOP, Computer networks (basics)</span>
              </div>
            </div>
          </div>

          {/* ACHIEVEMENTS & EXTRACURRICULAR */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#183D32] font-semibold border-b border-[#D9DCD2] pb-1.5 mb-3">
              ACHIEVEMENTS &amp; EXTRACURRICULAR
            </h3>
            <ul className="space-y-1.5 text-xs text-[#536259]">
              <li className="flex items-start gap-2">
                <span className="text-[#183D32] font-bold">·</span>
                <span><strong>Won 1st Place at the GeeksforGeeks hackathon</strong>, built an AI-powered data dashboard in 3 hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#183D32] font-bold">·</span>
                <span><strong>Microsoft Certified:</strong> Foundations of Generative AI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#183D32] font-bold">·</span>
                <span>Led and managed a technical event for <strong>700+ participants</strong>, independently maintaining the central operational dashboard to monitor registrations.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal footer */}
        <div className="mt-8 pt-4 border-t border-[#D9DCD2] flex items-center justify-between print:hidden">
          <span className="font-mono text-[11px] text-[#788078]">
            Authoritative source: Boga_Rakesh_Resume(1).pdf
          </span>
          <Button variant="primary" size="sm" onClick={onClose}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};
