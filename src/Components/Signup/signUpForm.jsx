import { useState } from "react"
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa"
import { LuChurch } from "react-icons/lu"
import AnimatedSection from "../AnimatedSection"

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    console.log("Sign up submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#FFF5EB] flex items-center justify-center p-4 my-[60px]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFD2A4]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FFD2A4]/5 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#FFD2A4]/15 rounded-full blur-lg animate-ping"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg">
        <AnimatedSection>
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-[#FFD2A4]/20">
            {/* Logo and Header */}
            <div className="text-center mb-8">
              <AnimatedSection delay={200}>
                <div className="flex justify-center mb-4">
                  <div className="flex items-center gap-3">
                    <LuChurch className="text-4xl text-[#FFD2A4]" />
                    <h1 className="text-3xl font-bold font-sans tracking-tight text-[#161722]">CHAPEL</h1>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <h2 className="text-2xl font-bold text-[#161722] mb-2">Join Our Family</h2>
                <p className="text-[#2c2828]">Create your account to get started</p>
              </AnimatedSection>
            </div>

            {/* Social Sign Up */}
            <AnimatedSection delay={600}>
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-[#FFD2A4]/30 rounded-lg hover:border-[#FFD2A4] hover:bg-[#FFD2A4]/5 transition-all duration-300">
                  <FaGoogle className="text-red-500" />
                  <span className="font-medium text-[#161722]">Sign up with Google</span>
                </button>
                <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-[#FFD2A4]/30 rounded-lg hover:border-[#FFD2A4] hover:bg-[#FFD2A4]/5 transition-all duration-300">
                  <FaFacebook className="text-blue-600" />
                  <span className="font-medium text-[#161722]">Sign up with Facebook</span>
                </button>
              </div>
            </AnimatedSection>

            {/* Divider */}
            <AnimatedSection delay={800}>
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#FFD2A4]/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-[#2c2828]">Or sign up with email</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Sign Up Form */}
            <AnimatedSection delay={1000}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#161722] font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#FFD2A4]/30 focus:border-[#FFD2A4] focus:outline-none transition-colors duration-300"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#161722] font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#FFD2A4]/30 focus:border-[#FFD2A4] focus:outline-none transition-colors duration-300"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#161722] font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#FFD2A4]/30 focus:border-[#FFD2A4] focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#161722] font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#FFD2A4]/30 focus:border-[#FFD2A4] focus:outline-none transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-[#161722] font-medium mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-12 rounded-lg border-2 border-[#FFD2A4]/30 focus:border-[#FFD2A4] focus:outline-none transition-colors duration-300"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#2c2828] hover:text-[#FFD2A4] transition-colors duration-300"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[#161722] font-medium mb-2">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-12 rounded-lg border-2 border-[#FFD2A4]/30 focus:border-[#FFD2A4] focus:outline-none transition-colors duration-300"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#2c2828] hover:text-[#FFD2A4] transition-colors duration-300"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#FFD2A4] border-[#FFD2A4]/30 rounded focus:ring-[#FFD2A4] mt-1"
                      required
                    />
                    <span className="ml-2 text-sm text-[#2c2828]">
                      I agree to the{" "}
                      <a href="/terms" className="text-[#FFD2A4] hover:text-[#161722] transition-colors duration-300">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-[#FFD2A4] hover:text-[#161722] transition-colors duration-300">
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="subscribeNewsletter"
                      checked={formData.subscribeNewsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#FFD2A4] border-[#FFD2A4]/30 rounded focus:ring-[#FFD2A4]"
                    />
                    <span className="ml-2 text-sm text-[#2c2828]">
                      Subscribe to our newsletter for updates and spiritual content
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFD2A4] text-[#161722] font-bold py-3 rounded-lg hover:bg-[#161722] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Create Account
                </button>
              </form>
            </AnimatedSection>

            {/* Login Link */}
            <AnimatedSection delay={1200}>
              <div className="text-center mt-6">
                <p className="text-[#2c2828]">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-[#FFD2A4] hover:text-[#161722] font-medium transition-colors duration-300"
                  >
                    Sign in here
                  </a>
                </p>
              </div>
            </AnimatedSection>

            {/* Back to Home */}
            <AnimatedSection delay={1400}>
              <div className="text-center mt-4">
                <a href="/" className="text-sm text-[#2c2828] hover:text-[#FFD2A4] transition-colors duration-300">
                  ← Back to Home
                </a>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default SignUpForm