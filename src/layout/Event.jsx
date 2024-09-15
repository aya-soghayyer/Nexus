import { Banner, Hobby, Top } from "../Components/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "../Components/Slider/Slider.jsx";

const Event = () => {
    return (
        <div className='position-relative'>
         
            <Banner />
            <Slider />
            <Hobby />
            <div className='position-fixed bottom-0 end-0 p-4'>
                <Top />
            </div>


        </div>

    );
};

export default Event;