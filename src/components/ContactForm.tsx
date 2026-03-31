"use client";

import { useState } from "react";

export default function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xbdpybjg";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
    consent: false,
    _gotcha: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const name = target.name;
    const value = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form._gotcha) return;

    setStatus("loading");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          _replyto: form.email,
          phone: form.phone,
          service: form.service,
          address: form.address,
          message: form.message,
          consent: form.consent ? "yes" : "no",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          address: "",
          message: "",
          consent: false,
          _gotcha: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-brand-light rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-heading text-2xl font-bold text-brand-dark mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We received your request and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <input
        name="_gotcha"
        value={form._gotcha}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Name *
          </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email *
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Phone
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
            placeholder="(509) 555-0101"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Service Needed
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
          >
            <option value="">Select a service...</option>
            <option>Lawn Care</option>
            <option>Landscape Design</option>
            <option>Hardscaping</option>
            <option>Irrigation</option>
            <option>Snow Removal</option>
            <option>Tree & Shrub Care</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Property Address (optional)
        </label>
        <input
          name="address"
          type="text"
          value={form.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
          placeholder="123 Main St, Spokane, WA"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
          placeholder="Tell us about your project..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={handleChange}
          required
          className="mt-1"
        />
        <label className="text-sm text-gray-600">
          I consent to having my information used to respond to this inquiry.
          See our <a href="/privacy" className="text-brand-green underline">Privacy Policy</a>.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-green text-white font-bold py-4 rounded-lg hover:bg-brand-dark transition disabled:opacity-50 text-lg"
      >
        {status === "loading" ? "Sending..." : "Request Free Estimate"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-center">
          Something went wrong. Please try again or call us at (509) 555-0101.
        </p>
      )}
    </form>
  );
}
