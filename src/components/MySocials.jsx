import { TextHeading } from "./utils/Heading";
import instagram from '../images/logos/instagram.svg';
import tiktok from '../images/logos/tiktok.svg';
import twitter from '../images/logos/twitter.svg';
import youtube from '../images/logos/youtube.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger)

const MySocials = () => {
    const socialsRef = useRef(null);
    const titleRef = useRef(null)
    useEffect(() => {
        gsap.from(titleRef.current, {
            duration: 1,
            scale: .5,
            opacity: 0,
            scrollTrigger: {
                trigger: socialsRef.current,
                start: 'top center',
            }
        })
    })

    return (
        <section className="w-full h-fit py-20 bg-mainBlue relative" ref={socialsRef}>
            <div className="w-20 h-20 lg:w-32 lg:h-32 blur-[200px] absolute top-0 right-0 bg-blurBlue -z-10" />
            <div className="container px-10">

                <div>
                    <div ref={titleRef}>
                        <TextHeading heading={'Follow me on your favourite socials'} />
                    </div>
                    <div className="w-fit grid grid-cols-2 mx-auto gap-3 pt-20 scale-110 lg:scale-100 lg:grid-cols-4 lg:pt-36">
                        <a href="https://www.instagram.com/nnnedlog" target="_blank" rel="noreferrer" className="text-white w-20 h-20 rounded-md bg-gradient-to-tr from-instagramDark to-instagram lg:p-10 flex justify-center items-center lg:w-36 lg:h-36 hover:-translate-y-4 transition-transform duration-300">
                            <img src={instagram} alt="instagram" className="w-[40%] lg:w-full" />
                        </a>
                        <a href="https://www.tiktok.com/@nnnedlog" target="_blank" rel="noreferrer" className="text-white w-20 h-20 rounded-md bg-gradient-to-b from-borderBlue to-black lg:p-10 flex justify-center items-center lg:w-36 lg:h-36 hover:-translate-y-4 transition-transform duration-300">
                            <img src={tiktok} alt="instagram" className="w-[40%] lg:w-full" />
                        </a>
                        <a href="https://twitter.com/nnnedlog" target="_blank" rel="noreferrer" className="text-white w-20 h-20 rounded-md bg-gradient-to-b from-twitter to-twitterDark lg:p-10 flex justify-center items-center lg:w-36 lg:h-36 hover:-translate-y-4 transition-transform duration-300">
                            <img src={twitter} alt="instagram" className="w-[40%] lg:w-full" />
                        </a>
                        <a href="https://youtube.com/nnnedlog" target="_blank" rel="noreferrer" className="text-white w-20 h-20 rounded-md bg-gradient-to-tr from-youtubeDark to-youtube lg:p-10 flex justify-center items-center lg:w-36 lg:h-36 hover:-translate-y-4 transition-transform duration-300">
                            <img src={youtube} alt="instagram" className="w-[40%] lg:w-full" />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MySocials