import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about v1a1’s story, principles and team of seasoned debt advisors.',
};

const team = [
  {
    name: 'A. Founder',
    role: 'Managing Partner',
    bio: 'Over 15 years of experience structuring private debt transactions across Europe and the Middle East.',
  },
  {
    name: 'B. Partner',
    role: 'Investment Partner',
    bio: 'Expert in venture debt and revenue‑based financing with a background in investment banking.',
  },
  {
    name: 'C. Director',
    role: 'Director of Portfolio',
    bio: 'Leads portfolio monitoring and risk management, ensuring strong borrower relationships.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display text-white mb-8">About v1a1</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-display text-primary mb-2">Our Story</h2>
            <p className="text-gray-400">
              v1a1 was founded to bridge the gap between high‑growth companies and sophisticated private debt providers. Our principals have advised on billions of dollars of financings and bring together institutional rigour with entrepreneurial agility.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-display text-primary mb-2">Our Principles</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Integrity and discretion: we operate with the highest ethical standards and respect for confidentiality.</li>
              <li>Alignment: our incentives are aligned with founders and investors to create long‑term value.</li>
              <li>Excellence: we obsess over details and deliver best‑in‑class execution on every mandate.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-display text-primary mb-2">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center border border-gray-700 rounded-lg p-6 hover:border-primary transition">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700">
                    {/* Placeholder circle; headshots can be added later */}
                  </div>
                    <h3 className="text-lg font-display text-white">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-gray-400">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
