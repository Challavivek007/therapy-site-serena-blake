'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#fdf9f4] text-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-start">
        {/* LEFT: Image + Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <Image
            src="/images/about.jpg"
            alt="Dr. Serena Blake"
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />

          <div className="mt-6 text-sm space-y-2 w-full">
            <p className="text-lg font-semibold text-black">Dr. Serena Blake, PsyD</p>
            <p className="text-gray-700 font-medium">Clinical Psychologist</p>
            <p>📍 <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
            <p>📞 <strong>Phone:</strong> (323) 555-0192</p>
            <p>📧 <strong>Email:</strong> <a href="mailto:serena@blakepsychology.com" className="text-blue-500 underline">serena@blakepsychology.com</a></p>

            <div className="pt-2">
              <p>🕰 <strong>Office Hours:</strong></p>
              <ul className="list-disc ml-5">
                <li>In-person: Tue & Thu, 10 AM–6 PM</li>
                <li>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
              </ul>
            </div>

            <p className="pt-2">🧠 <strong>Experience:</strong> 8 years of practice, 500+ sessions</p>
          </div>
        </div>

        {/* RIGHT: Bio + Services */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-black">About Dr. Blake</h2>
          <p>
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
            with eight years of experience and over 500 client sessions. She blends evidence-based
            approaches—like cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>

          <div>
            <p className="font-semibold">🌟 Services & Specialties:</p>
            <ul className="list-disc ml-5">
              <li>Anxiety & Stress Management</li>
              <li>Relationship Counseling</li>
              <li>Trauma Recovery</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">💵 Session Fees:</p>
            <ul className="list-disc ml-5">
              <li>$200 / individual session</li>
              <li>$240 / couples session</li>
            </ul>
          </div>

          {/* Quote box */}
          <hr className="my-8 border-gray-300" />
          <div className="bg-emerald-50 p-6 rounded-xl shadow-inner">
            <p className="text-gray-700 italic text-lg leading-relaxed">
              “Healing doesn't mean the damage never existed. It means the damage no longer controls your life.”
            </p>
            <p className="text-right mt-4 font-semibold text-emerald-600">– Dr. Serena Blake</p>
          </div>
        </div>
      </div>
    </section>
  );
}
