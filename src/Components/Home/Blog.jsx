import BlogCard from "../Json_Data/Blog.json";


function Blog() {
  return (
    <section className="p-4 md:p-8 lg:p-[70px] my-[40px] flex flex-col gap-[20px] items-center justify-center w-full min-w-full max-w-full">

        <h3 className="font-semibold font-mono uppercase tracking-widest text-base">READ OUR BLOG</h3>

        <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl text-center font-sans tracking-tight leading-snug">SHARE, INSPIRE, INNOVATE</h2>
        
        
        {/* Blog Cards */}
        <div className="lg:flex lg:flex-row md:flex md:flex-row md:flex-wrap flex flex-col gap-[20px] items-center justify-center mt-[20px]">

            {BlogCard.map((blog) => (
            <div key={blog.id} className="flex flex-col gap-[20px] bg-[#FFF5EB] p-[20px] border-b-8 border-[#FFD0A0] lg:border-0 hover:border-b-[8px] hover:border-[#FFD0A0] transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 w-full max-w-xs h-auto">

                {/* Blog Category */}
                <h3 className="bg-gradient-to-r from-[#A54E2B] to-[#DC9853] text-transparent bg-clip-text font-semibold uppercase tracking-wide text-sm">{blog.category}</h3>

                {/* Blog Title */}
                <h2 className="font-bold text-2xl font-sans tracking-tight">{blog.title}</h2>

                {/* Blog Description */}
                <p className="text-sm md:text-base text-[#2c2828] font-normal leading-relaxed">{blog.description}</p>

                {/* Blog Author and Date */}
                <div className="mt-[20px] flex flex-col gap-[5px] text-xs md:text-sm font-medium">
                    <p>By {blog.author}</p>
                    <p>{blog.date_and_day.day} {blog.date_and_day.date}</p>
                </div>

            </div>
        ))}

        </div>

    </section>
  );
}

export default Blog;