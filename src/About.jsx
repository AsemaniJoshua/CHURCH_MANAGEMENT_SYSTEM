import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { FaCross, FaHeart, FaPray, FaMusic } from "react-icons/fa"
import { GiDove, GiOpenBook } from "react-icons/gi"
import { BiWorld } from "react-icons/bi"

function About() {
  return (
    <>
    <Navbar /> 
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#FFF5EB] pt-[120px] pb-[60px] px-4 md:px-8 lg:px-[70px]">
        <div className="flex flex-col items-center justify-center text-center gap-[20px]">
          <h3 className="font-semibold font-mono uppercase tracking-widest text-base">ABOUT OUR CHURCH</h3>
          <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl font-sans tracking-tight leading-snug">
            CALLED TO TRANSFORM LIVES THROUGH CHRIST
          </h1>
          <p className="text-sm md:text-base font-normal leading-relaxed lg:w-[60%] text-[#2c2828] mt-[15px]">
            We are a vibrant Pentecostal church rooted in the rich spiritual heritage of Ghana, committed to spreading
            the Gospel of Jesus Christ and empowering believers through the gifts of the Holy Spirit.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="my-[40px] p-4 md:p-8 lg:p-[70px] bg-[#F5F5F5]">
        <div className="flex flex-col lg:flex-row gap-[40px] items-center justify-center">
          {/* Mission Text */}
          <div className="flex flex-col gap-[20px] lg:w-[50%]">
            <h3 className="font-semibold font-mono uppercase tracking-widest text-base">OUR MISSION</h3>
            <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl font-sans tracking-tight leading-snug">
              TO WIN SOULS AND MAKE DISCIPLES
            </h2>
            <p className="text-sm md:text-base font-normal leading-relaxed text-[#2c2828]">
              Our mission is to evangelize the lost, edify the saved, and equip the saints for the work of ministry. We
              are committed to preaching the full Gospel with signs, wonders, and miracles following, as we believe in
              the power of God to transform lives and communities across Ghana and beyond.
            </p>
            <div className="flex flex-col gap-[15px] mt-[20px]">
              <div className="flex items-center gap-[10px]">
                <FaCross className="text-[#FFD2A4] text-xl" />
                <span className="font-medium">Proclaim the Gospel of Jesus Christ</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <GiDove className="text-[#FFD2A4] text-xl" />
                <span className="font-medium">Operate in the gifts of the Holy Spirit</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <BiWorld className="text-[#FFD2A4] text-xl" />
                <span className="font-medium">Reach the nations with God's love</span>
              </div>
            </div>
          </div>

          {/* Mission Image */}
          <div className="lg:w-[50%] flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Church congregation in worship"
              className="rounded-lg shadow-lg w-full max-w-[500px] object-cover h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="my-[40px] p-4 md:p-8 lg:p-[70px]">
        <div className="flex flex-col lg:flex-row gap-[40px] items-center justify-center">
          {/* Vision Image */}
          <div className="lg:w-[50%] flex justify-center lg:order-1 order-2">
            <img
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="People praying together"
              className="rounded-lg shadow-lg w-full max-w-[500px] object-cover h-[400px]"
            />
          </div>

          {/* Vision Text */}
          <div className="flex flex-col gap-[20px] lg:w-[50%] lg:order-2 order-1">
            <h3 className="font-semibold font-mono uppercase tracking-widest text-base">OUR VISION</h3>
            <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl font-sans tracking-tight leading-snug">
              A CHURCH THAT IMPACTS GENERATIONS
            </h2>
            <p className="text-sm md:text-base font-normal leading-relaxed text-[#2c2828]">
              We envision a church that serves as a beacon of hope and transformation in Ghana and across Africa. Our
              vision is to raise a generation of Spirit-filled believers who will carry the Gospel to every corner of
              the earth, demonstrating God's power through miraculous healings, deliverance, and supernatural
              breakthroughs.
            </p>
            <div className="bg-[#FFF5EB] p-[20px] rounded-lg border-l-4 border-[#FFD2A4] mt-[20px]">
              <p className="text-sm md:text-base font-medium text-[#2c2828] italic">
                "To be a church where the presence of God is tangible, where miracles are commonplace, and where every
                believer walks in their divine purpose and calling."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="my-[40px] p-4 md:p-8 lg:p-[70px] bg-[#F5F5F5]">
        <div className="flex flex-col items-center justify-center gap-[40px]">
          <div className="text-center">
            <h3 className="font-semibold font-mono uppercase tracking-widest text-base">OUR CORE VALUES</h3>
            <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl font-sans tracking-tight leading-snug mt-[10px]">
              FOUNDED ON BIBLICAL PRINCIPLES
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] w-full max-w-[1200px]">
            {/* Value 1 - Faith */}
            <div className="flex flex-col items-center gap-[20px] bg-[#FFF5EB] p-[30px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-b-[8px] border-[#FFD2A4]">
              <FaPray className="text-4xl text-[#FFD2A4] bg-white p-[10px] rounded-full" />
              <h3 className="font-bold text-xl font-sans tracking-tight text-center">FAITH & PRAYER</h3>
              <p className="text-sm md:text-base font-normal leading-relaxed text-center text-[#2c2828]">
                We believe in the power of faith and fervent prayer to move mountains and bring heaven to earth.
              </p>
            </div>

            {/* Value 2 - Worship */}
            <div className="flex flex-col items-center gap-[20px] bg-[#FFF5EB] p-[30px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-b-[8px] border-[#FFD2A4]">
              <FaMusic className="text-4xl text-[#FFD2A4] bg-white p-[10px] rounded-full" />
              <h3 className="font-bold text-xl font-sans tracking-tight text-center">WORSHIP & PRAISE</h3>
              <p className="text-sm md:text-base font-normal leading-relaxed text-center text-[#2c2828]">
                We worship God in spirit and truth, celebrating our Ghanaian heritage through vibrant praise.
              </p>
            </div>

            {/* Value 3 - Word */}
            <div className="flex flex-col items-center gap-[20px] bg-[#FFF5EB] p-[30px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-b-[8px] border-[#FFD2A4]">
              <GiOpenBook className="text-4xl text-[#FFD2A4] bg-white p-[10px] rounded-full" />
              <h3 className="font-bold text-xl font-sans tracking-tight text-center">WORD OF GOD</h3>
              <p className="text-sm md:text-base font-normal leading-relaxed text-center text-[#2c2828]">
                The Bible is our foundation and guide for all matters of faith, life, and ministry.
              </p>
            </div>

            {/* Value 4 - Fellowship */}
            <div className="flex flex-col items-center gap-[20px] bg-[#FFF5EB] p-[30px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-b-[8px] border-[#FFD2A4]">
              <FaHeart className="text-4xl text-[#FFD2A4] bg-white p-[10px] rounded-full" />
              <h3 className="font-bold text-xl font-sans tracking-tight text-center">LOVE & UNITY</h3>
              <p className="text-sm md:text-base font-normal leading-relaxed text-center text-[#2c2828]">
                We are one family in Christ, bound together by love and committed to one another.
              </p>
            </div>

            {/* Value 5 - Holy Spirit */}
            <div className="flex flex-col items-center gap-[20px] bg-[#FFF5EB] p-[30px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-b-[8px] border-[#FFD2A4]">
              <GiDove className="text-4xl text-[#FFD2A4] bg-white p-[10px] rounded-full" />
              <h3 className="font-bold text-xl font-sans tracking-tight text-center">HOLY SPIRIT</h3>
              <p className="text-sm md:text-base font-normal leading-relaxed text-center text-[#2c2828]">
                We believe in the baptism of the Holy Spirit and the operation of spiritual gifts today.
              </p>
            </div>

            {/* Value 6 - Service */}
            <div className="flex flex-col items-center gap-[20px] bg-[#FFF5EB] p-[30px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-b-[8px] border-[#FFD2A4]">
              <BiWorld className="text-4xl text-[#FFD2A4] bg-white p-[10px] rounded-full" />
              <h3 className="font-bold text-xl font-sans tracking-tight text-center">SERVICE & MISSIONS</h3>
              <p className="text-sm md:text-base font-normal leading-relaxed text-center text-[#2c2828]">
                We are called to serve our community and take the Gospel to the ends of the earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="my-[40px] p-4 md:p-8 lg:p-[70px]">
        <div className="flex flex-col items-center justify-center gap-[30px]">
          <div className="text-center">
            <h3 className="font-semibold font-mono uppercase tracking-widest text-base">OUR HERITAGE</h3>
            <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl font-sans tracking-tight leading-snug mt-[10px]">
              ROOTED IN GHANAIAN CULTURE
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-[40px] items-center justify-center">
            <div className="bg-[#FFF5EB] p-[40px] rounded-lg shadow-lg border-b-[12px] border-[#FFD2A4] lg:w-[60%]">
              <p className="text-sm md:text-base font-normal leading-relaxed text-[#2c2828] text-center mb-[20px]">
                Our church proudly embraces the rich spiritual heritage of Ghana while maintaining our commitment to
                biblical truth. We celebrate the vibrant worship traditions of our people, incorporating indigenous
                music, dance, and cultural expressions that honor God and reflect our identity as Ghanaian believers.
              </p>
              <p className="text-sm md:text-base font-normal leading-relaxed text-[#2c2828] text-center">
                We believe that God has uniquely gifted the Ghanaian church to be a light to Africa and the world,
                carrying the message of hope, healing, and prosperity through the power of the Holy Spirit.
              </p>
            </div>

            <div className="lg:w-[40%] flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="African church worship and cultural celebration"
                className="rounded-lg shadow-lg w-full max-w-[400px] object-cover h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="my-[40px] p-4 md:p-8 lg:p-[70px] bg-[#161722] text-white">
        <div className="flex flex-col items-center justify-center gap-[30px] text-center">
          <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl font-sans tracking-tight leading-snug">
            JOIN OUR CHURCH FAMILY TODAY
          </h2>
          <p className="text-sm md:text-base font-normal leading-relaxed lg:w-[60%] text-[#adababe8]">
            Experience the love of God, the power of the Holy Spirit, and the warmth of Christian fellowship. Come as
            you are and discover your purpose in God's kingdom.
          </p>
          <div className="flex flex-col md:flex-row gap-[20px]">
            <a href="/contact" className="no-underline">
              <button className="bg-[#FFD2A4] text-black font-medium py-3 px-8 rounded-md cursor-pointer hover:text-lg transition-all">
                Visit Us
              </button>
            </a>
            <a href="/sermons" className="no-underline">
              <button className="border-2 border-[#FFD2A4] text-[#FFD2A4] font-medium py-3 px-8 rounded-md cursor-pointer hover:bg-[#FFD2A4] hover:text-black transition-all">
                Watch Sermons
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
    {/* Footer */}
    <Footer />
    </>
  )
}

export default About
