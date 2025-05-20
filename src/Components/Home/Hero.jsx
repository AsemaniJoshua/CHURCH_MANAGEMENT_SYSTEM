import HeroImage from '../../assets/images/hero.png';

function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${HeroImage})` }}
      className="bg-cover bg-center flex flex-row lg:justify-start lg:items-start md:justify-start md:items-start text-white h-[535px] mt-[100px] justify-start items-start"
    >
      {/* Hero Text */}
      <div className="flex flex-col lg:p-[90px] md:p-[70px] p-[50px] pl-[30px] text-left lg:gap-[20px] md:gap-[30px] gap-[10px] lg:mt-[30px] md:mt-[30px] mt-[10px] lg:w-[60%] md:w-[85%] w-[120%]">
        <h3 className="font-bold font-mono">WELCOME TO OUR CHURCH</h3>
        <h1 className="font-extrabold text-6xl font-mono">BECOME A PART OF OUR COMMUNITY</h1>
        <button className="bg-[#FFD2A4] text-black font-medium py-2 px-4 rounded-md w-[180px] lg:mt-[30px] lg:mb-[45px] md:mt-[15px] md:mb-[27px] mt-[20px] mb-[20px] cursor-pointer">Learn More</button>
        <p>
          <span className="inline-block w-[24px] h-[2px] bg-[#FFD2A4] mr-[7px] relative top-[-4px]"></span>
          Welcome to our church community. We are glad to have you here.
        </p>
      </div>
    </section>
  );
}

export default Hero;