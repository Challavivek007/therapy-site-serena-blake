'use client';

import Image from 'next/image';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#f0f4f8] text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Services & Specialties Offered</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-transparent hover:border-black hover:scale-105 transition-all duration-300">
            <Image
              src="/images/anxiety.jpg"
              alt="Anxiety & Stress Management"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-black mb-2">Anxiety & Stress Management</h3>
            <p className="text-gray-700">
              Learn to manage overwhelming thoughts, reduce stress, and build healthy coping
              mechanisms using evidence-based techniques like CBT and mindfulness.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-transparent hover:border-black hover:scale-105 transition-all duration-300">
            <Image
              src="/images/relationship.jpg"
              alt="Relationship Counseling"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-black mb-2">Relationship Counseling</h3>
            <p className="text-gray-700">
              Improve communication, rebuild trust, and strengthen your relationships whether you
              are navigating conflict or growing closer as a couple.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-transparent hover:border-black hover:scale-105 transition-all duration-300">
            <Image
              src="/images/trauma.jpg"
              alt="Trauma Recovery"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-black mb-2">Trauma Recovery</h3>
            <p className="text-gray-700">
              Heal from emotional wounds, PTSD, or difficult life events through trauma-informed
              care in a safe, supportive environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
