import slider1 from "../../assets/images/homeCarousel/1.jpg";
import slider2 from "../../assets/images/homeCarousel/2.jpg";
import slider3 from "../../assets/images/homeCarousel/3.jpg";
import slider4 from "../../assets/images/homeCarousel/4.jpg";

const Carousel = () => {
    return (
        <div>
            <div className="w-full md:h-[600px] carousel">
                <div id="slide1" className="relative w-full carousel-item">
                    <img src={slider1} className="w-full rounded-xl" />
                    <div className="absolute w-6/12 h-full bg-gradient-to-r from-black to-transparent rounded-xl">
                    </div>
                    <div className="absolute bottom-0 flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide4" className="text-white bg-orange-500 border-orange-500 btn btn-circle">❮</a>
                        <a href="#slide2" className="text-white bg-orange-500 border-orange-500 btn btn-circle">❯</a>
                    </div>
                    <div className="absolute justify-start hidden w-6/12 gap-3 text-white transform -translate-y-1/2 md:block top-64 left-5 right-5">
                        <h1 className="text-5xl font-bold">Affordable</h1>
                        <h1 className="my-3 text-5xl font-bold">Price For Car</h1>
                        <h1 className="text-5xl font-bold">Servicing</h1>
                        <br />
                        <p className="my-3 text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <br />
                        <div className="flex gap-5">
                            <button className="text-white bg-orange-500 border-orange-500 hover:text-black btn">Discover More</button>
                            <button className="text-white border-white btn btn-outline">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="relative w-full carousel-item">
                    <img src={slider2} className="w-full rounded-xl" />
                    <div className="absolute w-6/12 h-full bg-gradient-to-r from-black to-transparent rounded-xl">
                    </div>
                    <div className="absolute bottom-0 flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide1" className="text-white bg-orange-500 border-orange-500 btn btn-circle">❮</a>
                        <a href="#slide3" className="text-white bg-orange-500 border-orange-500 btn btn-circle">❯</a>
                    </div>
                    <div className="absolute justify-start hidden w-6/12 gap-3 text-white transform -translate-y-1/2 md:block top-64 left-5 right-5">
                        <h1 className="text-5xl font-bold">Affordable</h1>
                        <h1 className="my-3 text-5xl font-bold">Price For Car</h1>
                        <h1 className="text-5xl font-bold">Servicing</h1>
                        <br />
                        <p className="my-3 text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <br />
                        <div className="flex gap-5">
                            <button className="text-white bg-orange-500 border-orange-500 btn hover:text-black">Discover More</button>
                            <button className="text-white border-white btn btn-outline">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="relative w-full carousel-item">
                    <img src={slider3} className="w-full rounded-xl" />
                    <div className="absolute w-6/12 h-full bg-gradient-to-r from-black to-transparent rounded-xl">
                    </div>
                    <div className="absolute bottom-0 flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide2" className="text-white bg-orange-500 border-orange-500 btn btn-circle">❮</a>
                        <a href="#slide4" className="text-white bg-orange-500 border-orange-500 btn btn-circle">❯</a>
                    </div>
                    <div className="absolute justify-start hidden w-6/12 gap-3 text-white transform -translate-y-1/2 md:block top-64 left-5 right-5">
                        <h1 className="text-5xl font-bold">Affordable</h1>
                        <h1 className="my-3 text-5xl font-bold">Price For Car</h1>
                        <h1 className="text-5xl font-bold">Servicing</h1>
                        <br />
                        <p className="my-3 text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <br />
                        <div className="flex gap-5">
                            <button className="text-white bg-orange-500 border-orange-500 btn hover:text-black">Discover More</button>
                            <button className="text-white border-white btn btn-outline">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="relative w-full carousel-item">
                    <img src={slider4} className="w-full rounded-xl" />
                    <div className="absolute w-6/12 h-full bg-gradient-to-r from-black to-transparent rounded-xl">
                    </div>
                    <div className="absolute bottom-0 flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide3" className="text-white bg-orange-500 border-orange-500 btn btn-circle">❮</a>
                        <a href="#slide1" className="text-white bg-orange-500 border-orange-500 btn btn-circle">❯</a>
                    </div>
                    <div className="absolute justify-start hidden w-6/12 gap-3 text-white transform -translate-y-1/2 md:block top-64 left-5 right-5">
                        <h1 className="text-5xl font-bold">Affordable</h1>
                        <h1 className="my-3 text-5xl font-bold">Price For Car</h1>
                        <h1 className="text-5xl font-bold">Servicing</h1>
                        <br />
                        <p className="my-3 text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <br />
                        <div className="flex gap-5">
                            <button className="text-white bg-orange-500 border-orange-500 btn hover:text-black">Discover More</button>
                            <button className="text-white border-white btn btn-outline">Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;