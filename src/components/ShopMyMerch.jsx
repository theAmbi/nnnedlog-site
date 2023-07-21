import { TextHeading } from "./utils/Heading"
import teepublic from '../images/logos/teepublic.svg'
import redbubble from '../images/logos/redbubble.svg'
import teespring from '../images/logos/teespring.svg'
const ShopMyMerch = () => {
    return (
        <section className="w-full h-fit py-20 bg-mainBlue">
            <div className="container px-10 lg:px-0 z-20">
                <TextHeading heading={'Shop my merch from various stores'} />
                <div className="w-20 h-20  lg:w-32 lg:h-32 blur-[200px] bg-blurGreen -z-10" />

                <div className="pt-20 flex gap-10 flex-wrap justify-center">
                    <a href="https://www.teepublic.com/user/theambi" target="_blank" className="teepublic font-climate text-white px-5 py-6 bg-gradient-to-r from-black via-black to-gray-800 flex items-center w-[300px] justify-center gap-10 rounded-xl lg:px-10 lg:py-8 lg:w-[400px] lg:hover:scale-105 transition duration-300 ease-in" rel="noreferrer">
                        <img src={teepublic} alt="teepublic" className="w-[15%] lg:w-[20%]" />
                        <p className="text-lg lg:text-2xl">Teepublic</p>
                    </a>
                    <a href="https://goldens-store.creator-spring.com/" target="_blank" className="teepublic font-climate text-white px-5 py-6 bg-gradient-to-r from-teespring to-teespringLight flex items-center w-[300px] justify-center gap-10 rounded-xl lg:px-10 lg:py-8 lg:w-[400px] lg:hover:scale-105 transition duration-300 ease-in" rel="noreferrer">
                        <img src={teespring} alt="teepublic" className="w-[15%] lg:w-[20%]" />
                        <p className="text-lg lg:text-2xl">Teespring</p>
                    </a>
                    <a href="goldendesign19.redbubble.com" target="_blank" className="teepublic font-climate text-white px-5 py-6 bg-gradient-to-r from-redbubble to-redbubbleLight/50 flex items-center w-[300px] justify-center gap-10 rounded-xl lg:px-10 lg:py-8 lg:w-[400px] lg:hover:scale-105 transition duration-300 ease-in" rel="noreferrer">
                        <img src={redbubble} alt="teepublic" className="w-[15%] lg:w-[20%]" />
                        <p className="text-lg lg:text-2xl">Redbubble</p>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default ShopMyMerch