import slider1 from "../../assets/images/homeCarousel/1.jpg";
import slider2 from "../../assets/images/homeCarousel/2.jpg";
import slider3 from "../../assets/images/homeCarousel/3.jpg";
import slider4 from "../../assets/images/homeCarousel/4.jpg";

const Carousel = () => {
    return (
        <div>
            <div className="w-full md:h-[500px] carousel">
                <div id="slide1" className="relative w-full carousel-item">
                    <img src={slider1} className="w-full" />
                    <div className="absolute bottom-0 flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="relative w-full carousel-item">
                    <img src={slider2} className="w-full" />
                    <div className="absolute bottom-0 flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="relative w-full carousel-item">
                    <img src={slider3} className="w-full" />
                    <div className="absolute bottom-0 flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="relative w-full carousel-item">
                    <img src={slider4} className="w-full" />
                    <div className="absolute bottom-0 flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;