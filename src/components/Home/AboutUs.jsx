import image1 from "../../assets/images/about_us/person.jpg";
import image2 from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
    return (
        <div>
            <div className="grid gap-10 md:grid-cols-2">
                <div className="relative w-full">
                    <div>
                        <img src={image1} className="w-10/12 md:h-[400px]" alt="" />
                    </div>
                    <div className="absolute right-0 top-24 md:right-5 md:top-60">
                        <img src={image2} className="border-4 rounded-lg border-white md:w-[250px] md:h-[210px] w-[125px] h-[105px]" alt="" />
                    </div>
                </div>
                <div className="w-full mt-10 md:mt-0">
                    <h5 className="text-xl font-medium text-orange-500">About Us</h5>
                    <br />
                    <h2 className="text-4xl font-semibold">We are qualified</h2>
                    <h2 className="my-2 text-4xl font-semibold">& of experience</h2>
                    <h2 className="text-4xl font-semibold">in this field</h2>
                    <br />
                    <p className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <br />
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <br />
                    <button className="text-white bg-orange-500 hover:text-black btn">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;