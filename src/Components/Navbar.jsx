import { LuChurch } from "react-icons/lu";
import { BiSolidFoodMenu } from "react-icons/bi";
import { useState, useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useCallback } from "react";



function Navbar() {

    // State for mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to close the mobile menu when clicking outside
    const handleClickOutside = useCallback((event) => {
        if (event.target.closest('.mobileMenu') === null &&
      event.target.closest('.hamburger-menu') === null
) {
            // Clicked outside the mobile menu
            console.log('Clicked outside the mobile menu');
            // Close the mobile menu
            setIsOpen(false);
        }
    }, []);

    // useEffect to add event listener for clicks outside the mobile menu
    useEffect(() => {
        // Add event listener to the document
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        // Cleanup function to remove the event listener
        // when the component unmounts or isOpen changes
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, handleClickOutside]);

  return (
    <>
    
        {/*  Header */}
    <header className="flex flex-row justify-between items-center p-2 bg-[#FFF5EB] shadow-sm fixed top-0 left-0 z-50 w-full">

        {/* Logo */}
        <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-2 lg:p-9 lg:border-r-2 lg:border-[#FFD2A4] lg:max-h-[100px] md:flex md:flex-row md:justify-center md:items-center md:gap-2 md:p-9 md:border-r-2 md:border-[#FFD2A4] md:max-h-[100px] flex flex-row justify-center items-center gap-2 p-2 border-r-2 border-[#FFD2A4] max-h-[100px]">
            <LuChurch className="lg:text-7xl md:text-7xl text-3xl text-[#FFD2A4]" />
            <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-[#161722] lg:mt-2.5 md:mt-2 mt-1.5">CHAPEL</h1>
        </div>


        {/* Navigation */}
        <nav className="lg:flex lg:flex-row hidden">
            <ul className="flex flex-row gap-5 mt-2">
                <li className="list-none"><a href="/" className="no-underline font-medium text-[#161722] transition-all text-lg hover:text-2xl">Home</a></li>
                <li className="list-none"><a href="/about" className="no-underline font-medium text-[#161722] transition-all text-lg hover:text-2xl">About</a></li>
                <li className="list-none"><a href="/sermons" className="no-underline font-medium text-[#161722] transition-all text-lg hover:text-2xl">Sermons</a></li>
                <li className="list-none"><a href="/contact" className="no-underline font-medium text-[#161722] transition-all text-lg hover:text-2xl">Contact</a></li>
            </ul>
        </nav>

        {/* Login / Sign Up */}
        <div className="lg:flex lg:flex-row lg:gap-2 hidden">
            <button className="bg-[#161722] border-2 border-[#161722] text-[#FFF5EB] font-medium py-4 rounded-2xl px-9 cursor-pointer hover:bg-[#FFF5EB] hover:text-[#161722] transition-colors ease-in duration-200 delay-75">Login</button>
            <button className="text-[#161722] font-medium cursor-pointer hover:text-[#FFF5EB] hover:bg-[#161722] py-4 px-9 rounded-2xl transition-colors ease-in hover:ml-2 duration-200">Sign Up</button>
        </div>

        {/* Hamburger Menu */}
        <BiSolidFoodMenu className="text-4xl cursor-pointer lg:hidden hamburger-menu" onClick={() => setIsOpen(true)} />        

    </header>


    {/* Mobile Navigation */}
    {isOpen && (
        <section className="lg:hidden flex flex-col justify-center items-center gap-5 w-full max-w-xs min-h-full bg-[#FFF5EB] shadow-lg px-6 top-0 right-0 z-50 mobileMenu fixed">
            {/* Close Button */}
            <IoMdCloseCircle className="text-5xl cursor-pointer relative top-[-100px] ml-auto" onClick={() => setIsOpen(false)} />
            
            {/* Navigation */}
            <ul className="flex flex-col gap-6 mt-5 relative top-[-100px]">
                <li className="list-none"><a href="/" className="no-underline font-medium text-[#161722] transition-all text-lg hover:text-2xl">Home</a></li>
                <li className="list-none"><a href="/about" className="no-underline font-medium text-[#161722] transition-all text-lg hover:text-2xl">About</a></li>
                <li className="list-none"><a href="/sermons" className="no-underline font-medium text-[#161722] transition-all text-lg hover:text-2xl">Sermons</a></li>
                <li className="list-none"><a href="/contact" className="no-underline font-medium text-[#161722] transition-all text-lg hover:text-2xl">Contact</a></li>
            </ul>

            {/* Login / Sign Up */}
            <div className="flex flex-col gap-5 relative top-[-65px]">
                <button className="bg-[#161722] border-2 border-[#161722] text-[#FFF5EB] font-medium py-4 rounded-2xl px-9 cursor-pointer hover:bg-[#FFF5EB] hover:text-[#161722] transition-colors ease-in duration-200 delay-75 block">Login</button>
                <button className="text-[#161722] font-medium cursor-pointer hover:text-[#FFF5EB] hover:bg-[#161722] py-4 px-9 rounded-2xl transition-colors ease-in hover:ml-2 duration-200 block">Sign Up</button>
            </div>

        </section>
    )}


    </>
  );
}

export default Navbar;