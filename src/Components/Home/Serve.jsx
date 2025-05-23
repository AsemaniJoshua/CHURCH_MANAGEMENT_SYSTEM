import { FaQuoteLeft } from "react-icons/fa";

function Serve() {
  return (
    <section
      style={{ backgroundImage: `url(/assets/images/Background.png)` }}
      className="bg-cover bg-center py-8 md:py-16 flex flex-col items-center justify-center w-full"
    >
      {/* Serving Card */}
      <div className="flex flex-col md:flex-row bg-white border-b-8 border-[#FFD2A4] p-4 md:p-8 lg:p-10 gap-6 md:gap-10 lg:gap-12 w-full max-w-[95vw] md:max-w-[900px] lg:max-w-[1100px] mx-auto shadow-lg rounded-lg">
        {/* div text */}
        <div className="flex flex-col justify-center items-start order-2 md:order-1 gap-4 w-full md:w-1/2">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            WE WANT TO SERVE THE WORLD AROUND US
          </h2>
          <p className="text-sm text-[#3b3939c7]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            excepturi hic, repellat corrupti voluptatem omnis.
          </p>
          <a href="/about" className="no-underline">
            <button className="bg-[#FFD2A4] text-black font-medium py-3 px-9 rounded-md cursor-pointer hover:text-2xl transition-all">
              VISIT
            </button>
          </a>
        </div>
        {/* Icon */}
        <div className="flex justify-center items-center order-1 md:order-2 w-full md:w-1/2">
          <FaQuoteLeft className="text-[#ffd1a44d] text-[60px] md:text-[120px] lg:text-[200px]" />
        </div>
      </div>
    </section>
  );
}

export default Serve;