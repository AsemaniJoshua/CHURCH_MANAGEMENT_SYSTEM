import Sermons from "../Json_Data/Sermons.json";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

function ChurchSermons() {
    return (
        <section className="my-[40px] flex flex-col items-center justify-center p-[50px] gap-[20px]">

            <h3 className="font-medium font-mono">SERMONS</h3>

            <h2 className="font-bold text-4xl text-center lg:w-[40%]">JOIN US AND BECOME PART OF SOMETHING GREAT</h2>

            {/* Available sermons from the json file */}
                {Sermons.map((sermon) => (
                // Sermon card
                <div key={sermon.id} className="lg:flex lg:flex-row md:flex md:flex-col flex flex-col mt-[30px]">

                    {/* Sermon text */}
                    <div className="bg-[#FFF5EB] p-[40px] lg:order-1 md:order-2 order-2 flex flex-col gap-[40px] lg:w-[40%] md:w-[100%] w-[100%]">

                        {/* Event Type and Date */}
                        <div className="lg:flex lg:flex-row lg:justify-between lg:items-end md:flex md:flex-row md:justify-between md:items-end flex flex-row justify-between items-end">
                            <h3 className="bg-gradient-to-r from-[#A54E2B] to-[#DC9853] text-transparent bg-clip-text">{sermon.category}</h3>

                            <div className="flex flex-col">
                                <h2 className="font-bold text-4xl">{sermon.date.day}</h2>
                                <h2 className="font-medium text-2xl">{sermon.date.month}</h2>
                            </div>
                        </div>

                        {/* Sermon Title */}
                        <h2 className="text-4xl font-bold">{sermon.title}</h2>

                        {/* Sermon Description */}
                        <p className="text-sm text-[#383838de]">{sermon.description}</p>

                        {/* Days and time of event */}
                        <div className="flex flex-row gap-[10px]" >

                            {/* Clock Icon */}
                            <CiClock2 className="text-2xl" />

                            {/* Days and time */}
                            <div className="flex flex-col gap-[5px]">
                                {sermon.days_and_time_of_event.map((day, index) => (
                                <p key={index}>{day.day} - {day.time}</p>
                            ))}
                            </div>
                        </div>

                        {/* Sermon Location */}
                        <div className="flex flex-row gap-[10px]">

                            {/* Location Icon */}
                            <CiLocationOn className="text-2xl" />

                            {/* Location */}
                            <p>{sermon.location}</p>
                        </div>

                        {/* Sermon Button */}
                        <button className="bg-[#161722] text-[#FFD2A4] px-[20px] py-[10px] rounded-[5px] text-center ml-auto mr-auto hover:text-2xl">REGISTER</button>
                    </div>


                    {/* Sermon Image */}
                    <img src={sermon.image} alt="Sermon Image" srcset="" className="lg:order-2 md:order-1 order-1 lg:w-[60%] md:w-[100%] w-[100%]" />
                </div>
            ))}

            {/* Add a button to view all sermons */}
            <a href="" className="no-underline lg:ml-auto md:ml-auto flex flex-row items-center justify-center gap-[5px] mt-[20px]"><button className="bg-[#161722] text-[#FFD2A4] px-[20px] py-[10px] rounded-[5px] text-center w-[200px] flex flex-row items-center justify-center gap-[5px]">View All Sermons <IoIosArrowRoundForward className="text-3xl" /></button></a>
            
        </section>
    );
}   

export default ChurchSermons;