import { useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

function ContactForm() {
  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    // Contact form and Address section
    <section className="flex flex-col lg:flex-row gap-[50px] lg:items-center lg:justify-center w-full min-w-full max-w-full lg:p-[50px]">
      {/* Contact Form */}
      <div className="flex flex-col p-[20px] gap-[20px]">
        <h2 className="font-medium text-xl text-[#161722]">CONTACT US:</h2>

        <form
          className="flex max-w-md flex-col gap-[30px] bg-[#FFF5EB] p-8 lg:p-10 lg:w-[500px] rounded-lg shadow-lg text-[#161722]"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name2" className="text-[#161722]" color="#161722">
                Full Name
              </Label>
            </div>
            <TextInput
              id="name2"
              type="text"
              placeholder="Your Full Name"
              color="#161722"
              required
              shadow
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              className="text-[#161722] text-xl"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email2"
                className="text-[#161722]"
                color="#161722"
              >
                Email
              </Label>
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="joshua@gmail.com"
              color="#161722"
              required
              shadow
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-[#161722] text-xl"
            />
          </div>
          {/* <div>
                      <div className="mb-2 block">
                        <Label htmlFor="password2" className="text-[#161722]" color="#161722">Password</Label>
                      </div>
                      <TextInput
                        id="password2"
                        type="password"
                        required
                        shadow
                        placeholder="••••••••"
                        color="#161722"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-[#161722] text-xl"
                      />
                    </div> */}
          {/* <div className="flex items-center gap-2">
                      {/* <Checkbox
                        id="agree"
                        required
                        color="#161722"
                        className="text-[#161722]"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                      /> *
                      <Label htmlFor="agree" className="flex text-[#161722]" color="#161722">
                        {/* I agree with the&nbsp; * Forget Password?&nbsp;
                        <a
                          href="/"
                          className="text-[#161722] underline font-medium"
                        >
                          Reset Password
                        </a>
                      </Label>
                    </div> */}
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="comment" className="text-[#161722]"
                color="#161722">Your message</Label>
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
              className="text-[#161722] text-xl"
              color="#161722"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-[#FFD0A0] text-[#161722] hover:bg-[#FFD2A4] focus:ring-2 focus:ring-[#FFD0A0] border-none hover:text-[17px] font-medium"
            color="#FFD0A0"
          >
            {isLoading ? "Loading..." : "Send Message"}
          </Button>
        </form>
      </div>

      {/* Address Section */}
      <div className="flex flex-col p-[30px] gap-[30px]">
        
        {/* Address */}
        <div>
            <h3 className="font-medium text-[#2c2c2ca2]">Address</h3>
            <h4 className="font-bold text-xl text-[#161722]">123 Main Street, City, Country</h4>
        </div>

        {/* Contact details */}
        <div>
            <h3 className="font-medium text-[#2c2c2ca2]">Contact Details</h3>
            <p className="font-bold text-xl text-[#161722]">(+233) 25-758-1661</p>
            <p className="font-bold text-xl text-[#161722]">NolexPrime@gmail.com</p>
        </div>

        {/* Social media links */}
        <div>
            <h3 className="font-medium text-[#2c2c2ca2]">Find us here</h3>
            <div className="flex gap-5">
                <a href="https://www.facebook.com" className="no-underline"><CiFacebook size={30} className="text-[#161722]" /></a>
                <a href="http://www.twitter.com" className="no-underline"><CiTwitter size={30} className="text-[#161722]" /></a>
                <a href="http://www.instagram.com" className="no-underline"><CiInstagram size={30} className="text-[#161722]" /></a>
                <a href="http://www.linkedin.com" className="no-underline"><CiLinkedin size={30} className="text-[#161722]" /></a>
            </div>
       </div>

      </div>
    </section>
  );
}

export default ContactForm;
