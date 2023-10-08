
const ChooseUs = () => {

    return (
        <div className="bg-[#2CDAB9] px-24 py-24 ">
            <div className="text-center mb-16">
                <h1 className="text-lg text-white-400 mb-6">TESTIMONIALS</h1>
                <h1 className="text-4xl mb-10  font-semibold text-[#FFFFFF]">What People Are Saying</h1>
            </div>

            <div className=" shadow-xl grid grid-cols-3 gap-8">
                <div className=" border p-8 bg-white rounded-lg">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <h2 className="card-title text-base mt-4 ">Mahbub Rahman!</h2>
                </div>
                <div className="border p-8 bg-white rounded-lg">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <h2 className="card-title text-base mt-4">Nazmul Hasan!</h2>
                </div>
                <div className="border p-8 bg-white rounded-lg">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text</p>
                    <h2 className="card-title text-base mt-4">Muhammad Romon!</h2>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;