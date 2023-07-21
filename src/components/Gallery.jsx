import { TextHeading } from "./utils/Heading";
import { portraitsDetails } from "../../data/gallery";
import { coverArtDetails } from "../../data/gallery";

const Gallery = () => {
    return (
        <section className="w-full h-fit pt-20 bg-mainBlue pb-20">
            <div className="container">
                <TextHeading heading={'Some of my past projects'} />
                <div className=" pt-20 container px-10">
                    {portraitsDetails.map(({ id, icon, heading, images }) => <div key={id}>
                        <div className="text-white font-climate flex gap-4 items-center mb-10 lg:mb-20 lg:gap-10">
                            <img src={icon} alt={''} />
                            <h5 className="text-2xl lg:text-4xl">{heading}</h5>
                        </div>

                        <div className="container grid grid-cols-3 gap-3 lg:flex lg:flex-wrap">
                            {images.map((image) => <div key={id}>
                                <img src={image} alt="nnnedlog-portrait" className="rounded-md" />
                            </div>)}
                        </div>
                    </div>)}
                </div>

                <div className="pt-20">
                    {coverArtDetails.map(({ id, icon, heading, images }) => <div key={id}>
                        <div className="text-white font-climate flex gap-4 items-center ">
                            <img src={icon} alt={''} />
                            <h5 className="text-2xl">{heading}</h5>
                        </div>

                        <div className="container px-4 grid grid-cols-3 gap-3 lg:flex lg:flex-wrap">
                            {images.map((image) => <div key={id}>
                                <img src={image} alt="nnnedlog-portrait" className="rounded-md" />
                            </div>)}
                        </div>
                    </div>)}
                </div>
            </div>

        </section>
    )
}

export default Gallery;