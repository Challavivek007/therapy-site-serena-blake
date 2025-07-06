'use client';

import { useState } from 'react';

export default function contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    time: '',
    agree: false,
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors: any = {};
    if (!form.name) newErrors.name = 'Name is required.';
    if (!form.phone) newErrors.phone = 'Phone is required.';
    if (!form.email) newErrors.email = 'Email is required.';
    if (!form.message) newErrors.message = 'Please describe what brings you here.';
    if (!form.time) newErrors.time = 'Preferred time is required.';
    if (!form.agree) newErrors.agree = 'You must agree to be contacted.';
    return newErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully! ✅');
      setForm({
        name: '',
        phone: '',
        email: '',
        message: '',
        time: '',
        agree: false,
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f9f9ff] text-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">Contact Dr. Serena Blake</h2>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
          <div>
            <label className="block font-medium mb-1">Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Phone *</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">What brings you here? *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded-lg px-4 py-2"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Preferred time to reach you *</label>
            <input
              type="text"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="agree" className="text-sm">
              I agree to be contacted *
            </label>
          </div>
          {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
