import image1 from "../../assets/images/about_us/person.jpg";
import image2 from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
    return (
        <div>
            <div className="flex gap-10">
                <div className="relative w-full">
                    <div>
                        <img src={image1} className="w-10/12 h-[400px]" alt="" />
                    </div>
                    <div className="absolute right-5 top-60">
                        <img src={image2} className="border-4 rounded-lg border-white w-[250px] h-[210px]" alt="" />
                    </div>
                </div>
                <div className="w-full">
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