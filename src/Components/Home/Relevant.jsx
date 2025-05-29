import { GiLeafSwirl } from "react-icons/gi";
import { FaBone } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";

function Relevant() {
  return (
    <section className="my-[40px] flex flex-col items-center justify-center p-[50px] gap-[10px] w-full min-w-full max-w-full">

        <h3 className="font-semibold font-mono uppercase tracking-widest text-base">Relevant</h3>
<h2 className="font-bold lg:text-4xl md:text-3xl text-2xl text-center font-sans tracking-tight leading-snug">A CHURCH THAT'S RELEVANT</h2>

        {/* RelevantCards */}
        <div className="flex flex-col lg:flex-row gap-[20px] items-center justify-center mt-[30px] p-[20px]">
            {/* Card 1 */}
            <div className="flex flex-col items-start justify-start gap-[15px] p-[20px] md:p-[40px] lg:p-[70px] bg-[#FFF5EB] shadow-md hover:shadow-lg transition-shadow duration-300 border-b-[12px] border-[#FFD2A4] max-w-[300px] lg:max-w-[350px]">
                {/* icon */}
                <GiLeafSwirl className="text-3xl bg-[#FFD2A4] border rounded-full text-[#2c2828ad] p-[5px]" />

                {/* Header */}
                <h2 className="font-bold text-xl font-sans tracking-tight">ABOUT US</h2>

                {/* Description */}
                <p className="text-sm md:text-base font-normal leading-relaxed w-[200px] lg:w-[250px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla neque harum quis vero recusandae quisquam minus</p>

            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start justify-start gap-[15px] p-[20px] md:p-[40px] lg:p-[70px] bg-[#FFF5EB] shadow-md hover:shadow-lg transition-shadow duration-300 border-b-[12px] border-[#FFD2A4] max-w-[300px] lg:max-w-[350px]">
                {/* icon */}
                <FaBone className="text-3xl bg-[#FFD2A4] border rounded-full text-[#2c2828ad] p-[5px]" />


                {/* Header */}
                <h2 className="font-bold text-xl font-sans tracking-tight">GET INVOLVED</h2>

                {/* Description */}
                <p className="text-sm md:text-base font-normal leading-relaxed w-[200px] lg:w-[250px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla neque harum quis vero recusandae quisquam minus</p>
                
            </div>


            {/* Card 3 */}
            <div className="flex flex-col items-start justify-start gap-[15px] p-[20px] md:p-[40px] lg:p-[70px] bg-[#FFF5EB] shadow-md hover:shadow-lg transition-shadow duration-300 border-b-[12px] border-[#FFD2A4] max-w-[300px] lg:max-w-[350px]">
                {/* icon */}
                <BiDonateHeart className="text-3xl bg-[#FFD2A4] border rounded-full text-[#2c2828ad] p-[5px]" />


                {/* Header */}
                <h2 className="font-bold text-xl font-sans tracking-tight">GIVING BACK</h2>

                {/* Description */}
                <p className="text-sm md:text-base font-normal leading-relaxed w-[200px] lg:w-[250px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla neque harum quis vero recusandae quisquam minus</p>
                
            </div>

        </div>
    </section>
  );
}

export default Relevant;