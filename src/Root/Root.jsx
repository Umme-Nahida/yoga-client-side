import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Footer from '../Pages/Footer/Footer';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-full mx-auto'>
               <Outlet></Outlet>
            </div>
            <Footer></Footer>           
        </div>
    );
};

export default Root;