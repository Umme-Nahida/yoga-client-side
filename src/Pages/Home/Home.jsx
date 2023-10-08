import { useLoaderData } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Service from "../Services/Services";

const Home = () => {
    const servicesData = useLoaderData()
    // console.log(services)
    return (
        <div>
            <Banner></Banner>
            <div className=" bg-slate-100">
                <div className="grid grid-cols-3 gap-5 p-20">
                    {
                        servicesData?.map(dataItem => <Service key={dataItem.id} dataItem={dataItem}></Service>)
                    }
                </div>
            </div>
            <AboutUs></AboutUs>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;