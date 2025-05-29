import React, { useState } from "react";
import AnimatedSection from "../AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF5EB] font-sans text-[#161722]">
      {/* Hero Section */}
      <section className="relative bg-[#FFD0A0] text-[#161722] py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-in">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">Contact Us</h1>
              <p className="text-sm md:text-base lg:text-lg text-[#161722] opacity-80">
                We'd love to hear from you. Get in touch with our church family.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-[#FFF5EB]">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#161722] mb-2 tracking-tight">Get In Touch</h2>
              <p className="text-sm md:text-base text-[#161722] opacity-70">Multiple ways to connect with us</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection animation="scale-in" delay={100}>
              <div className="bg-[#FFF5EB] border-b-8 border-[#FFD2A4] p-8 rounded-2xl text-center shadow hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-[#FFD2A4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#161722] mb-2">Visit Us</h3>
                <p className="text-xs md:text-sm text-[#161722] opacity-70 mb-4">Come worship with us</p>
                <div className="space-y-1">
                  <p className="font-semibold text-[#161722]">123 Church Street</p>
                  <p className="text-[#161722] opacity-70">Accra, Ghana</p>
                  <p className="text-sm text-[#FFD0A0] mt-2 font-semibold">Sunday Service: 9:00 AM</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={200}>
              <div className="bg-[#FFF5EB] border-b-8 border-[#FFD2A4] p-8 rounded-2xl text-center shadow hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-[#FFD2A4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#161722] mb-2">Call Us</h3>
                <p className="text-xs md:text-sm text-[#161722] opacity-70 mb-4">Speak with our team</p>
                <div className="space-y-1">
                  <p className="font-semibold text-[#161722]">+233 24 123 4567</p>
                  <p className="text-[#161722] opacity-70">Main Office</p>
                  <p className="text-sm text-[#FFD0A0] mt-2 font-semibold">Mon-Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={300}>
              <div className="bg-[#FFF5EB] border-b-8 border-[#FFD2A4] p-8 rounded-2xl text-center shadow hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-[#FFD2A4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#161722] mb-2">Email Us</h3>
                <p className="text-xs md:text-sm text-[#161722] opacity-70 mb-4">Send us a message</p>
                <div className="space-y-1">
                  <p className="font-semibold text-[#161722]">info@gracechapel.gh</p>
                  <p className="text-[#161722] opacity-70">General Inquiries</p>
                  <p className="text-sm text-[#FFD0A0] mt-2 font-semibold">We respond within 24 hours</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-[#FFD0A0]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-in-left">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#161722] mb-4 tracking-tight">Send Us a Message</h2>
                <p className="text-sm md:text-base lg:text-lg text-[#161722] opacity-70 mb-8">
                  Have a question, prayer request, or want to learn more about our church? Fill out the form and we'll get back to you as soon as possible.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#FFD2A4] rounded-full flex items-center justify-center">
                      <span className="text-xl">⏰</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base text-[#161722]">Quick Response</h4>
                      <p className="text-xs md:text-sm text-[#161722] opacity-70">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#FFD2A4] rounded-full flex items-center justify-center">
                      <span className="text-xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base text-[#161722]">Personal Touch</h4>
                      <p className="text-xs md:text-sm text-[#161722] opacity-70">Every message receives personal attention from our team</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#FFD2A4] rounded-full flex items-center justify-center">
                      <span className="text-xl">🙏</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base text-[#161722]">Prayer Support</h4>
                      <p className="text-xs md:text-sm text-[#161722] opacity-70">All prayer requests are handled with care and confidentiality</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="bg-[#FFF5EB] p-8 rounded-2xl shadow-lg border-b-8 border-[#FFD2A4]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-[#161722] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#FFD2A4] rounded-lg focus:ring-2 focus:ring-[#FFD0A0] focus:border-transparent transition-colors bg-[#FFF5EB] text-[#161722]"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-[#161722] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#FFD2A4] rounded-lg focus:ring-2 focus:ring-[#FFD0A0] focus:border-transparent transition-colors bg-[#FFF5EB] text-[#161722]"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs md:text-sm font-semibold text-[#161722] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#FFD2A4] rounded-lg focus:ring-2 focus:ring-[#FFD0A0] focus:border-transparent transition-colors bg-[#FFF5EB] text-[#161722]"
                      placeholder="+233 24 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs md:text-sm font-semibold text-[#161722] mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#FFD2A4] rounded-lg focus:ring-2 focus:ring-[#FFD0A0] focus:border-transparent transition-colors bg-[#FFF5EB] text-[#161722]"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="visit">Planning a Visit</option>
                      <option value="membership">Membership Information</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="ministry">Ministry Involvement</option>
                      <option value="events">Events & Programs</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-[#161722] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-[#FFD2A4] rounded-lg focus:ring-2 focus:ring-[#FFD0A0] focus:border-transparent transition-colors bg-[#FFF5EB] text-[#161722] resize-vertical"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FFD0A0] text-[#161722] py-3 px-6 rounded-lg font-bold text-base md:text-lg hover:bg-[#FFD2A4] transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}