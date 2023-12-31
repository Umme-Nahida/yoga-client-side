

const Banner = () => {
    return (
        <div className="flex items-center justify-center bg-gradient-to-tr from-sky-500 to-teal-300 py-10 px-5 md:py-12 md:px-10 lg:py-24 lg:px-28 ">
            <div className=" navbar-start" data-aos ="fade-up" data-aos-duration="2000">
                <h1 className=" text-2xl md:text-4xl lg:text-7xl  mb-10 text-[#FFFFFF] font-semibold">Yoga Studio</h1>
                <p className="text-lg lg:w-96 md:w-80 w-44 text-[#FFFFFF]">Now the result is just needed for the border gate. Massage therapy now, makeup anyone but now.</p>
                <button className="btn bg-[#FFFFFF] rounded-full py-4 px-8 mt-10 text-[#49CF9E]">GET STARTED</button>
            </div>
            <div className="navbar-end lg:ml-32 ">
                <img  className="w-[500px]" src="https://i.ibb.co/ZL21q0n/yoga-14.png" alt="" data-aos="fade-left" data-aos-duration="2000" />
            </div>
        </div>
    );
};

export default Banner;