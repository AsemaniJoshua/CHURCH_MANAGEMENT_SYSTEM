import { GiLeafSwirl } from "react-icons/gi";
import { FaBone } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";

function Relevant() {
  return (
    <section className="my-[40px] flex flex-col items-center justify-center p-[50px] gap-[10px]">

        <h3 className="font-medium font-mono">Relevant</h3>

        <h2 className="font-bold text-4xl text-center">A CHURCH THAT'S RELEVANT</h2>

        {/* RelevantCards */}
        <div className="lg:flex lg:flex-row md:flex md:flex-row md:flex-wrap flex flex-col lg:gap-[20px] md:gap-[20px] gap-[40px] items-center justify-center mt-[30px] p-[20px] max-w-[100%]">

            {/* Card 1 */}
            <div className="flex flex-col items-start justify-start gap-[15px] p-[70px] bg-[#FFF5EB] shadow-md hover:shadow-lg transition-shadow duration-300 border-b-[12px] border-[#FFD2A4]">
                {/* icon */}
                <GiLeafSwirl className="text-3xl bg-[#FFD2A4] border rounded-full text-[#2c2828ad] p-[5px]" />

                {/* Header */}
                <h2 className="font-bold text-xl">ABOUT US</h2>

                {/* Description */}
                <p className="text-sm w-[250px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla neque harum quis vero recusandae quisquam minus</p>

            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start justify-start gap-[15px] p-[70px] bg-[#FFF5EB] shadow-md hover:shadow-lg transition-shadow duration-300 border-b-[12px] border-[#FFD2A4]">
                {/* icon */}
                <FaBone className="text-3xl bg-[#FFD2A4] border rounded-full text-[#2c2828ad] p-[5px]" />


                {/* Header */}
                <h2 className="font-bold text-xl">GET INVOLVED</h2>

                {/* Description */}
                <p className="text-sm w-[250px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla neque harum quis vero recusandae quisquam minus</p>
                
            </div>


            {/* Card 3 */}
            <div className="flex flex-col items-start justify-start gap-[15px] p-[70px] bg-[#FFF5EB] shadow-md hover:shadow-lg transition-shadow duration-300 border-b-[12px] border-[#FFD2A4]">
                {/* icon */}
                <BiDonateHeart className="text-3xl bg-[#FFD2A4] border rounded-full text-[#2c2828ad] p-[5px]" />


                {/* Header */}
                <h2 className="font-bold text-xl">GIVING BACK</h2>

                {/* Description */}
                <p className="text-sm w-[250px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla neque harum quis vero recusandae quisquam minus</p>
                
            </div>

        </div>

    </section>
  );
}

export default Relevant;