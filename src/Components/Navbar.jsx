import { LuChurch } from "react-icons/lu"
import { BiHome, BiUser, BiMicrophone, BiPhone, BiMenu } from "react-icons/bi"
import { useState, useEffect } from "react"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden lg:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#FFF5EB]/95 backdrop-blur-md shadow-lg py-2" : "bg-[#FFF5EB] py-4"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <a href="/" className="no-underline">
            <div className="flex items-center gap-3 group">
              <LuChurch className="text-5xl text-[#FFD2A4] group-hover:scale-110 transition-transform duration-300" />
              <h1 className="text-4xl font-extrabold font-sans tracking-tight text-[#161722]">CHAPEL</h1>
            </div>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="/"
              className="no-underline font-semibold text-[#161722] hover:text-[#FFD2A4] transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD2A4] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/about"
              className="no-underline font-medium text-[#161722] hover:text-[#FFD2A4] transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD2A4] group-hover:w-full transition-all duration-300"></span>
            </a>
            {/* <a
              href="/sermons"
              className="no-underline font-medium text-[#161722] hover:text-[#FFD2A4] transition-colors duration-300 relative group"
            >
              Sermons
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD2A4] group-hover:w-full transition-all duration-300"></span>
            </a> */}
            <a
              href="/contact"
              className="no-underline font-medium text-[#161722] hover:text-[#FFD2A4] transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD2A4] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <a href="/login" className="no-underline">
              <button className="bg-[#161722] text-[#FFF5EB] px-6 py-3 rounded-full font-medium hover:bg-[#FFD2A4] hover:text-[#161722] transition-all duration-300 transform hover:scale-105">
                Login
              </button>
            </a>
            <a href="/signup" className="no-underline">
              <button className="border-2 border-[#161722] text-[#161722] px-6 py-3 rounded-full font-medium hover:bg-[#161722] hover:text-[#FFF5EB] transition-all duration-300 transform hover:scale-105">
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Top Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#FFF5EB]/95 backdrop-blur-md shadow-sm">
        <div className="flex justify-center items-center py-3">
          <a href="/" className="no-underline">
            <div className="flex items-center gap-2">
              <LuChurch className="text-3xl text-[#FFD2A4]" />
              <h1 className="text-2xl font-bold font-sans tracking-tight text-[#161722]">CHAPEL</h1>
            </div>
          </a>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FFF5EB] border-t border-[#FFD2A4]/20 shadow-lg">
        <div className="flex justify-around items-center py-2">
          <a href="/" className="no-underline flex flex-col items-center py-2 px-3 group">
            <BiHome className="text-2xl text-[#161722] group-hover:text-[#FFD2A4] transition-colors duration-300" />
            <span className="text-xs font-medium text-[#161722] group-hover:text-[#FFD2A4] transition-colors duration-300 mt-1">
              Home
            </span>
          </a>

          <a href="/about" className="no-underline flex flex-col items-center py-2 px-3 group">
            <BiUser className="text-2xl text-[#161722] group-hover:text-[#FFD2A4] transition-colors duration-300" />
            <span className="text-xs font-medium text-[#161722] group-hover:text-[#FFD2A4] transition-colors duration-300 mt-1">
              About
            </span>
          </a>

          {/* <a href="/sermons" className="no-underline flex flex-col items-center py-2 px-3 group">
            <BiMicrophone className="text-2xl text-[#161722] group-hover:text-[#FFD2A4] transition-colors duration-300" />
            <span className="text-xs font-medium text-[#161722] group-hover:text-[#FFD2A4] transition-colors duration-300 mt-1">
              Sermons
            </span>
          </a> */}

          <a href="/contact" className="no-underline flex flex-col items-center py-2 px-3 group">
            <BiPhone className="text-2xl text-[#161722] group-hover:text-[#FFD2A4] transition-colors duration-300" />
            <span className="text-xs font-medium text-[#161722] group-hover:text-[#FFD2A4] transition-colors duration-300 mt-1">
              Contact
            </span>
          </a>

          {/* More Menu */}
          <div className="relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col items-center py-2 px-3 group"
            >
              <BiMenu className="text-2xl text-[#161722] group-hover:text-[#FFD2A4] transition-colors duration-300" />
              <span className="text-xs font-medium text-[#161722] group-hover:text-[#FFD2A4] transition-colors duration-300 mt-1">
                More
              </span>
            </button>

            {/* Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="absolute bottom-full right-0 mb-2 bg-[#FFF5EB] rounded-lg shadow-lg border border-[#FFD2A4]/20 min-w-[150px] overflow-hidden">
                <a
                  href="/login"
                  className="no-underline block px-4 py-3 text-[#161722] hover:bg-[#FFD2A4]/10 transition-colors duration-300"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="no-underline block px-4 py-3 text-[#161722] hover:bg-[#FFD2A4]/10 transition-colors duration-300"
                >
                  Sign Up
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/20 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  )
}

export default Navbar
