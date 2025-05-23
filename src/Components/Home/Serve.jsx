import Background from "/assets/images/Background.png";
import { FaQuoteLeft } from "react-icons/fa";


function Serve() {
  return (
    <section style={{ backgroundImage: `url(${Background})`}} className="bg-cover bg-center my-[50px] h-[600px] flex flex-row justify-center items-center relative">

        {/* Serving Card */}
        <div className="lg:flex lg:flex-row md:flex md:flex-col flex flex-col bg-white border-b-8 border-[#FFD2A4] p-[40px] gap-[50px] lg:w-[50%] md:w-[50%] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

            {/* div text */}
            <div className="flex flex-col justify-center items-start lg:order-1 md:order-2 order-2 gap-[20px] lg:w-[50%] md:w-[100%] w-full">

                <h2 className="font-bold text-4xl">WE WANT TO SERVE THE WORLD AROUND US</h2>

                <p className="text-sm text-[#3b3939c7]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi hic, repellat corrupti voluptatem omnis.</p>

                <a href="http://" className="no-underline"><button className="bg-[#FFD2A4] text-black font-medium py-3 px-9 rounded-md cursor-pointer hover:cursor-pointer hover:text-2xl">VISIT</button></a>
            </div>

            {/* Image */}
            <FaQuoteLeft className="text-[#ffd1a44d] lg:text-[200px] md:text-[150px] text-[100px] lg:order-2 md:order-1 order-1" />

        </div>
    </section>
  );
}

export default Serve;