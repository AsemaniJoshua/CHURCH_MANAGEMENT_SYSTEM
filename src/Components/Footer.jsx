import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { LuChurch } from "react-icons/lu";


function Footer() {
  return (
    <footer className="bg-[#161722] text-white lg:p-[90px] py-[90px] px-[40px] mt-[40px] lg:flex lg:flex-row md:flex md:flex-col flex flex-col gap-[60px] lg:gap-[100px] w-full min-w-full max-w-full">

        {/* Footer Division 1 */}
        <div className="flex flex-col gap-[20px] lg:order-1 md:order-1 order-1">

            <a href="/" className="no-underline">
                <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-2 lg:p-9 lg:max-h-[100px] relative lg:left-[-30px] md:left-[-30px] left-[-10px] md:flex md:flex-row md:gap-2 md:p-9 md:max-h-[100px] flex flex-row gap-2 p-2 max-h-[100px]">
                        <LuChurch className="lg:text-7xl md:text-7xl text-5xl text-[#FFD2A4]" />
                        <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold text-[#FFD0A0] lg:mt-2.5 md:mt-2 mt-1.5">CHAPEL</h1>
                    </div>
            </a>

            <p className="text-[#adababe8]">&copy; COPYRIGHT 2025</p>

            <p className="text-[#adababe8] mt-[30px]">(+233) 25-758-1661</p>

            <p className="text-[#adababe8]">123 Main St, Springfield, USA</p>

            <p className="text-[#adababe8]">NolexPrime@gmail.com</p>
        </div>

        {/* Footer Division 2 */}
        <div className="lg:flex lg:flex-row md:flex md:flex-col flex flex-col gap-[20px] lg:gap-[30px] lg:order-2 md:order-3 order-3">

            <div className="flex flex-col lg:justify-center  gap-[20px]">

                <h2 className="font-medium lg:w-[100px]">Quick Links</h2>

                <ul className="flex flex-col gap-[10px] list-none">
                    <li ><a href="/" className="no-underline text-[#adababe8]">Home</a></li>
                    <li><a href="/about" className="no-underline text-[#adababe8]">About</a></li>
                    <li><a href="/sermons" className="no-underline text-[#adababe8]">Sermons</a></li>
                    <li><a href="/contact" className="no-underline text-[#adababe8]">Contact</a></li>
                </ul>
            </div>

            <div className="flex flex-col lg:justify-center relative lg:top-[-47px] gap-[20px]">

                <h2 className="font-medium">Connect With Us</h2>

                <div className="flex flex-row gap-[10px]">
                    <a href="http://facebook.com" className="no-underline"><CiFacebook className="text-3xl text-[#FFD0A0]" /></a>
                    <a href="http://x.com" className="no-underline"><CiTwitter className="text-3xl text-[#FFD0A0]" /></a>
                    <a href="http://instagram.com" className="no-underline"><CiInstagram className="text-3xl text-[#FFD0A0]" /></a>
                    <a href="http://linkedin.com" className="no-underline"><CiLinkedin className="text-3xl text-[#FFD0A0]" /></a>
                </div>
            </div>
        </div>

        {/* Footer Division 3 */}
        <div className="flex flex-col lg:justify-center gap-[20px] lg:order-3 md:order-2 order-2">

            <h2 className="font-bold lg:text-4xl md:text-4xl text-2xl">SUBSCRIBE TO GET LATEST UPDATES AND NEWS</h2>

            <form action="" method="post" className="lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-[20px] lg:gap-[0px] md:gap-[0px]">
                <input type="email" placeholder="Enter your email" required className="p-3 rounded-md md:border-2 border-1 border-[#3333338c]" />
                <button type="submit" className="bg-[#FFD2A4] text-black font-medium py-3 px-9 rounded-md cursor-pointer hover:cursor-pointer hover:text-2xl">Subscribe</button>
            </form>

        </div>
      
    </footer>
  );
}

export default Footer;