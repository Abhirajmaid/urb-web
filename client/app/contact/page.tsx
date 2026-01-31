"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { PageHeader } from "@/components/common/PageHeader";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FAQSection } from "@/components/common/FAQSection";
import { Footer } from "@/components/common/Footer";
import Button from "@/components/common/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "mdi:map-marker",
      title: "Address",
      content: "Insurance Plaza, Financial District, City 12345",
      link: "#",
    },
    {
      icon: "mdi:phone",
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: "mdi:email",
      title: "Email",
      content: "info@urbinsurance.com",
      link: "mailto:info@urbinsurance.com",
    },
  ];

  return (
    <main className="text-[#031B4E]">
      <PageHeader
        title="Contact Us"
        description="Ready to protect your future? Let's discuss your insurance needs and explore how we can provide comprehensive coverage and peace of mind."
        backgroundImage="/images/servicesimage.jpg"
        backgroundImageAlt="Contact hero background"
        showButton={false}
      />

      {/* Contact Form & Info Section */}
      <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-10">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] min-h-[800px] sm:min-h-[900px] lg:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-10 xl:px-14 lg:py-20">
            <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
              <SectionHeader
                eyebrow="CONTACT US"
                title="Let's start a conversation"
                description="Fill out the form below or reach out to us directly. We're here to help with your insurance needs and provide the right coverage for you."
                align="center"
              />
            </div>

          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr,1fr] lg:gap-16">
            {/* Contact Form */}
            <div
              className="rounded-2xl border border-brand-gray-light/50 bg-white p-5 sm:p-6 lg:p-10 shadow-sm"
              id="contact-form"
            >
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="text-base sm:text-base lg:text-sm font-medium text-brand-dark">
                      Full Name <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-brand-gray-light bg-white px-4 py-3.5 sm:py-3 lg:py-3 text-base sm:text-base lg:text-sm text-brand-dark outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                    />
                  </label>

                  <label className="block space-y-2">
                    <span className="text-base sm:text-base lg:text-sm font-medium text-brand-dark">
                      Email Address <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-brand-gray-light bg-white px-4 py-3.5 sm:py-3 lg:py-3 text-base sm:text-base lg:text-sm text-brand-dark outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="text-base sm:text-base lg:text-sm font-medium text-brand-dark">
                      Company Name
                    </span>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Inc."
                      className="w-full rounded-xl border border-brand-gray-light bg-white px-4 py-3.5 sm:py-3 lg:py-3 text-base sm:text-base lg:text-sm text-brand-dark outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                    />
                  </label>

                  <label className="block space-y-2">
                    <span className="text-base sm:text-base lg:text-sm font-medium text-brand-dark">
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full rounded-xl border border-brand-gray-light bg-white px-4 py-3.5 sm:py-3 lg:py-3 text-base sm:text-base lg:text-sm text-brand-dark outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                    />
                  </label>
                </div>

                <label className="block space-y-2">
                  <span className="text-base sm:text-base lg:text-sm font-medium text-brand-dark">
                    Insurance Inquiry <span className="text-red-500">*</span>
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your insurance needs, coverage requirements, and any questions you have..."
                    className="w-full rounded-xl border border-brand-gray-light bg-white px-4 py-3.5 sm:py-3 lg:py-3 text-base sm:text-base lg:text-sm text-brand-dark outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 resize-none"
                  />
                </label>

                {submitStatus === "success" && (
                  <div className="rounded-xl bg-green-50 border border-green-200 p-4 sm:p-4 text-sm sm:text-sm lg:text-xs text-green-800">
                    Thank you! Your message has been sent. We&apos;ll get back
                    to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-xl bg-red-50 border border-red-200 p-4 sm:p-4 text-sm sm:text-sm lg:text-xs text-red-800">
                    Something went wrong. Please try again or contact us
                    directly.
                  </div>
                )}

                <Button
                  type="primary"
                  size="lg"
                  htmlType="submit"
                  disabled={isSubmitting}
                  className="w-full uppercase tracking-wide"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-5 sm:space-y-6">
              <div className="rounded-2xl border border-brand-gray-light/50 bg-gradient-to-br from-brand-primary/5 to-transparent p-6 sm:p-6 lg:p-10">
                <h3 className="mb-5 sm:mb-6 text-xl sm:text-xl lg:text-lg font-semibold text-brand-dark">
                  Contact Information
                </h3>
                <div className="space-y-5 sm:space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="group flex items-start gap-4 sm:gap-4 transition hover:opacity-80"
                    >
                      <div className="flex h-12 w-12 sm:h-12 sm:w-12 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white transition group-hover:scale-110">
                        <Icon
                          icon={info.icon}
                          className="text-xl sm:text-2xl lg:text-lg"
                        />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-base lg:text-sm font-semibold text-brand-dark">
                          {info.title}
                        </h4>
                        <p className="mt-2 sm:mt-1 text-sm sm:text-sm lg:text-xs text-brand-dark/70">
                          {info.content}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-brand-gray-light/50 bg-white p-6 sm:p-6 lg:p-10">
                <h3 className="mb-4 sm:mb-4 text-lg sm:text-lg lg:text-base font-semibold text-brand-dark">
                  Business Hours
                </h3>
                <div className="space-y-3 sm:space-y-2 text-sm sm:text-sm lg:text-xs text-brand-dark/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-white">
        <FAQSection />
      </div>

      <Footer />
    </main>
  );
}
