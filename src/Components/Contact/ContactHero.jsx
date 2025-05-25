import ContactHeroImage from "/assets/images/ContactHero.png";


function ContactHero() {
  return (
    <section
    style={{ backgroundImage: `url(${ContactHeroImage})` }}
    className="bg-cover bg-center flex flex-col lg:flex-row w-full lg:mt-[100px] mt-[75px] justify-start items-start"
    >

        <div className="flex flex-col lg:p-[90px] md:p-[70px] p-[50px] pl-[30px] text-left lg:gap-[20px] md:gap-[30px] gap-[10px] lg:mt-[30px] md:mt-[30px] mt-[10px] w-full lg:w-[50%] md:w-[85%] text-white">

            <h3 className="font-medium font-mono text-[#FFD2A4]">CONTACT</h3>

            <h2 className="font-bold lg:text-4xl md:text-4xl text-2xl text-white">GET IN TOUCH WITH OUR CHURCH</h2>

        </div>

    </section>
  );
}

export default ContactHero;