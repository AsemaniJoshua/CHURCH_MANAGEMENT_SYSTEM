import BlogCard from "../Json_Data/Blog.json";


function Blog() {
  return (
    <section className="p-[70px] my-[40px] flex flex-col gap-[20px] items-center justify-center">

        <h3 className="font-medium font-mono">READ OUR BLOG</h3>

        <h2 className="font-bold text-4xl text-center">SHARE, INSPIRE, INNOVATE</h2>
        
        
        {/* Blog Cards */}
        <div className="lg:flex lg:flex-row md:flex md:flex-row md:flex-wrap flex flex-col gap-[20px] items-center justify-center mt-[20px]">

            {BlogCard.map((blog) => (
            <div key={blog.id} className="flex flex-col gap-[20px] bg-[#FFF5EB] p-[20px] border-b-8 border-[#FFD0A0] lg:border-0 hover:border-b-[8px] hover:border-[#FFD0A0] transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 w-[250px] h-[350px]">

                {/* Blog Category */}
                <h3 className="bg-gradient-to-r from-[#A54E2B] to-[#DC9853] text-transparent bg-clip-text">{blog.category}</h3>

                {/* Blog Title */}
                <h2 className="font-bold text-2xl">{blog.title}</h2>

                {/* Blog Description */}
                <p className="text-sm text-[#2c2828]">{blog.description}</p>

                {/* Blog Author and Date */}
                <div className="mt-[20px] flex flex-col gap-[5px]">
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