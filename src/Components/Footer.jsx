import { LuChurch } from "react-icons/lu"
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa"
import { BiChevronRight } from "react-icons/bi"
import { useState } from "react"
import AnimatedSection from "./AnimatedSection"

function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    // { name: "Sermons", href: "/sermons" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
    { name: "Ministries", href: "/ministries" },
  ]

  const ministries = [
    { name: "Youth Ministry", href: "/ministries/youth" },
    { name: "Women's Fellowship", href: "/ministries/women" },
    { name: "Men's Fellowship", href: "/ministries/men" },
    { name: "Children's Church", href: "/ministries/children" },
    { name: "Worship Team", href: "/ministries/worship" },
    { name: "Prayer Ministry", href: "/ministries/prayer" },
  ]

  return (
    <footer className="bg-[#161722] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFD2A4]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FFD2A4]/3 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#FFD2A4]/10 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12">
              {/* Church Info */}
              <AnimatedSection className="lg:col-span-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LuChurch className="text-4xl text-[#FFD2A4]" />
                    <h2 className="text-3xl font-bold font-sans tracking-tight">CHAPEL</h2>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    A vibrant Pentecostal church rooted in Ghana's spiritual heritage, committed to spreading the Gospel
                    and empowering believers through the Holy Spirit.
                  </p>

                  {/* Social Media */}
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#FFD2A4]/20 rounded-full flex items-center justify-center hover:bg-[#FFD2A4] hover:text-[#161722] transition-all duration-300 group"
                    >
                      <FaFacebook className="group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#FFD2A4]/20 rounded-full flex items-center justify-center hover:bg-[#FFD2A4] hover:text-[#161722] transition-all duration-300 group"
                    >
                      <FaTwitter className="group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#FFD2A4]/20 rounded-full flex items-center justify-center hover:bg-[#FFD2A4] hover:text-[#161722] transition-all duration-300 group"
                    >
                      <FaInstagram className="group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#FFD2A4]/20 rounded-full flex items-center justify-center hover:bg-[#FFD2A4] hover:text-[#161722] transition-all duration-300 group"
                    >
                      <FaYoutube className="group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Links */}
              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#FFD2A4] font-sans">Quick Links</h3>
                  <ul className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="flex items-center gap-2 text-white/80 hover:text-[#FFD2A4] transition-colors duration-300 group"
                        >
                          <BiChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Ministries */}
              <AnimatedSection delay={400}>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#FFD2A4] font-sans">Ministries</h3>
                  <ul className="space-y-3">
                    {ministries.map((ministry, index) => (
                      <li key={index}>
                        <a
                          href={ministry.href}
                          className="flex items-center gap-2 text-white/80 hover:text-[#FFD2A4] transition-colors duration-300 group"
                        >
                          <BiChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                          {ministry.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Contact & Newsletter */}
              <AnimatedSection delay={600}>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#FFD2A4] font-sans">Get In Touch</h3>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-[#FFD2A4] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/80">123 Faith Street</p>
                        <p className="text-white/80">Accra, Ghana</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaPhone className="text-[#FFD2A4] flex-shrink-0" />
                      <p className="text-white/80">+233 24 123 4567</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-[#FFD2A4] flex-shrink-0" />
                      <p className="text-white/80">info@chapel.com</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <FaClock className="text-[#FFD2A4] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/80">Sunday: 9:00 AM</p>
                        <p className="text-white/80">Wednesday: 7:00 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-[#FFD2A4]/10 p-4 rounded-lg border border-[#FFD2A4]/20">
                    <h4 className="font-bold text-white mb-3">Stay Connected</h4>
                    <p className="text-white/80 text-sm mb-4">
                      Subscribe to our newsletter for updates and spiritual content.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-[#FFD2A4]/30 text-white placeholder-white/60 focus:outline-none focus:border-[#FFD2A4] transition-colors duration-300"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#FFD2A4] text-[#161722] font-bold py-2 rounded-lg hover:bg-white transition-colors duration-300"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Service Times Banner */}
        <AnimatedSection>
          <div className="bg-[#FFD2A4]/10 border-t border-[#FFD2A4]/20 py-8 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-center md:flex md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-[#FFD2A4] mb-2">Join Us for Worship</h3>
                  <p className="text-white/80">Experience God's presence in our vibrant worship services</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="text-center">
                    <p className="font-bold text-[#FFD2A4]">Sunday Service</p>
                    <p className="text-white/80">9:00 AM - 11:00 AM</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-[#FFD2A4]">Midweek Service</p>
                    <p className="text-white/80">Wednesday 7:00 PM</p>
                  </div>
                  <a href="/contact" className="no-underline">
                    <button className="bg-[#FFD2A4] text-[#161722] font-bold py-2 px-6 rounded-full hover:bg-white transition-colors duration-300">
                      Plan Your Visit
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom Bar */}
        <div className="bg-[#0f1015] border-t border-[#FFD2A4]/10 py-6 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-white/60 text-sm">
                  © 2024 Chapel Church. All rights reserved. Built with love for God's kingdom.
                </p>
              </div>
              <div className="flex gap-6 text-sm">
                <a href="/privacy" className="text-white/60 hover:text-[#FFD2A4] transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-white/60 hover:text-[#FFD2A4] transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="/sitemap" className="text-white/60 hover:text-[#FFD2A4] transition-colors duration-300">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Padding for Navigation */}
      <div className="lg:hidden h-20"></div>
    </footer>
  )
}

export default Footer
