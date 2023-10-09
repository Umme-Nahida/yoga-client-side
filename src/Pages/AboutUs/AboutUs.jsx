
const AboutUs = () => {
    return (
            <div className="lg:flex md:flex flex-cols-reverse  items-center justify-between py-5 px-10 md:py-16 md:px-10 lg:py-28 lg:px-32">
                <div>
                    <h1 className="text-4xl text-gray-400 mb-8 md:text-left text-center">About Us</h1>
                    <h1 className="text-2xl mb-6  font-semibold text-[#49CF9E] md:text-left text-center">High Quality & Professional Yoga Club</h1>
                    <p className="text-base w-full md:w-44 lg:w-[500px] md:text-left text-center mb-5">At a high-quality yoga club, you will find experienced and certified yoga instructors who are dedicated to helping members achieve their fitness and wellness goals. These instructors are not only knowledgeable about various yoga styles but also skilled in adapting their teaching methods to suit students of all levels, from beginners to advanced practitioners.</p>

                </div>
                <div>
                    <img className="lg:w-full md:pl-20 pl-0 " src="https://i.ibb.co/CvTJKZX/yoga-02.png" alt="" />
                </div>
            </div>
    );
};

export default AboutUs;