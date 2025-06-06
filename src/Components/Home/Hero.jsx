import HeroImage from '/assets/images/hero.png';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${HeroImage})` }}
      className="bg-cover bg-center flex flex-col lg:flex-row w-full lg:mt-[100px] mt-[75px]"
    >
      {/* Hero Text */}
      <div className="flex flex-col lg:p-[90px] md:p-[70px] p-[50px] pl-[30px] text-left lg:gap-[20px] md:gap-[30px] gap-[10px] lg:mt-[30px] md:mt-[30px] mt-[10px] w-full lg:w-[60%] md:w-[85%] text-white font-sans">
        <h3 className="font-bold font-mono uppercase tracking-widest text-lg">WELCOME TO OUR CHURCH</h3>
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl font-sans tracking-tight leading-tight">BECOME A PART OF OUR COMMUNITY</h1>
        <a href="/about" className="no-underline">
          <button className="bg-[#FFD2A4] text-black font-medium py-2 px-4 rounded-md w-[180px] lg:mt-[30px] lg:mb-[45px] md:mt-[15px] md:mb-[27px] mt-[20px] mb-[20px] cursor-pointer">Learn More</button>
        </a>
        <p className="leading-relaxed text-base md:text-lg font-normal">
          <span className="inline-block w-[24px] h-[2px] bg-[#FFD2A4] mr-[7px] relative top-[-4px]"></span>
          Welcome to our church community. We are glad to have you here.
        </p>
      </div>
    </section>
  );
}

export default Hero;