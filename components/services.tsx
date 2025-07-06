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
              src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZXNzJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D"
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
              src="https://images.unsplash.com/photo-1615028618452-946a763200e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlbGF0aW9uJTIwc2hpcHxlbnwwfHwwfHx8MA%3D%3D"
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
              src="https://images.unsplash.com/photo-1604881991720-f91add269bed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww"
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
