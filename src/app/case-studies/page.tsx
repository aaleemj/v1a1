import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore anonymised narratives of how v1a1 delivered capital solutions to scale companies.',
};

const cases = [
  {
    id: 1,
    title: 'Extending Runway for a SaaS Scale‑Up',
    problem: 'A Series B SaaS company with strong ARR growth needed $20m to extend runway and accelerate product development without equity dilution.',
    solution: 'v1a1 structured a venture debt facility with a 36‑month tenor, interest‑only period and limited warrants, preserving founder ownership.',
    outcome: 'The company extended its runway by 18 months, doubled ARR and later raised an upround with improved valuation.',
  },
  {
    id: 2,
    title: 'Aligning Payments with Revenue Cycles',
    problem: 'A consumer subscription business experienced seasonal cash flow volatility and sought non‑dilutive capital to smooth operations.',
    solution: 'We arranged a $7m revenue‑based financing facility tied to monthly recurring revenue, allowing repayments to flex with seasonality.',
    outcome: 'Working capital strains were eliminated and marketing spend increased 40%, leading to record subscriber growth.',
  },
  {
    id: 3,
    title: 'Funding a Strategic Acquisition',
    problem: 'An established marketplace identified a strategic tuck‑in acquisition but lacked available cash to execute quickly.',
    solution: 'v1a1 orchestrated a $35m mezzanine facility alongside senior debt to finance the acquisition with minimal covenant constraints.',
    outcome: 'The acquisition closed within six weeks, expanding market share and increasing EBITDA by 60% within the first year.',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-dark py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display text-white mb-8">Case Studies</h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          The following anonymised case studies illustrate how our tailored debt structures solve real capital challenges and drive growth.
        </p>
        <div className="space-y-12">
          {cases.map((c) => (
            <div key={c.id} className="border border-gray-700 p-6 rounded-lg hover:border-primary transition">
              <h2 className="text-2xl font-display text-primary mb-2">{c.title}</h2>
              <h3 className="text-lg font-semibold text-white mb-1">Problem</h3>
              <p className="text-gray-400 mb-3">{c.problem}</p>
              <h3 className="text-lg font-semibold text-white mb-1">Solution</h3>
              <p className="text-gray-400 mb-3">{c.solution}</p>
              <h3 className="text-lg font-semibold text-white mb-1">Outcome</h3>
              <p className="text-gray-400">{c.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
