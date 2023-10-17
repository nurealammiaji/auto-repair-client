import image1 from "../../assets/images/about_us/person.jpg";
import image2 from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
    return (
        <div>
            <div className="flex gap-10">
                <div className="relative w-full">
                    <div>
                        <img src={image1} className="w-10/12 h-[350px]" alt="" />
                    </div>
                    <div className="absolute right-0 top-52 ">
                        <img src={image2} className="border-4 rounded-xl border-white w-[200px] h-[210px]" alt="" />
                    </div>
                </div>
                <div className="w-full">
                    <h5 className="text-xl text-orange-500">About Us</h5>
                    <br />
                    <h2 className="text-3xl font-semibold">We are qualified & of experience in this field</h2>
                    <br />
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <br />
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <br />
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;