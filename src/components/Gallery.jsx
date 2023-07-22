import { TextHeading } from "./utils/Heading";
import { portraitsDetails } from "../../data/gallery";
import { coverArtDetails } from "../../data/gallery";
import { posterDetails } from "../../data/gallery";
import { apparelDetails } from "../../data/gallery";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
    const titleRef = useRef(null);
    const galleryRef = useRef(null);

    useEffect(() => {
        gsap.from(titleRef.current, {
            duration: 1,
            scale: .5,
            opacity: 0,
            scrollTrigger: {
                trigger: galleryRef.current,
                start: 'top center',
            }
        })
    }, [])
    return (
        <section className="w-full h-fit pt-20 bg-mainBlue pb-20" ref={galleryRef}>
            <div className="container">
                <div ref={titleRef} className="px-10">
                    <TextHeading heading={'Some of my past projects'} />
                </div>
                <div className=" pt-20 container px-10 pb-10 lg:pb-20">
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

                <div className="pt-20 container px-10 pb-10 lg:pb-20">
                    {coverArtDetails.map(({ id, icon, heading, images }) => <div key={id}>
                        <div className="text-white font-climate flex gap-4 items-center mb-10 lg:mb-20 lg:gap-10 ">
                            <img src={icon} alt={''} />
                            <h5 className="text-2xl lg:text-4xl">{heading}</h5>
                        </div>

                        <div className="container px-4 grid grid-cols-3 gap-3 lg:flex lg:flex-wrap">
                            {images.map((image) => <div key={id}>
                                <img src={image} alt="nnnedlog-portrait" className="rounded-md" />
                            </div>)}
                        </div>
                    </div>)}
                </div>

                <div className="pt-20 container px-10 pb-10 lg:pb-20 relative">
                    {posterDetails.map(({ id, icon, heading, images }) => <div key={id}>
                        <div className="text-white font-climate flex gap-4 items-center mb-10 lg:mb-20 lg:gap-10 ">
                            <img src={icon} alt={''} />
                            <h5 className="text-2xl lg:text-4xl">{heading}</h5>
                        </div>

                        <div className="container px-4 grid grid-cols-3 gap-3 lg:flex lg:flex-wrap">
                            {images.map((image) => <div key={Math.random() * 10}>
                                <img src={image} alt="nnnedlog-portrait" className="rounded-md" />
                            </div>)}
                        </div>
                    </div>)}

                    <div className='w-28 h-28 bg-blurPurple/50 blur-[130px] absolute -left-40 bottom-28  lg:w-60 lg:h-60 lg:top-[80%] lg:blur-[160px]' />

                </div>

                <div className="pt-20 container px-10 pb-10 lg:pb-20 relative">
                    {apparelDetails.map(({ id, icon, heading, images }) => <div key={id}>
                        <div className="text-white font-climate flex gap-4 items-center mb-10 lg:mb-20 lg:gap-10 ">
                            <img src={icon} alt={''} />
                            <h5 className="text-2xl lg:text-4xl">{heading}</h5>
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