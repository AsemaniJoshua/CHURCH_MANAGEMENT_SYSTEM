import RomanSister from "/assets/images/RomanSister.png";
import Bible from "/assets/images/bible.png";
import Pastor from "/assets/images/Pastor.png";
import Arts from "/assets/images/Arts.png";
import { useEffect } from "react";


function Benefit() { 
  

  return (
    <section className="my-[30px] p-[90px] bg-[#F5F5F5] flex flex-col gap-5 items-center justify-center w-full min-w-full max-w-full">


        <h3 className="font-medium font-mono">WATCH AND LISTEN</h3>

        <h2 className="font-bold text-4xl text-center lg:w-[35%] md:w-[50%] w-[100%]">THE BENEFITS OF JOINING OUR CHURCH</h2>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-[30px] items-center justify-center mt-[30px]">

          {/* card 1 */}
          <div className="w-[300px] relative hover:opacity-90 transition-all duration-300 hover:scale-[1.1] hover:shadow-lg hover:bg-black group" id="card1">

            <div className="text-center absolute bottom-[30px] text-white">
              <h2 className="font-bold text-2xl text-center">1. SPIRITUAL GROWTH</h2>
              <p className="text-[14px] lg:hidden group-hover:block" id="card1Paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula facilisis lacinia.</p>
            </div>
            <img src={RomanSister} alt="A Picture of a Roman Sister" srcset="" />

          </div>

          {/* card 2 */}
          <div className="w-[300px] relative hover:opacity-90 transition-all duration-300 hover:scale-[1.1] hover:shadow-lg hover:bg-black group" id="card2">

            <div className="text-center absolute bottom-[30px] text-white">
              <h2 className="font-bold text-2xl text-center">2. COMMUNITY</h2>
              <p className="text-[14px] lg:hidden group-hover:block" id="card2Paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula facilisis lacinia.</p>
            </div>
            <img src={Bible} alt="A Picture of a Bible" srcset="" />

          </div>

          {/* card 3 */}
          <div className="w-[300px] relative hover:opacity-90 transition-all duration-300 hover:scale-[1.1] hover:shadow-lg hover:bg-black group" id="card3">

            <div className="text-center absolute bottom-[30px] text-white">
              <h2 className="font-bold text-2xl text-center">3. FELLOWSHIP</h2>
              <p className="text-[14px] lg:hidden group-hover:block" id="card3Paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula facilisis lacinia.</p>
            </div>
            <img src={Pastor} alt="A Picture of a Pastor" srcset="" />

          </div>

          {/* card 4 */}
          {/* <div className="w-[300px] relative hover:opacity-90 transition-all duration-300 hover:scale-[1.1] hover:shadow-lg hover:bg-black group" id="card4">

            <div className="text-center absolute bottom-[30px] text-white">
              <h2 className="font-bold text-2xl text-center">4. SUPPORT</h2>
              <p className="text-[14px] lg:hidden group-hover:block" id="card4Paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula facilisis lacinia.</p>
            </div>
            <img src={Arts} alt="A Picture of Arts" srcset="" />

          </div> */}
          
        </div>
    </section>
  );
}

export default Benefit;