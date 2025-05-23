import Praying_Man from '/assets/images/a-bearded-man-praying-5206040.png'
import Couples from '/assets/images/man-and-woman-reading-book-while-sitting-on-pews-8468470.png'
import Gathering from '/assets/images/people-sitting-on-brown-pews-8674151.png'
import { MdArrowRightAlt } from "react-icons/md";


function Love() {
  return (
    <section className="my-[40px] p-4 md:p-8 lg:p-[70px] w-full">

        {/* text div */}
        <div className='flex flex-col gap-[15px] p-[10px] justify-center items-center'>

            <h3 className='font-medium font-mono'>Love for the Church</h3>

            <h2 className='font-bold text-4xl text-center'>LOVE AND COMPASSION</h2>

            <p className='text-sm lg:w-[50%] text-center my-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolor rerum et vero optio fugiat nisi, aperiam nesciunt modi dicta, tempore delectus cum reprehenderit ullam nam voluptatem temporibus deserunt asperiores.</p>

            <button className='bg-[#FFD2A4] text-black font-medium py-2 px-4 rounded-md cursor-pointer hover:cursor-pointer hover:text-2xl'>Read More</button>

        </div>

        {/* image div */}
        <div className='lg:flex lg:flex-row md:flex md:flex-row md:flex-wrap flex flex-col lg:gap-[20px] md:gap-[30px] gap-[30px] justify-center items-center relative lg:top-[-175px] md:mt-[30px] mt-[30px]'>

            <img src={Praying_Man} alt="A man praying" srcset=" A man praying" />

            <img src={Couples} alt=" A couple reading a book" srcset=" A couple reading a book" className='lg:mt-[255px] lg:scale-[1] md:scale-[1] scale-[1.05] md:my-0 lg:my-0 my-[20px]' />

            <img src={Gathering} alt="A gathering of people" srcset=" A gathering of people" />

        </div>

        {/* Our Mission and Vision */}
        <div className='flex flex-col gap-[15px] p-[10px] justify-center items-center relative lg:top-[-120px] md:mt-[40px] mt-[40px]'>

            <h2 className='font-medium font-mono'>OUR MISSION AND VISION</h2>

            <h3 className='font-bold text-3xl text-center'>CELEBRATE WITH US</h3>

            <p className='text-[13px] text-[#333] lg:w-[50%] text-center w-[100%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis dignissimos recusandae voluptate nisi ad suscipit fuga, corrupti, reiciendis modi cum deleniti, sint atque nam cupiditate facere pariatur voluptatibus. Aliquam.</p>

            <a href="http://" className='no-underline cursor-pointer hover:text-2xl'>Read More <MdArrowRightAlt className='inline-block text-2xl'/></a>
        </div>

    </section>
  );
}

export default Love;